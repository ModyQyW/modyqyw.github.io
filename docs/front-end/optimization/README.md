# 优化

## 说明

- 形式：尽量口语化的笔记和示例。
- 适用：对 `vue` 和 `react` 底层，浏览器底层，js 引擎有基本了解，想要了解前端优化的开发者。
- 目标：了解前端项目的可用优化，包括开发、编译和运行，这些优化一般需要手动处理，而不包含在各类 Linter 规则之中。
- 状态：目前处于完善中状态，可能会有遗漏、错误、不完美，但已经可以正常阅读。如果你发现了错误，请在评论里告诉我，谢谢。

## 活用语言特性和数据类型处理条件分支

假定现在需要实现一个方法，接收的参数是数字，返回的参数是颜色值字符串。传入 13 的时候返回黑色，其他情况返回白色。

```javascript
const getColorString = (number) => {
  if (number === 13) {
    return '#000';
  } else {
    return '#fff';
  }
};
```

假如现在需要传入 2 的时候返回 `#fafafa`，传入 3 的时候返回 `#f5f5f5`。你可能会继续扩展 `if ... else ...` 代码块，像下面这样。

```javascript
const getColorString = (number) => {
  if (number === 2) {
    return '#fafafa';
  } else if (number === 3) {
    return '#f5f5f5';
  } else if (number === 13) {
    return '#000';
  } else {
    return '#fff';
  }
};
```

这也太没完没了了，长此以往将会有堆叠如山的 `if ... else ...` 块出现。我建议，当 `if ... else ...` 块达到 3 或以上的时候，就可以考虑使用 switch 了。

```javascript
const getColorString = (number) => {
  switch (number) {
    case 2: return '#fafafa';
    case 3: return '#f5f5f5';
    case 13: return '#000';
    default: return '#fff';
  }
};
```

毫无疑问，继续添加 case 也会让 case 堆积如山。在这个例子里，考虑使用 Array 来处理越来越多的 case 是一个更好的选择。

```javascript
const colors = [
  '#fff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000',
];

const getColorString = (number) => {
  return colors[number] || colors[0];
};
```

如果说要传入字符串，那么使用 Object 是一个更好的选择。

```javascript
const colorObject = {
  'gray-1': '#fff',
  'gray-2': '#fafafa',
  'gray-3': '#f5f5f5',
  'gray-4': '#f0f0f0',
  'gray-5': '#d9d9d9',
  'gray-6': '#bfbfbf',
  'gray-7': '#8c8c8c',
  'gray-8': '#595959',
  'gray-9': '#434343',
  'gray-10': '#262626',
  'gray-11': '#1f1f1f',
  'gray-12': '#141414',
  'gray-13': '#000',
};

const getColorString = (colorName) => {
  return colorObject[colorName] || colorObject['gray-1'];
};
```

如果你熟悉 Map，使用 Map 也完全没有问题。

```javascript
const colorMap = new Map([
  ['gray-1', '#fff'],
  ['gray-2', '#fafafa'],
  ['gray-3', '#f5f5f5'],
  ['gray-4', '#f0f0f0'],
  ['gray-5', '#d9d9d9'],
  ['gray-6', '#bfbfbf'],
  ['gray-7', '#8c8c8c'],
  ['gray-8', '#595959'],
  ['gray-9', '#434343'],
  ['gray-10', '#262626'],
  ['gray-11', '#1f1f1f'],
  ['gray-12', '#141414'],
  ['gray-13', '#000'],
]);

const getColorString = (colorName) => {
  return colorMap.get(colorName) || colorMap.get('gray-1');
};
```

这么做的好处就是分离了数据源和操作，在改动时更加方便明确。

如果使用了 `vue` 全家桶，结合计算属性也能写出类似的代码。

```html
<template>
  <!-- 一个传入颜色下标，显示对应颜色值的 vue 单文件组件 -->
  <span>{{ color }}</span>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    // 读取数组 colors，数据源是 this.$store.state.colors
    // 我们只需要拿到 colors 就可以了，无需关心数据源内部如何运作
    ...mapState({
      colors: state => state.colors,
    }),
    // 设置需要显示的颜色值，默认为 #fff
    color() {
      return this.colors[index] || '#fff'
    }
  },
}
</script>
```

## 使用事件委托减少绑定的事件数量

假如你有下面这么一段核心的 html 代码，需要监听所有 `li` 元素的点击事件。

```html
<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
```

很自然地会出现一种想法，那就是直接监听每个 `li` 标签的点击事件。

<img :src="$withBase('/images/optimization/event-delegation-1.svg')" alt="事件委托 1">

