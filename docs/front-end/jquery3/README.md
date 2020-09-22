# jquer3

## 说明

- 形式：尽量口语化的教程。
- 适用：了解 npm，有原生 js 开发经验，想要了解怎么简化 js 操作的开发者。
- 目标：跟着教程实操能入门`jquery3`，能解决实际开发中 50% 以上的问题，熟悉参考资料后能解决 80% 以上的问题。
- 思路：`是什么 -> 为什么 -> 怎么做`和`为什么 -> 是什么 -> 怎么做`。
- 结构：拿单页应用作示例，着重关注怎么使用，最后列出参考资料给你查阅学习。
- 环境：macOS，[vscode](https://code.visualstudio.com/) 和 [chrome](https://www.google.com/chrome/browser/index.html)。另外用 vscode 的 [live server 插件](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)测试构建。
- 约定：使用`${PROJECT_DIR}`表示项目根目录，一般认为`package.json`所处目录就是项目根目录。
- 范围：不考虑 IE 11- 的浏览器。IE 11- 已经连续 24 个月没有得到官方支持，所以不应该再使用 IE 11-。另外，要支持 IE 11-，还要考虑怎么支持完整的 es5 乃至 es3 的语法和特性，非常耗费时间。考虑到[国情](https://tongji.baidu.com/research/site)原因，教程中还是会示例怎么支持 IE 11 的。

## jquery 是什么

jquery 是一个快速、小巧、功能丰富的 js 库，它的所有功能都是用原生 js 实现的。

## 为什么要使用 jquery

- jquery 可以在多种浏览器上使用，不用考虑手动兼容的问题。
- jquery 简化了 html 的遍历和操作、事件处理、动画和网络请求等。
- 如果还没有接触过 js，不应该从 jquery 开始，请先学习 [代码基础 -> js 基础](../../coding-basis/js/README.md)，你也可以查看[学习路径](../roadmap/README.md)，里面有更多学习 js 的推荐。

## demo01 - 引入并体验 jquery

假设我们有这么一个项目。

```sh
.
├── global.css
├── index.css
├── index.html
├── index.js
├── jquery.min.js
└── ress.min.css
```

```css
/* global.css */
html,
body {
  width: 100%;
  height: 100%;
}

html {
  font-size: 14px;
  line-height: 22px;
}

```

```css
/* index.css */
.container {
  width: 100%;
  min-height: 100%;
}

.container,
.container.is-light {
  background-color: #fff;
}

.container.is-dark {
  background-color: #000;
}

```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    />
    <title>demo01</title>
    <link rel="stylesheet" href="./ress.min.css" />
    <link rel="stylesheet" href="./global.css">
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div class="container">
      <p>测试文本</p>
    </div>
    <script src="./index.js"></script>
  </body>
</html>

```

`index.js`是空的，`jquery.min.js`在[这里](https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js)下载，`ress.min.css`在[这里](https://cdn.jsdelivr.net/npm/ress@3.0.0/dist/ress.min.css)下载。

现在，要在`index.js`里面为`.container`这个元素添加一个类`is-dark`，然后把字体颜色设置成`rgba(255, 255, 255, 0.65);`，具体该怎么做？

新手往往会直接这么写。

```js
// ${PROJECT_DIR}/index.js
var eleContainer = document.getElementsByClassName('container')[0];
eleContainer.setAttribute('class', 'is-dark');
eleContainer.style.color = 'rgba(255, 255, 255, 0.65)';
```

现在，我们用 vscode 的 live server 插件来确认一下效果。我们可以发现，这么做会有一个明显的问题，它不会添加一个新类名，而是会覆盖掉原有的类名。

一个可行的解决办法是使用`className`，手动地添加类名。

```js
// ${PROJECT_DIR}/index.js
var eleContainer = document.getElementsByClassName('container')[0];
eleContainer.className += ' is-dark';
eleContainer.style.color = 'rgba(255, 255, 255, 0.65)';
```

我们再来看看使用 jquery 的代码会是什么样子。我们需要在`index.html`里面，在引入`index.js`之前，把 jquery 引入进来。

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...
    <script src="./jquery.min.js"></script>
    <script src="./index.js"></script>
  </body>
</html>

```

然后我们就可以在`index.js`中直接使用 jquery。

```js
// ${PROJECT_DIR}/index.js
var eleContainer = $($('.container')[0]);
eleContainer.addClass('is-dark');
eleContainer.css('color', 'rgba(255, 255, 255, 0.65)');
```

- `$`符号是 jquery 默认使用的符号，我们也可以用`jquery`代替`$`，但未免会增加不少的编码工作。
- L2：等同于原生代码的 L2。我们使用 jquery 选中了特定的元素，获得了一个经 jquery 修改过的 jquery 对象，我们可以在对象上调用 jquery 的各类 api。
- L3：等同于原生代码的 L3。我们使用了 jquery 的`.addClass`api，达到了和原生代码一样的效果。
- L4：等同于原生代码的 L4。我们使用了 jquery 的`.css`api，达到了和原生代码一样的效果。

待补充，催稿可以

（1）邮件催稿

（2）打赏，备注“催稿+内容”（通常这种方式会更有效点，毕竟收了钱不好意思再拖，打了钱就不要再打啦，我会加油写的）

## 参考

- [jQuery](https://jquery.com/)
- [Airbnb JavaScript Style Guide (ES5)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)

<Vssue />
