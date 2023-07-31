# 进入 stage3 的 Promise.withResolvers 提案可以怎么用？

`Promise.withResolvers` 提案最近进入了 stage3，大概率最终会落地进入 ECMAScript 规范。趁着这个时机，我们可以来了解下 `Promise.withResolvers` 实际可以怎么用。

## 背景

如果我们需要在实例化 `Promise` 后配置它的解析和拒绝行为，我们一般从 `Promise` 回调范围中提取 `resolve` 和 `reject` 函数。

### 发起请求

以下就是一个发起请求的例子。

```js
function myRequest(config) {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    // 提取 resolve 和 reject 在别处使用
    resolve = _resolve;
    reject = _reject;
  });
  request(config, (response) => {
    const buffer = [];
    response.on('data', (data) => buffer.push(data));
    response.on('end', () => resolve(buffer)); // 在这里使用 resolve
    response.on('error', (reason) => reject(reason)); // 在这里使用 reject
  });
  return promise;
}
```

现在大部分人都在使用 axios，可能以上例子并不十分直观。

### socket

以下是一个使用 socket 的例子。

```js
let resolve;
let reject;
function request(type, message) {
  if (socket) {
    const promise = new Promise((_resolve, _reject) => {
      // 提取 resolve 和 reject 在别处使用
      resolve = _resolve;
      reject = _reject;
    });
    socket.emit(type, message);
    return promise;
  }
  return Promise.reject(new Error('Socket unavailable'));
}
socket.on('response', (response) => {
  if (response.status === 200) resolve(response); // 在这里使用 resolve
  else reject(new Error(response)); // 在这里使用 reject
});
socket.on('error', (err) => reject(err)); // 在这里使用 reject
```

### 可取消计时器

以下是一个可取消计时器的例子。

```js
function cancelableTimeout(ms) {
  let cancel;
  const promise = new Promise((resolve, reject) => {
    const timeoutId = setTimeout(resolve, ms); // 在这里使用 resolve
    cancel = () => {
      clearTimeout(timeoutId);
      reject(new Error('The timeout was canceled.')); // 在这里使用 reject
    };
  });
  return { promise, cancel };
}
```

### 更多

你可能还了解过一些相关概念，比如 `defer`、`deferred`。它们的实现都是类似的，你可以在 [react 代码库](https://github.com/facebook/react/blob/d9e0485c84b45055ba86629dc20870faca9b5973/packages/react-dom/src/__tests__/ReactDOMFizzStaticBrowser-test.js#L95)、[vue 代码库](https://github.com/vuejs/core/blob/9c304bfe7942a20264235865b4bb5f6e53fdee0d/packages/runtime-core/src/compat/componentAsync.ts#L32)、[vite 代码库](https://github.com/vitejs/vite/blob/134ce6817984bad0f5fb043481502531fee9b1db/playground/test-utils.ts#L225) 和 [axios 代码库](https://github.com/axios/axios/blob/bdf493cf8b84eb3e3440e72d5725ba0f138e0451/lib/cancel/CancelToken.js#L20) 见到它们。

## 解决方案

`Promise.withResolvers` 提案试图为 `Promise` 添加一个静态方法 `withResolvers`，返回一个 `Promise` 实例和相关的 `resolve` 和 `reject`。

```js
const { promise, resolve, reject } = Promise.withResolvers();
```

借助这个提案，上面三个例子可以进一步简化。

### 发起请求

```js
function myRequest(config) {
  let resolve; // [!code --]
  let reject; // [!code --]
  const promise = new Promise((_resolve, _reject) => { // [!code --]
    resolve = _resolve; // [!code --]
    reject = _reject; // [!code --]
  }); // [!code --]
  const { promise, resolve, reject } = Promise.withResolvers(); // [!code ++]
  request(config, (response) => {
    const buffer = [];
    response.on('data', (data) => buffer.push(data));
    response.on('end', () => resolve(buffer));
    response.on('error', (reason) => reject(reason));
  });
  return promise;
}
```

### socket

```js
let resolve; // [!code --]
let reject; // [!code --]
const { promise, resolve, reject } = Promise.withResolvers(); // [!code ++]
function request(type, message) {
  if (socket) {
    const promise = new Promise((_resolve, _reject) => { // [!code --]
      resolve = _resolve; // [!code --]
      reject = _reject; // [!code --]
    }); // [!code --]
    socket.emit(type, message);
    return promise;
  }
  return Promise.reject(new Error('Socket unavailable')); // [!code --]
  return reject(new Error('Socket unavailable')); // [!code ++]
}
socket.on('response', (response) => {
  if (response.status === 200) resolve(response);
  else reject(new Error(response));
});
socket.on('error', (err) => reject(err));
```

### 可取消计时器

```js
function cancelableTimeout(ms) {
  const { promise, resolve, reject } = Promise.withResolvers(); // [!code ++]
  let cancel; // [!code --]
  const promise = new Promise((resolve, reject) => { // [!code --]
    const timeoutId = setTimeout(resolve, ms);
    cancel = () => { // [!code --]
    const cancel = () => { // [!code ++]
      clearTimeout(timeoutId);
      reject(new Error('The timeout was canceled.'));
    };
  }); // [!code --]
  return { promise, cancel };
}
```

## 小结

`Promise.withResolvers` 能够有效地简化从 `Promise` 回调范围中提取 `resolve` 和 `reject` 的场景。目前还比较新，需要通过 Polyfill 来使用。

[提案链接](https://github.com/tc39/proposal-promise-with-resolvers)