```javascript
// 如果你不了解 document.querySelectorAll
// 或许你需要再去学习一下 js 基础
document.querySelectorAll('li').forEach((element) => {
  element.onclick = () => {
    console.log(this.innerHTML);
  };
});
```

这种想法虽然直观，但性能比较差，因为它添加了 3 个监听事件。

如果只监听 `li` 的父元素 `ul` 并根据 `event` 来判断，我们就省去了 2 个监听事件，消耗的浏览器资源也更少。

<img :src="$withBase('/images/optimization/event-delegation-2.svg')" alt="事件委托 2">

```javascript
document.querySelector('ul').onclick = ({ target }) => {
  if (target.nodeName.toLowerCase() === 'li') {
    console.log(target.innerHTML)
  }
};
```

如果要为大量元素都绑定一个事件，不如在它们共同的父元素上绑定一个事件以做处理，这就是事件委托。它能有效地减少绑定的事件数量，减少内存使用。

## 留意局部性

局部性原理 Locality 是操作系统里面的一个概念，指 CPU 访问存储器时访问的存储单元都趋于聚集在一个较小的连续区域内，这有利于提高访问速度。如果你不了解操作系统的概念，大可以直接跳到这部分的结尾看我给出的建议。

由于 js 都运行在 js 引擎上，也就是专门处理 js 引擎的虚拟机上，虚拟机也类似于一个小型操作系统，所以局部性原理也可以迁移到 js 上。

局部性有三种。

- 时间局部性 - 被访问一次的内存位置在短期内很可能被再次访问。
- 空间局部性 - 未来访问的内存位置很可能和当前访问的内存位置相邻。
- 顺序局部性 - 大部分指令是顺序进行的。

如果你了解 vue composition-api 和 react hooks，你应该能感受到它们和时间局部性有异曲同工之妙，它们都推荐把相关联的代码放在一起。

因为时间局部性和顺序局部性和引擎相关性较大，我们难以施加影响，所以我们重点关注一下空间局部性。

不妨先考虑遍历一个较大的二维数组。

```javascript
// 构造一个数组
const array = [];
for (let i = 0; i < 10000; i += 1) {
  const element = [];
  for (let j = 0; j < 10000; j += 1) {
    element.push(j);
  }
  array.push(element);
}

let sum;
let timestamp;

// 遍历方法 1
timestamp = new Date();
sum = 0;
for (let row = 0; row < 10000; row += 1) {
  for (let col = 0; col < 10000; col += 1) {
    sum += array[row][col];
  }
}
console.log(new Date() - timestamp);

// 遍历方法 2
timestamp = new Date();
sum = 0;
for (let col = 0; col < 10000; col += 1) {
  for (let row = 0; row < 10000; row += 1) {
    sum += array[row][col];
  }
}
console.log(new Date() - timestamp);
```

我们的重点不在 `sum` 的结果，而在两种方法的耗时。

测试环境如下。

<table>
  <tr>
    <td>机型</td>
    <td>MacBook Pro (15-inch, 2018)</td>
  </tr>
  <tr>
    <td>系统</td>
    <td>macOS Big Sur 11.2</td>
  </tr>
  <tr>
    <td>处理器</td>
    <td>2.6 GHz 六核Intel Core i7</td>
  </tr>
  <tr>
    <td>内存</td>
    <td>16 GB 2400 MHz DDR4</td>
  </tr>
</table>

遍历方法 1 的耗时在 0.98 秒左右波动，而遍历方法 2 的耗时在 3.85 秒左右波动，遍历方法 2 使用的时间几乎是遍历方法 1 的 4 倍。

这和 js 引擎怎么处理数组这种引用类型有关。一般来说，js 引擎会把数组按行顺序存放在内存里，所以先访问同一行的数据（先访问 `array[0][0]` 再访问 `array[0][1]`）要比先访问同一列的数据（先访问 `array[0][0]` 再访问 `array[1][0]`）要快，在列数较多的情况下速度差距表现尤其明显。

一个建议是，按照访问顺序来访问 Array 和 Object。

访问 Array 可以使用 `Array.prototype.forEach` 或 `Array.prototype.entries`，也可以直接使用 `for` 和 `while` 遍历。

```javascript
array.forEach((element, index) => {
  console.log(element, index);
});

for (const [index, element] of array.entries()) {
  console.log(element, index);
}

for (let i = 0, length = array.length; i < length; i += 1) {
  console.log(array[i], i);
}

```

而对象的访问顺序可以使用 `Object.keys` 获取，也可以使用 `Object.entries`。

