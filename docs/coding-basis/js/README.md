# js 基础

## 类型比较

## 作用域的简单理解

作用域就是变量和函数生效的区域。

ES5 只有全局作用域（全局生效）和函数作用域（函数内生效），导致了内层变量覆盖外层变量，循环变量泄漏成全局变量等问题。

ES6 新增 `let`，实际上可以认为新增了块级作用域（代码块内生效）。块级作用域完美地处理了 ES5 的问题，在开发中推荐使用 ES6+ 的语法特性，在构建时转译即可。

## 闭包 closure

闭包是一个函数，一般是一个函数内部的函数，可以读取、写入自身外层的参数和变量，并让这些参数和变量不会因为垃圾回收机制而被自动回收。也可以考虑使用闭包封装私有属性和方法。

```javascript
function outerFn() {
  let a = 1;
  function innerFn() {
    console.log(a);
  }
  return innerFn;
}
const innerFn = outerFn();
innerFn(); // 1
```

反过来说，由于使用到的参数和变量不会被自动回收，所以很容易导致内存泄漏，还可能污染全局变量。应该要尽可能地克制使用闭包，使用闭包时应该要在退出时清理不需要的变量。

闭包的坑不少，下面来看一些比较常见的坑。

```javascript
for (var i = 0; i < 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
console.log(i);
```

在这里有一个隐蔽的闭包，那就是 `setTimeout` 里面的回调方法。

- 在 `for` 循环开始时，因为没有作用域限制，所有 `var i = 0` 会设置 `window.i`，而且每一轮循环都会给 `window.i` 赋值。
- `setTimeout` 里的回调方法使用了 `i`，也就是 `window.i`。回调方法被实际调用时，`window.i` 才会被访问使用，由于此时循环已经结束，所以 `window.i` 值为 5。
- 最终输出结果是，执行完立刻输出一次 `5`，然后几乎同时输出 5 次 `5`。

现在，如果想要执行完立刻输出一次 `5`，然后按顺序输出 `0`，`1`，`2`，`3`，`4`，可以怎么做呢？可能你会想到使用 `let` 又或者是其它的方法，不妨先自己试试再接着往下看。

如果使用 `let` 而不是使用 `var`，因为 `let` 声明的变量只在它所在的代码块内生效，所以 `i` 就只会在 `for` 循环内起效，没有办法输出 `5`。

```javascript
for (let i = 0; i < 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
console.log(i); // Uncaught ReferenceError: i is not defined
// 0, 1, 2, 3, 4
```

如果 `let i = 0` 移到 `for` 循环之前，这样就能在循环外读取到 `i`，但这与使用 `var` 的输出结果一致，执行完立刻输出一次 `5`，然后几乎同时输出 5 次 `5`。

```javascript
let i = 0;
for (; i < 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, 1000), i;
}
console.log(i);
```

最直接的做法就是利用 [`setTimeout` 的参数](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)，直接传入 `i`。

```javascript
for (var i = 0; i < 5; i += 1) {
  setTimeout(function(i) {
    console.log(i);
  }, 1000, i);
}
console.log(i);
```

[按值传递](https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value)是 JavaScript 的一个重要特性，把 `i` 作为 `setTimeout` 的第三个参数传入，回调方法就能使用传入的参数 `i`，而不是使用 `window.i`。

如果回调方法里没有声明参数，那就会导致回调方法使用的实际是 `window.i`，执行完立刻输出一次 `5`，然后几乎同时输出 5 次 `5`。

```javascript
for (var i = 0; i < 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, 1000, i);
}
console.log(i);
```

参数名全部都使用 `i` 未免有些混乱，下面使用 `j` 的写法会更清晰。

```javascript
for (var i = 0; i < 5; i += 1) {
  setTimeout(function(j) {
    console.log(j);
  }, 1000, i);
}
console.log(i);
```

你也可以把循环内的操作单独成一个方法，同样利用按值传递解决闭包问题。

```javascript
function consoleFn(j) {
  setTimeout(function() {
    console.log(j);
  }, 1000);
}
for (var i = 0; i < 5; i += 1) {
  consoleFn(i);
}
console.log(i);
```

如果想把 `setTimeout` 保留在 `for` 循环里，那写出来的代码不免有些复杂，这里就不再给出示范了，有兴趣可以自行试试。

