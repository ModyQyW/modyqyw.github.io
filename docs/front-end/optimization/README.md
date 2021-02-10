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

这也太没完没了了，当 if else 块达到 3 或以上的时候，你就可以考虑使用 switch 了。

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

那如果再加呢？太多的 case 也会让 switch 难以维护，这个时候你就应该考虑使用 Array 了。

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

如果说要传入字符串，使用 Object 是更好的选择。

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

这么做的好处就是分离了数据源和数据源的操作，在改动时更加方便明确。

## 使用事件委托减少绑定的事件数量

如果要为某个元素的每个子元素都绑定一个事件，不如只在这个元素上绑定一个事件，这就是事件委托，它能有效地减少绑定的事件数量，减少内存使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
  </ul>
</body>
</html>
```

```javascript
// bad
document.querySelectorAll('li').forEach((element) => {
  element.onclick = () => {
    console.log(this.innerHTML);
  };
});

// good
document.querySelector('ul').onclick = ({ target }) => {
  if (target.nodeName.toLowerCase() === 'li') {
    console.log(target.innerHTML)
  }
};
```

## 留意局部性

局部性原理 Locality 是操作系统里面的一个概念，指 CPU 访问存储器时访问的存储单元都趋于聚集在一个较小的连续区域内，这有利于提高访问速度。如果你不了解操作系统的概念，大可以直接跳到这部分的结尾看我给出的建议。

由于 js 都运行在 js 引擎上，也就是专门处理 js 引擎的虚拟机上，虚拟机也类似于一个小型操作系统，所以局部性原理也可以迁移到 js 上。

局部性有三种。

- 时间局部性 - 被访问一次的内存位置在短期内很可能被再次访问。如果你了解 vue composition-api 和 react hooks，你应该能感受到异曲同工之妙，它们都推荐把相关联的代码放在一起。
- 空间局部性 - 未来访问的内存位置很可能和当前访问的内存位置相邻。
- 顺序局部性 - 大部分指令是顺序进行的。

时间局部性基本不用关注，顺序局部性基本是 js 引擎优化的注意事项，所以我们来重点关注一下空间局部性。

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
console.log(new Date() - timestamp); // 984

// 遍历方法 2
timestamp = new Date();
sum = 0;
for (let col = 0; col < 10000; col += 1) {
  for (let row = 0; row < 10000; row += 1) {
    sum += array[row][col];
  }
}
console.log(new Date() - timestamp); // 3861
```

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

可以看到，遍历方法 2 使用的时间要多得多。这是因为 js 会把数组按行顺序存放在内存里，所以先访问同一行的数据（先访问 `array[0][0]` 再访问 `array[0][1]`）要比先访问同一列的数据（先访问 `array[0][0]` 再访问 `array[1][0]`）要快，在列数较多的情况下速度差距表现尤其明显。

一个具体的建议是，按照访问顺序来访问 Array 和 Object。

访问 Array 可以使用 `Array.prototype.forEach` 或 `Array.prototype.entries`，必要时可以使用 `for`，`for ... of ...` 或 `while` 循环。

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

![浏览器工作原理](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015091502.png)

[图源](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)

浏览器使用 HTML Parser（HTML 解析器）解析 HTML 文件，得到 DOM Tree（DOM 树，DOM 即 Document Object Model，文档对象模型）；使用 CSS Parser（CSS 解析器）解析 CSS 文件，得到 Style Rules（实际上我们也叫它 CSSOM，CSS Object Model，层叠样式表对象模型）。

之后，浏览器会结合 DOM Tree 和 Style Rules，生成 Render Tree（渲染树），它包含了所有节点的样式信息。

浏览器生成布局 layout，再将布局绘制 paint，显示给用户查看。而生成布局和绘制这两步合称为渲染 render，耗时相当多。

渲染至少会进行一次，也就是打开网站的那一次。之后，如果进行了特定的操作，就会导致重新渲染 rerender，也就导致了重新生成布局（简称重排 reflow）和重新绘制（简称重绘 repaint）。

重绘不一定导致重排，但重排一定导致重绘。比如改变文字颜色，只会导致重绘，而改变文字位置就会导致重排和重绘。重排和重绘不能避免，但可以减少，只要减少重排和重绘，就能有效地提高网页性能。

- 对 DOM 的读操作和写操作应尽量分开，读操作放在一起，写操作另外放在一起。这样能让浏览器把变动集中在一起，一次性执行，避免触发多次重排和重绘。
  - 一个例子就是不要一条条地改变样式，可以使用 `class` 来一次性改变样式。
- 尽量避免过多地直接操作可见的处于正常文档流的 DOM 元素。
  - 直接操作可能会导致额外的重新渲染。你可以操作 Document Fragment 对象，操作完成后加入到 DOM 内；又或者操作克隆出来的节点，然后替换原始节点。`vue` 和 `react` 都应用了一种 Virtual DOM 的技术，用于避免过多地直接操作 DOM 元素。
  - 元素不可见时，不影响重新渲染。你可以给一个需要多次操作的节点设置 `display: none`，操作完之后设置正常显示，这样就可以只需要 2 次重新渲染，避免了多次重新渲染。另外，`visibility: hidden` 的元素只影响重绘，不影响重排。
  - 元素不位于正常文档流时，比如 `position: absolute` 和 `position: fixed`，重排的开销较小，因为无需考虑该元素对其它元素的影响。
- 手动调节重新渲染。

手动调节重新渲染是相对来说比较麻烦的一件事情，这要从帧率开始说起。