```javascript
const keys = Object.keys(object);
keys.forEach((key) => {
  console.log(key, object[key]);
});
for (const [, key] of keys.entries()) {
  console.log(key, object[key]);
}
for (let i = 0, length = keys.length; i < length; i += 1) {
  console.log(keys[i], object[keys[i]]);
}

for (const [key, value] of Object.entries(object)) {
  console.log(key, value);
}
```

## 克制地使用 JS 改变网页内容

浏览器使用 HTML Parser（HTML 解析器）解析 HTML 文件，得到 DOM Tree（DOM 树，DOM 即 Document Object Model，文档对象模型）。

对于 CSS 文件，浏览器使用 CSS Parser（CSS 解析器）解析，得到 Style Rules（也可以叫 CSSOM，CSS Object Model，层叠样式表对象模型）。

之后，浏览器会结合 DOM Tree 和 Style Rules，生成 Render Tree（渲染树），它包含了所有节点的样式信息。

浏览器生成布局 layout，再将布局绘制 paint，显示给用户查看。而生成布局和绘制这两步合称为渲染 render，耗时相当多。

下面的图示囊括了以上的步骤。

![浏览器工作原理](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015091502.png)

[图源](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

渲染至少会进行一次，也就是打开网站的那一次。之后，如果进行了特定的操作，就会导致重新渲染 rerender，也就导致了重新生成布局（简称重排 reflow）和重新绘制（简称重绘 repaint）。

需要明确的是，重绘不一定导致重排，但重排一定导致重绘。

比如改变文字颜色，只会导致重绘，而改变文字位置就会导致重排和重绘。重排和重绘不能避免，但可以减少，只要减少重排和重绘，就能有效地提高网页性能。

一个简单有效的建议就是，对 DOM 的读操作和写操作应尽量分开，读操作放在一起，写操作另外放在一起。这样能让浏览器把变动集中在一起统一处理，避免触发多次重排和重绘。

```javascript
// bad
div.style.color = 'blue';
const marginTop = parseInt(div.style.marginTop); // 浏览器被迫重新渲染
div.style.marginTop = (margin + 10) + 'px';

// good
const offsetTop  = div.offsetTop;
div.style.top = top + 10 + "px";
div.style.color = 'blue'; // 浏览器统一处理

```

一般地，如果写操作后读取元素的位置相关信息，就会导致立即重新渲染。下面列写了读取元素的位置相关信息的属性或方法，我们应该尽量避免这种导致立即重新渲染的操作。

<table>
  <tr>
    <td><code>Element.offset{Top|Right|Bottom|Left}</code></td>
    <td><code>Element.scroll{Top|Right|Bottom|Left}</code></td>
  </tr>
  <tr>
    <td><code>Element.client{Top|Right|Bottom|Left}</code></td>
    <td><code>window.getComputedStyle</code></td>
  </tr>
</table>

另一个行之有效的建议就是，尽量避免过多地直接操作非 `display: none` 的处于正常文档流的 DOM 元素。这个建议需要拆分成三个部分来阐述。

首先是“直接操作”。直接操作可能会导致额外的重新渲染。你可以操作 [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)，操作完成后加入到 DOM 内；又或者克隆节点 [Node.cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode) 然后操作，最后用新节点替换原节点。

第二个部分是“非 `display: none` 的元素”。`display: none` 的元素不会影响重新渲染，所以可以给一个需要多次操作的节点设置 `display: none`，操作完之后再让它正常显示，这样就可以只需要 2 次重新渲染。另外，`visibility: hidden` 的元素只影响重绘，不影响重排，这也是一个可利用的点。

最后一个部分是“处于正常文档流的元素”。`position: absolute` 和 `position: fixed` 的元素就是脱离了正常文档流的元素，即便改变了它们，重排的开销也比较小，因为无需考虑该元素对其它元素的影响。

现在 `vue` 和 `react` 内部都使用了 Virtual DOM，一般而言你无需操心 DOM 是如何读写的。但一旦脱离框架想要在原生上做更深入的优化，那就不得不提到手动调节重新渲染这个方法。

某些时候无法避免密集的重新渲染，比如网页动画。网页动画的每一帧 frame 都是一次重新渲染，只有帧率达到 25 或以上，人眼才会感觉到比较流畅。

![帧率示意图](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015091509.jpg)

[图源](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

大多数显示器的刷新频率是 60Hz（1 秒刷新 60 次），所以网页动画达到 60Hz（1 秒 60 次重新渲染，每次重新渲染的时间不能超过 16.66 毫秒）就会和大多数显示器同步刷新，达到良好的视觉效果。由于浏览器计算重排、执行重绘也需要时间，所以留给我们的操作时间不足 16.66 毫秒。

![重新渲染示意图](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015091511.png)

[图源](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

一个解决方法是使用 web worker，跟 UI 渲染不相关的任务（比如处理数据）都放在 worker 线程，这样就不会干扰到主线程渲染 UI 了。限制就是，worker 内不能直接操作 DOM 节点，也不能使用 window 对象的默认方法和属性。

另一个解决办法就是使用 `window.requestAnimationFrame`，它可以把一些代码放到下一次重新渲染时执行，类似的 API 还有 `window.requestIdleCallback`。

由于我个人对这方面接触还是相对较少，这里就不展开了。如果你感兴趣，不妨去查阅一下 API 说明，以及 react 团队为 concurrent mode 做出的工作。

## 鼓励用户更新，减少不必要的兼容

前端已经发展了多年，已经有相当多的新特性新语法加入到浏览器的支持中。遗憾的是，为了兼容低版本的浏览器，比如 IE（大部分政企和高校计算机仍在使用），低版本 Android 和低版本 iOS，不得不加入各种 polyfill，甚至只能使用旧做法来做兼容。

拿 [caniuse](https://caniuse.com) 上面的 flexbox 来举例。

<img :src="$withBase('/images/optimization/caniuse-flexbox.png')" alt="caniuse-flexbox">

可以看到，IE 全系列，Android 4.4 和 iOS 9 之前的版本对 flexbox 支持度不佳。如果我们需要适配这些版本，就需要加入 polyfill，甚至不能使用 flexbox（IE 6-9）。

为了兼容而加入的 polyfill 浪费了服务器的空间，也浪费了访问用户的流量和时间（如果下载速度比较慢的话）。如果要兼容更古老的浏览器，还会浪费了开发人员过多的时间、精力。

鼓励用户放弃旧版本的浏览器不仅是帮助开发人员，也是在帮助访问用户。如果有意放弃低版本浏览器和手机系统，不妨学习一下 YouTube 是怎么劝说用户放弃 IE 6 的。

迫于现实压力，在低版本浏览器彻底退出历史舞台之前，我们仍然需要做兼容，但这不阻碍我们来看一下放弃兼容之后可行的做法，某些做法甚至已经投入到实践当中了。

- 图片使用 WebP/SVG/HEIF/AVIF 替代 BMP/JPG/PNG 等。
- 图标使用 SVG 或图标字体替代 PNG。
- 使用浏览器原生支持的 html 新标签，css 新特性（比如 flexbox/grid，可以替代 float），js 新语法和新特性（比如箭头函数，Map 和 Set）。
- ...

## 确定标签的位置

下面是一个使用了 bootstrap 3 的 html 文件基本结构。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css"
      integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
      integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

```

可以看到，加载外链样式文件的标签放在了 html 文件头部，而加载外链脚本文件的标签放在了 html 文件尾部。这也是最常见的做法。

首先需要明确一点，html 文件的解析是从上到下的。

加载外链样式文件的标签放的位置，其实不影响 html 的解析，因为 css 的解析和 html 的解析会同步进行，但放的位置会影响渲染。

如果把加载外链样式文件的标签放在 html 文件的尾部，浏览器就需要额外的时间解析样式文件。同时，浏览器会先渲染出一个没有外链样式的页面（会有行内样式），样式解析、加载完之后再重新渲染，这会耗费额外的时间，页面本身会闪烁，用户体验相当不好。

而当浏览器解析到加载外链脚本文件的标签时，浏览器会立即下载执行，html 的解析就此暂停。如果下载执行的耗时过长，网页就会长时间没有响应，导致假死现象。

所以，把加载外链样式文件的标签放在 html 文件头部，把加载外链脚本文件的标签放在 html 文件尾部，就成了最常见的做法。

如果外链脚本文件内部没有操作 DOM，可以使用 `async` 或 `defer` 属性将它设置成异步加载。使用 `async` 属性的外链脚本文件一旦加载完成就会立即执行，而使用 `defer` 属性的会在 `DOMContentLoaded` 事件之前（也就是页面 DOM 加载完成时）执行。

还需要注意的一点是，既然是异步加载，就无法确定哪个外链脚本文件的内容会被优先执行，这取决于下载完成的顺序。

## 合理构建

脚手架往往已经为我们准备好了合理的构建，假如我们不是在使用脚手架，那么这部分相对来说更像是分析脚手架为我们做了什么，还有我们还能往脚手架里添加什么。

每一次请求资源都需要耗费一些时间，即便是长连接也是如此，所以减少请求次数、压缩资源体积就成了常见有效的优化方法。

要减少请求次数，我们可以把小文件合并成大文件，这样能减少非下载数据的时间。早期前端会使用雪碧图来压缩图片，现在更常见的是把较小的图片内联到代码内（`url-loader` 和 `file-loader`），如果不考虑兼容性也会使用 SVG。而在处理 js 时，也会进行必要的分块（`splitChunks`），合理的分块可以使加载速度变快，让用户先获取到必要的资源以显示网页。

而压缩资源体积则经常由各个插件完成，比如 `terser-webpack-plugin` 和 `cssnano`，通过移除注释、移除空格等方式，它们成功地压缩了资源本身的体积。而要再进一步压缩，我们现在常常会考虑使用 `compression-webpack-plugin`，压缩得到 gzip 文件，它往往会更小。

除此之外，我们还可以使用 CDN 来访问某些包的已构建资源，CDN 往往能加快资源的访问速度。但 CDN 的稳定性并不由自己掌控，我自己更倾向于使用 `splitChunks` 分理出一些版本稳定的包，放到自己的服务器上，设置好缓存。一般而言，这样不会依赖于 CDN，是我认为更好的选择。

`vue-cli` 还有特别的优化，那就是 `preload` 和 `prefetch`（`@vue/preload-webpack-plugin`），使用了之后浏览器会在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。

有关 `webpack` 的部分，你可以查看我的 [webpack4 示例](../webpack4/README.md)。

## 重构

重构在我看来也属于优化的一种，以上所提及的优化手段都可以用到重构里面去。我还想提一些我自己关于重构的认识。

- 不要为了优化过早地重构。在项目开发早期，尽可能地把时间投入到实际开发上，等项目稳定之后，再考虑优化的问题。当然，仍然鼓励一步到位写出良好的代码。对于初学者而言，可以保留自己早期的代码，积累经验后再回头重构，这会有更好的学习体验。
- 不要拖到最后一刻再去重构。无法否认的是，项目的需求会不停变更后，原本符合需求的良好的代码可能会逐渐劣化，在代码变得难以挽回之前，很需要去重构一次代码。一般我会认为，如果一处功能的代码对应的需求修改了 3-5 次，就需要一次小型的重构。大型的重构往往出现在 50 次修改之后，或需要迁移代码的时候。
- 提取重复代码并封装。
- 尽可能拆分函数功能，让一个函数尽可能对应一个功能。
- 尽可能使用预置的 API，如 `Array.prototype.filter` 筛选符合条件的数组元素，比直接写 `forEach` 或者 `for` 等要简洁一些。

## 优化 vue

- `vue` 本身应用了 Virtual DOM，尽可能自动且高效地处理节点的操作。
- 总是结合使用 `v-for` 和 `key`，以便维护内部组件及其子树的状态。这和 `vue` 的 Diff 算法效率有关。
- 模板不应该包含过于复杂的表达式，它们应该被拆分为计算属性或方法。
  - 如果计算属性或方法也过于复杂，应该再做进一步拆分。
- 不需要观测的数据（比如纯粹的展示用数据），可以在 `created` 生命周期内挂载到 `this` 上，避开 `getter`，`setter` 和 `watcher`，减少内存占用。也可以考虑使用 `Object.freeze`。
- 无需维护自己状态的组件，如展示类组件和高阶组件，一般更适合用函数式组件渲染，减少额外的开销。
- `v-if` 更适合条件不太可能改变的情况，`v-show` 更适合条件频繁切换的情况。
  - `v-if` 是惰性的，如果初始条件为假，则什么也不做，只有在条件第一次变为真时才开始局部编译，切换消耗更多。
  - `v-show` 不是惰性的，在任何条件下都被编译，然后被缓存，保留 DOM 元素，初始渲染消耗更多。
- 要灵活使用路由懒加载。首页无需懒加载，其他页面建议懒加载。
- 需要改善 SEO 时，考虑 SSR（Server Side Render，服务端渲染）或者预渲染 prerender。
  - SSR允许搜索引擎爬虫抓取工具直接抓取完全渲染的页面

## 优化 react

## 参考

- David Thomas, Andrew Hunt - 程序员修炼之道
- Martin Fowler - 重构
- [谭光志 - 带你入门前端工程](https://woai3c.gitee.io/introduction-to-front-end-engineering/)
- [[ JS 进阶 ] 基本类型 引用类型 简单赋值 对象引用](https://segmentfault.com/a/1190000002789651)
- [阮一峰 - 网页性能管理详解](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)
- [WindrunnerMax - Vue 常用性能优化](https://www.cnblogs.com/WindrunnerMax/p/13972793.html)
- [Vue.js 服务端渲染指南](https://ssr.vuejs.org/zh/)

<Vssue />