使用 [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) 也可以利用按值传递。

```javascript
for (var i = 0; i < 5; i += 1) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}
console.log(i);
```

或许你可能想要直接把 IIFE 作为回调方法，但这是行不通的。

```javascript
for (var i = 0; i < 5; i += 1) {
  setTimeout((function(j) {
    console.log(j);
  })(i), 1000);
}
console.log(i);
```

IIFE 没有返回值，会被视作 `undefined`，所以延时之后没有执行任何操作，结果将会是立刻按顺序输出 `0`，`1`，`2`，`3`，`4`，`5`。

现在再改一改，如果想要执行完立刻输出 `0`，然后按每隔一秒依次输出 `1`，`2`，`3`，`4`，`5`，可以怎么做呢？不妨先自己试试。

使用 IIFE 或者把操作单独成方法可以很轻松地做到这一点。

```javascript
for (var i = 0; i <= 5; i += 1) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, i * 1000);
  })(i);
}
```

考虑使用 `let`，甚至可以更简洁。

```javascript
for (let i = 0; i <= 5; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

实际上你还能使用 ES6+ 的 `Promise` 和 `async/await` 来解决这个问题。

```javascript
const tasks = [];
const consoleFn = (i) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(i);
    resolve();
  }, 1000 * i);
});
for (let i = 0; i <= 5; i += 1) {
  tasks.push(consoleFn(i));
}
Promise.all(tasks);
```

```javascript
const sleep = (delay) => new Promise((resolve) => {
  setTimeout(resolve, delay);
});
(async () => {
  for (let i = 0; i <= 5; i += 1) {
    if (i > 0) {
      await sleep(1000);
    }
    console.log(i);
  }
})();
```

或许你会觉得有点小才大用，但这里的主要目的是探讨可行的方法，而并非探讨代码量的多少，思路才是最重要的。

如果你不太能理解这一节，不妨先复习一下 JavaScript 基础和 ES6+ 常用内容，再重新阅读这一节。

闭包也会和 `this` 一起埋坑，下一节再开始这部分。

## this

### 全局对象

在全局环境中，`this` 指向全局对象。在浏览器中，全局对象就是 `window`。

```javascript
console.log(this === window); // true
```

如果一个函数在全局环境里被调用，默认地，函数内的 `this` 也会指向全局对象。

```javascript
var name = 'window';
function getName() {
  console.log(this.name);
}
getName(); // window
```

为了避免意外，一般都会启用严格模式。在严格模式下，函数内的 `this` 不能指向全局对象，默认会是 `undefined`。

```javascript
'use strict';
var name = 'window';
function getName() {
  console.log(this.name);
}
getName(); // Uncaught TypeError: Cannot read property 'name' of undefined
```

### 作为对象的方法调用

当函数作为某个对象的方法调用时，`this` 指向这个对象。

```javascript
var name = 'window';
var object = {
  name : 'object',
  getName: function() {
  　　console.log(this.name);
  },
};
object.getName(); // object
```

但如果将函数赋值给某个变量，而没有立即执行，那就要根据函数执行时所在的环境对象判断 `this`。

```javascript
var name = 'window';
var object = {
  name : "object",
  getName: function() {
  　　console.log(this.name);
  },
};
var getName = object.getName;
getName(); // window
```

`getName` 运行在全局环境中，所以此时 `this` 指向 `window`。

多层对象内的函数的 `this` 指向链式调用最后的对象。

```javascript
var name = 'window';
var object1 = {
  name : 'object1',
  object2: {
    name: 'object2',
    getName: function() {
  　　console.log(this.name);
    },
  }
};
object1.object2.getName(); // object2
```

多层对象里的嵌套函数不会继承 `this`，所以嵌套函数里面的 `this` 在非严格模式下指向全局对象，严格模式下指向 `undefined`。

```javascript
var name = 'window';
var object1 = {
  name : 'object1',
  object2: {
    name: 'object2',
    getName: function() {
      console.log(this.name);
      consoleFn();
      function consoleFn() {
        console.log(this === window);
        console.log(this === object1);
        console.log(this === object1.object2);
      }
    },
  }
};
object1.object2.getName(); // object2 true false false
```

### 作为构造函数调用

使用 `new` 和没有返回值的构造函数，我们可以得到一个实例对象，默认地，内部的 `this` 会指向这个新对象。

```javascript
var name = 'window';
function Test() {
  this.name = 'test';
}
var test = new Test();
console.log(test.name); // test
```

但如果构造函数返回了一个对象，`this` 就会指向返回的对象。如果返回的不是对象，`this` 仍然会指向实例对象。

```javascript
var name = 'window';
function Test() {
  this.name = 'test';
  return {
    name: 'Test',
  };
}
var test = new Test();
console.log(test.name); // Test
```

```javascript
var name = 'window';
function Test() {
  this.name = 'test';
  return 'Test';
}
var test = new Test();
console.log(test.name); // test
```

### call 和 apply

`call` 和 `apply` 都能改变函数内部的 `this` 指向。

它们的第一个参数都是 `this` 需要绑定到的目标。如果不传，传 `undefined` 或传 `null`，默认 `this` 会指向全局对象，严格模式下指向 `undefined`。

```javascript
var name = 'window';
var object = {
  name: 'object'
};
function getName() {
  console.log(this.name);
}
getName.call(object); // object
getName.apply(object); // object
getX.call(); // window
getX.apply(null); // window
getX.call(undefined); // window
```

如果第一个参数不是对象，JavaScript 会自动调用构造函数将其转换成对象。

```javascript
function gePrototypeName() {
  console.log(Object.prototype.toString.call(this));
}
gePrototypeName.call(1); // [object Number]
gePrototypeName.call('test'); // [object String]
```

`call` 和 `apply` 的区别在于 `call` 后续接受一个或多个参数，而 `apply` 接收一个参数数组。

### bind

`bind` 也能改变函数的调用对象，但和 `call`、`apply` 不同，`bind` 会直接返回一个新函数，使用 `call` 或者 `apply` 也不能再次改变这个新函数的 `this` 指向。

```javascript
var name = 'window';
var object = {
  name: 'object'
};
function getName() {
  console.log(this.name);
}
var newGetName = getName.bind(object);
newGetName(); // object
newGetName.call(); // object
newGetName.apply(); // object
```

### 箭头函数

箭头函数内部的 `this` 会继承上层的 `this`。下面用箭头函数改写前面不继承的例子。

```javascript
var name = 'window';
var object1 = {
  name : 'object1',
  object2: {
    name: 'object2',
    getName: function() {
  　  console.log(this.name);
      var consoleFn = () => {
        console.log(this === window);
        console.log(this === object1);
        console.log(this === object1.object2);
      }
      consoleFn();
    },
  }
};
object1.object2.getName(); // object2 false false true
```

可以看到，现在箭头函数内部的 `this` 指向上层的 `this`，也就是 `object1.object2`。

箭头函数本身并没有 `this`，所以用 `call`，`apply`，`bind` 都无法改变箭头函数的指向。

## 原型 prototype，原型链 prototype chain 和继承 inheritance

在 ES6 之前，JavaScript 并没有 `class` 语法，只能通过构造函数来生成实例对象。

```javascript
function Animal() {
  this.name = 'Animal';
}
var animal = new Animal();
console.log(animal); // Animal {name: "Animal"}
```

具体的原型链图将会如下所示。

<img :src="$withBase('/images/js/prototype.svg')" width="512px" alt="原型链">

`null` 之外的每一个 JavaScript 对象在创建时会关联另一个对象，这个对象就是原型，每一个对象都会从原型“继承”属性。

而我们平时使用的数组、对象，默认就有很多方法给我们调用，这些方法都是定义在原型链上的，这就是基于原型链的继承。

```javascript
function Animal() {
  this.name = 'Animal';
}
Object.prototype.eat = function() {
  console.log('eat something');
}
var animal = new Animal();
animal.eat(); // eat something
```

继承意味着复制操作，但是 JavaScript 默认并不会复制对象的属性。JavaScript 只是在两个对象之间创建关联，一个对象就可以通过委托访问另一个对象的属性和函数了。与其叫继承，不如叫做委托更准确些。

我更推荐使用 ES6 引入的 `class` 和 `extends`，它们可以更好更优雅地实现我们的业务，只要记得转译就可以了。

```javascript
Object.prototype.eat = function() {
  console.log('eat something');
}
class Animal extends Object {
  constructor(props) {
    super(props);
    this.name = 'Animal';
  }
}
var animal = new Animal();
animal.eat(); // eat something
```

```javascript
Object.prototype.eat = function() {
  console.log('eat something');
}
class Animal {
  constructor() {
    this.name = 'Animal';
  }
}
var animal = new Animal();
animal.eat(); // eat something
```

## 事件循环机制

在谈及 JavaScript 的事件循环机制前，不得不先谈及进程和线程这两个操作系统里的概念。

在操作系统里，一个任务就是一个进程。比如在电脑上打开了一个浏览器来观看视频，就是打开了一个浏览器进程，系统会自动为每个进程分配它所需要的内存、CPU 等系统资源。可以说，线程是进程的最小单位，一个进程可以包含多个线程。

JavaScript 从一开始就是单线程，也就是说，程序运行时，只有一个线程存在，在特定的时候只能有特定的代码被执行。JavaScript 是一门浏览器脚本语言，常常会操作 DOM，单线程可以避免操作 DOM 冲突。尽管 HTML5 新增可以另开线程的 WebWorker，但另开的线程仍然受到主线程控制，所以 JavaScript 仍然是单线程。

JavaScript 把任务分成同步任务和异步任务，用不同的方式处理二者。

JavaScript 主线程依次执行在执行栈 Execution Context Stack 排好队的同步任务。而遇到异步任务时，将它挂起，然后继续执行执行栈中的同步任务。当异步任务返回了结果（通常是回调函数）时，将结果加入到任务队列里。

当同步任务已经执行完成时，主线程会查看任务队列。如果有任务，主线程会把它们加入到执行栈中执行。执行栈中的任务执行完了之后，主线程又去查看任务队列。这样循环往复的过程就是 JavaScript 的事件循环 Event Loop。

如下图所示。JavaScript 在运行时产生了堆和栈，`ajax`、`setTimeout` 等异步任务被挂起，异步任务的返回结果加入任务队列，主线程会循环往复地读取任务队列中的任务。

![JavaScript 执行栈和任务队列示意图](http://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png)

[图源](http://www.ruanyifeng.com/blog/2014/10/event-loop.html) - 务必阅读[朴灵评注](https://blog.csdn.net/lin_credible/article/details/40143961)

JavaScript 又把异步任务分成宏任务（macro-task，task）和微任务（micro-task），放入不同的任务队列里。常见的宏任务包括 script 整体代码，`setTimeout`，`setInterval` 和 `setImmediate`，常见的微任务包括 `process.nextTick`，`Promise.then`，`Promise.catch`，`await` 后面的代码（`await` 后面的代码等同于 `Promise.then`）等。

![任务队列示意图](https://imgedu.lagou.com/2762e21a8179488b87adc3df18fdbd71.jpg)

[图源](https://www.lagou.com/lgeduarticle/95726.html)

事件循环示意图如下。

<img :src="$withBase('/images/js/event-loop.svg')" width="512px" alt="原型链">

有必要说明一下，因为 `async/await` 本身就是 `Promise`的语法糖，所以下面的代码是等同的。

```javascript
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async1() {
  console.log('async1 start');
  Promise.resolve(async2()).then(() => {
    console.log('async1 end');
  })
}
```

下面结合一些代码段来解释一下。

```javascript
setTimeout(function() {
  console.log('timeout');
}, 0);
for (let i = 0; i < 99999; i += 1) {
  for (let j = 0; j < 99999; j += 1) {}
}
```

- 给 `setTimeout` 设置的延迟时间并不是等待多少毫秒后就一定会执行，而是在多少毫秒后把回调函数加入到宏任务队列里，等主线程已经空闲了才会去查看任务队列并选择执行。
- 规范规定，给 `setTimeout` 设置的延迟时间最小值是 4ms。
- L2 被加入到宏任务队列之后，执行栈中有 L4 - L6 需要执行，耗费的时间较多，所以 L2 只能一直等待，直到主线程空闲了再去读取、执行它。

```javascript
setTimeout(function() {
  console.log(1);
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for (var i = 0; i < 10000; i += 1) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);
```

- 代码开始执行，到 L1，将 `setTimeout` 回调方法的代码，也就是 L2，加入宏任务队列。
- 到 L4 `new Promise`，直接执行 L5 - L9。因为有 `resolve()`，所以会到 L10，将 `Promise.then` 回调方法的代码，也就是 L11，加入微任务队列。
- 到 L13，直接执行。
- 执行所有微任务，也就是 L11。
- 重新开始事件循环，读取并执行一个宏任务，也就是 L2。
- 执行完毕，最后结果是 `2`，`3`，`5`，`4`，`1`。

```javascript
async function async1() {
  console.log('1');
  await async2();
  console.log('2');
}
async function async2() {
  console.log('3');
}
console.log('4');
setTimeout(function() {
  console.log('5');
}, 0);
async1();
new Promise(function(resolve) {
  console.log('6');
  resolve();
}).then(function() {
  console.log('7');
});
console.log('8');
```

- 代码开始执行，到 L9，直接执行。
- 到 L10，将 `setTimeout` 回调方法的代码，也就是 L11，加入宏任务队列。
- 到 L13，进入 `async1`，直接执行 L2，然后执行 L3 进入 `async2`，再直接执行 L7，随后把 `await` 之后的代码，也就是 L4，加入微任务队列。
- 到 L14 `new Promise`，直接执行 L15 - L16。因为有 `resolve()`，所以会到 L17，将 `Promise.then` 回调方法的代码，也就是 L18，加入微任务队列。
- 到 L20，直接执行。
- 依次执行所有微任务，也就是依次执行 L4 和 L18。
- 重新开始事件循环，读取并执行一个宏任务，也就是 L11。
- 执行完毕，最后结果是 `4`，`1`，`3`，`6`，`8`，`2`，`7`，`5`。

```javascript
console.log(1);
setTimeout(function() {
  console.log(2);
  new Promise(function(resolve) {
    console.log(3);
    resolve(4);
  }).then(function(num) {
    console.log(num);
  })
}, 300);
new Promise(function(resolve) {
  console.log(5);
  resolve(6);
}).then(function(num) {
  console.log(num);
});
setTimeout(function() {
  console.log(7);
}, 400);
```

- 代码开始执行，到 L1，直接执行。
- 到 L2，300 毫秒后，将 `setTimeout` 回调方法的代码，也就是 L3 - L9，加入宏任务队列。
- 到 L11 `new Promise`，直接执行 L12 - L13。因为有 `resolve()`，所以会到 L14，将 `Promise.then` 回调方法的代码，也就是 L15，加入微任务队列，其中 `num` 的值是 6，对应 `resolve()` 传入的参数。
- 到 L17，400 毫秒后，将 `setTimeout` 回调方法的代码，也就是 L18，加入宏任务队列，L18 在 L3 - L9 之后。
- 执行所有微任务，也就是 L15。
- 重新开始事件循环，读取并执行一个宏任务，也就是 L3 - L9。
- 到 L4 `new Promise`，直接执行 L5 - L6。因为有 `resolve()`，所以会到 L7，将 `Promise.then` 回调方法的代码，也就是 L8，加入微任务队列，其中 `num` 的值是 4，对应 `resolve()` 传入的参数。
- 执行所有微任务，也就是执行 L8。
- 重新开始事件循环，读取并执行一个宏任务，也就是 L18。
- 执行完毕，最后结果：`1`，`5`，`6`，`2`，`3`，`4`，`7`。

## 参考

- [现代 JavaScript 教程](https://zh.javascript.info/)
- [前端九部](https://www.yuque.com/fe9/basic)
- [阮一峰 - ECMAScript 6 入门](https://es6.ruanyifeng.com/)
- [前端面试真题](https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet)
- [大前端面试宝典 - 图解前端](https://lucifer.ren/fe-interview/)
- [前端面经总结](http://interview.poetries.top/)
- [冴羽博客](https://github.com/mqyqingfeng/Blog)
- [nicole_zhang18970 - 浅谈 instanceof 和 typeof 的实现原理](https://juejin.cn/post/6844903613584654344)
- [blanu - [译] JavaScript：立即执行函数表达式（IIFE）](https://segmentfault.com/a/1190000007569312)
- [王仕军 - 破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.cn/post/6844903474212143117)
- [王仕军 - 破解前端面试（80% 应聘者不及格系列）：从 DOM 说起](https://juejin.cn/post/6844903474547671047)
- [Liril - Excuse me？这个前端面试在搞事！](https://zhuanlan.zhihu.com/p/25407758)
- [vajoy - ES6 箭头函数中的 this？你可能想多了（翻译）](https://www.cnblogs.com/vajoy/p/4902935.html)
- [micherwa - 细说 call、apply 以及 bind 的区别和用法](<https://segmentfault.com/a/1190000018017796>)
- [sunshine 小小倩 - this、apply、call、bind](https://juejin.cn/post/6844903496253177863)
- [winty - 这一次彻底弄懂 Promise 原理](https://juejin.cn/post/6844904063570542599)
- [暮雨清秋 - 详解 JavaScript 中的 Event Loop（事件循环）机制](https://zhuanlan.zhihu.com/p/33058983)
- [xuelanying - 事件循环](https://www.cnblogs.com/xuelanying/p/14406912.html)
- [wanngxi01 - 一道题理解 setTimeout,Promise,async/await 以及宏任务与微任务](https://www.cnblogs.com/wangxi01/p/11190608.html)
- [九旬 - 为什么要用 setTimeout 模拟 setInterval](https://segmentfault.com/a/1190000038829248)
- [Matt Frisbie - JavaScript 高级程序设计](https://weread.qq.com/web/reader/fd332480811e4dd5dg011874)
- [周爱民 - JavaScript 语言精髓与编程实践](https://weread.qq.com/web/reader/bd73243071e43421bd7c139)
- [这波能反杀 - 前端基础进阶（一）：内存空间详细图解](https://www.jianshu.com/p/996671d4dcc4)
- [这波能反杀 - 前端基础进阶（二）：执行上下文详细图解](https://www.jianshu.com/p/a6d37c77e8db)
- [这波能反杀 - 前端基础进阶（三）：变量对象详解](https://www.jianshu.com/p/330b1505e41d)
- [这波能反杀 - 前端基础进阶（四）：作用域与作用域链](https://www.jianshu.com/p/9b984874776c)
- [这波能反杀 - 前端基础进阶（五）：闭包](https://www.jianshu.com/p/21a16d44f150)
- [这波能反杀 - 前端基础进阶（六）：setTimeout 与循环闭包面试题详解](https://www.jianshu.com/p/9b4a54a98660)
- [这波能反杀 - 前端基础进阶（七）：全方位解读 this](https://www.jianshu.com/p/d647aa6d1ae6)
- [这波能反杀 - 前端基础进阶（八）：在 chrome 开发者工具中观察函数调用栈、作用域链与闭包](https://www.jianshu.com/p/73122bb3d262)
- [这波能反杀 - 前端基础进阶（九）：函数与函数式编程](https://www.jianshu.com/p/69dede6f7e5f)
- [这波能反杀 - 前端基础进阶（十）：深入详解函数的柯里化](https://www.jianshu.com/p/5e1899fe7d6b)
- [这波能反杀 - 前端基础进阶（十一）：详解面向对象、构造函数、原型与原型链](https://www.jianshu.com/p/15ac7393bc1f)
- [这波能反杀 - 前端基础进阶（十二）：面向对象实战之封装拖拽对象](https://www.jianshu.com/p/b3dee0e84454)
- [这波能反杀 - 前端基础进阶（十三）：详细图解 jQuery 对象，以及如何扩展 jQuery 插件](https://www.jianshu.com/p/3f97570d22b4)
- [这波能反杀 - 前端基础进阶（十四）：深入核心，详解事件循环机制](https://www.jianshu.com/p/12b9f73c5a4f)
- [这波能反杀 - 前端基础进阶（十五）：透彻掌握 Promise 的使用，读这篇就够了](https://www.jianshu.com/p/fe5f173276bd)
- [这波能反杀 - 前端基础进阶（十六）：es6 常用基础合集](https://www.jianshu.com/p/cfb0893c34f1)
- [这波能反杀 - 前端基础进阶（十七）：详解 ES6 Modules](https://www.jianshu.com/p/b7db6224a4aa)

待补充，催稿可以

（1）邮件催稿

（2）打赏，备注“催稿+内容”（通常这种方式会更有效点，毕竟收了钱不好意思再拖，打了钱就不要再打啦，我会加油写的）

<Vssue />