某些时候无法避免密集的重新渲染，比如网页动画。网页动画的每一帧 frame 都是一次重新渲染，只有帧率达到 25 或以上，人眼才会感觉到比较流畅。而大多数显示器的刷新频率是 60Hz（1 秒刷新 60 次），所以网页动画达到 60Hz（1 秒 60 次重新渲染，每次重新渲染的时间不能超过 16.66 毫秒）就会和显示器同步刷新，达到良好的视觉效果。

由于浏览器计算重排、执行重绘也需要时间，所以留给我们的操作时间不足 16.66 毫秒。一个解决方法是使用 web worker，跟 UI 渲染不相关的任务（比如处理数据）都放在 worker 线程，这样就不会干扰到主线程渲染 UI 了。但在 worker 内不能直接操作 DOM 节点，也不能使用 window 对象的默认方法和属性，限制还是相对比较多的。

另一个解决办法就是使用 `window.requestAnimationFrame`，它可以把一些代码放到下一次重新渲染时执行。类似的还能使用 `window.requestIdleCallback`，这里就不再展开了。

如果你还有兴趣，不妨去查阅一下 react 团队为了 concurrent mode 而做出的工作。

## 鼓励用户更新，减少不必要的兼容

前端已经发展了多年，已经有相当多的新特性新语法加入到浏览器的支持中。遗憾的是，为了兼容低版本的浏览器，比如 IE（大部分政企和高校计算机仍在使用），低版本 Android 和低版本 iOS，不得不加入各种 polyfill，甚至只能使用旧做法来做兼容。

这些兼容浪费了开发人员太多的时间、精力，浪费了服务器的空间，也浪费了访问用户的流量和时间（如果下载速度比较慢的话）。鼓励用户放弃旧版本的浏览器不仅是帮助开发人员，也是在帮助访问用户。如果有意放弃低版本浏览器和设备，不妨学习一下 YouTube 是怎么劝说用户放弃 IE 6 的。

迫于现实压力，在低版本浏览器彻底退出历史舞台之前，我们仍然需要做兼容，但这不阻碍我们来看一下放弃兼容之后我们能预想到的做法，某一些做法甚至已经投入到实践当中了。

- 图片使用 WebP/SVG/HEIF/AVIF 替代 BMP/JPG/PNG 等。
- 图标使用 SVG 或图标字体替代 PNG。
- 使用浏览器原生支持的 html 新标签，css 新特性（比如 flexbox/grid，可以替代 float），js 新语法和新特性（比如箭头函数，Map 和 Set）。
- ...

## 确定标签的位置

一般来说，加载外链样式文件的标签应该要放在 html 文件头部，而加载外链脚本文件的标签应该要放在 html 文件尾部。

html 文件的解析是从上到下的，而加载外链样式文件的标签放在 html 文件的哪个位置并不影响 html 的解析，因为 css 的解析和 html 的解析会同步进行，但它的位置会影响渲染。如果把它放在 html 文件的尾部，就需要额外的时间解析样式文件，而且浏览器会先渲染出一个没有外链样式的页面（会有行内样式），样式解析、加载完之后再重新渲染出有外链样式的页面，这将会导致耗费额外的时间，页面本身也会出现闪烁，用户体验相当不好。

解析到加载外链脚本文件的标签时，浏览器会立即下载执行，html 的解析就此暂停。如果下载执行的耗时过长，网页就会长时间没有响应，导致假死现象。而当外链脚本文件内没有操作 DOM 时，可以使用 `async` 或 `defer` 属性设置为异步加载。使用 `async` 属性的外链脚本文件一旦加载完成就会立即执行，而使用 `defer` 属性的会在 `DOMContentLoaded` 事件之前（也就是页面 DOM 加载完成时）执行。另外还需要注意，既然是异步加载，就无法确定哪个外链脚本文件的内容会被优先执行，这取决于下载完成的顺序。

## 合理构建

脚手架往往已经为我们准备好了合理的构建，假如我们不是在使用脚手架，那么这部分相对来说更像是分析脚手架为我们做了什么，还有我们还能往脚手架里添加什么。

每一次请求资源都需要耗费一些时间，即便是长连接也是如此，所以减少请求次数、压缩资源体积就成了常见有效的优化方法。

要减少请求次数，我们可以把小文件合并成大文件，这样能减少非下载数据的时间。早期前端会使用雪碧图来压缩图片，现在更常见的是把较小的图片内联到代码内（`url-loader` 和 `file-loader`），如果不考虑兼容性也会使用 SVG。而在处理 js 时，也会进行必要的分块（`splitChunks`），合理的分块可以使加载速度变快，让用户先获取到必要的资源以显示网页。

而压缩资源体积则经常由各个插件完成，比如 `terser-webpack-plugin` 和 `cssnano`，通过移除注释、移除空格等方式，它们成功地压缩了资源本身的体积。而要再进一步压缩，我们现在常常会考虑使用 `compression-webpack-plugin`，压缩得到 gzip 文件，它往往会更小。

除此之外，我们还可以使用 CDN 来访问某些包的已构建资源，CDN 往往能加快资源的访问速度。但 CDN 的稳定性并不由自己掌控，我自己更倾向于使用 `splitChunks` 分理出一些版本稳定的包，放到自己的服务器上，设置好缓存。一般而言，这样不会依赖于 CDN，是我认为更好的选择。

有关 `webpack` 的部分，你可以查看我的 [webpack4 示例](../webpack4/README.md)。

<Vssue />
