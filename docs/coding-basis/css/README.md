# CSS 基础

只是基础，并不是所有的 css。均依据 css3 说明，不考虑不支持 css3 的浏览器。

## 什么是 css

css 即 Cascade Style Sheet，层叠样式表，用于定义一个或一组元素的样式。

如果要兼容 IE8，只能使用 css2 的属性。

## 页面必须要有 css 吗

不是。浏览器有默认的样式，但这就意味着不书写 css，不同浏览器呈现的样式不一致。在书写 css 时应尽量严格遵循设计稿，尽可能地使页面在不同浏览器下有同样的样式。

## css 可以放在哪里

- 内联样式

  直接在元素的 style 属性中书写。但在需要写很多样式的时候，就显得非常臃肿。

  ```html
  <p style="color: #000">p</p>
  ```

- 内部样式表

  在 html 文件中的 style 元素中书写。但在需要写很多样式的时候，就显得非常臃肿。

  ```html
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      /* 在这里写样式 */
    </style>
  </head>
  <body>
  </body>
  </html>
  ```

- 外部样式表

  在 css 文件中书写，然后在 html 文件中的 link 元素引入 css 文件。需要写很多样式的时候，应当使用这种方式。

  ```html
  <link href="./css/test.css" rel="stylesheet">
  ```

  这种方式也可以引入图标。

  ```html
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  ```

  一般不推荐使用`@import`进行引入。

  ```css
  @import 'test.css';
  @import url('test.css');
  ```

## 选择器 selector

要使样式作用到元素上，需要先通过选择器选择元素。简单的选择器有通配选择器，元素选择器/类型选择器，ID 选择器和类选择器。

- 通配选择器

  ```css
  /* 选择所有元素 */
  /* 下面的三点表示省略具体样式，具体样式将会在之后讲解 */
  * { ... }
  ```

- 元素选择器/类型选择器

  ```css
  /* 选择所有 p 元素 */
  p { ... }
  ```

- id 选择器

  ```css
  /* 选择 id 为 login-form 的元素 */
  #login-form { ... }
  ```

- 类选择器

  ```css
  /* 选择所有类为 tip 的元素 */
  .tip { ... }

简单选择器之间加入结合符（ > + ~ 等）能形成复合选择器，又称组合器 combinator。

- 后代组合器

  ```css
  /* 选择 p 元素的所有子孙元素中的 span 元素*/
  p span { ... }
  ```

- 子女选择器

  ```css
  /* 选择 p 元素的所有子女元素中的 span 元素 */
  p > span { ... }
  ```

- 相邻兄弟选择器

  ```css
  /* 选择 h1 之后它相邻兄弟元素中的 p 元素 */
  h1 + p { ... }
  ```

- 普通兄弟选择器

  ```css
  /* 选择 h1 之后它所有兄弟元素中的 p 元素 */
  h1 ~ p { ... }
  ```

- 直接组合器

  ```css
  /* 选择 id 为 login-form 的 form 元素 */
  form#login-form { ... }
  ```

- 群组选择器

  ```css
  /* 选择 p 元素和类名为 tip 的元素 */
  p, .tip { ... }
  ```

- 否定选择器

  ```css
  /* 选择所有类名不为 tip 的 p 元素 */
  p:not(.tip) { ... }
  ```

也可以根据元素属性进行选择。

- 属性选择器

  ```css
  /* 选择带有属性 alt 的元素 */
  [alt] { ... }
  /* 选择带有属性 alt 属性的 img 元素 */
  img[alt] { ... }
  /* 选择属性 alt 的值为 fig 1-1 的元素 */
  [alt="fig 1-1"] { ... }
  /* 选择属性 alt 的值以 fig 开头的元素 */
  [alt^="fig"] { ... }
  /* 选择属性 alt 的值以 1-1 结尾的元素 */
  [alt$="1-1"] { ... }
  /* 选择属性 alt 的值包含字符串 -1 的元素 */
  [alt*="-1"] { ... }
  /* 选择属性 alt 的值包含单词 fig 的元素 */
  [alt~="fig"] { ... }
  ```

伪元素选择器能给你更细粒度的样式控制。

- 伪元素选择器

  ```css
  /* 选择 p 元素内容的第一个字母 */
  /* :: 也可以写成 : */
  p::first-letter { ... }
  /* 选择 p 元素内容的第一行 */
  p::first-line { ... }
  /* 选择 p 元素的内容之后插入内容 abc */
  p::after { content: "abc"; }
  /* 选择 p 元素的内容之前插入内容 abc */
  p::before { content: "abc"; }
  ```

伪类选择器的作用类似于伪元素选择器。

- 伪类选择器

  ```css
  /* 选择没有访问过的 a 元素*/
  a:link { ... }
  /* 选择访问过的 a 元素 */
  a:visited { ... }
  /* 选择鼠标悬停下的元素 */
  *:hover { ... }
  /* 选择正在访问的 a 元素 */
  a:active { ... }
  /* 选择获得焦点的 input 元素 */
  input:focus { ... }
  ```

类似的还有结构伪类。

- nth-child 选择器

  ```css
  /* 父元素的各种类型的子女元素均参与计数，对应位置为 p 元素才会被选中 */
  /* p 元素的父元素的第一个子女元素*/
  p:first-child { ... }
  /* p 元素的父元素的最后一个子女元素 */
  p:last-child { ... }
  /* p 元素的父元素的唯一一个子女元素 */
  p:only-child { ... }
  /* p 元素的父元素的第 5 个子女元素 */
  p:nth-child(5) { ... }
  /* p 元素的父元素的倒数第 5 个子女元素 */
  p:nth-last-child(5) { ... }
  /* p 元素的父元素的第偶数个子女元素 */
  p:nth-child(even) { ... }
  /* p 元素的父元素的第 1，4，7，... 个子女元素 */
  p:nth-child(3n+1) { ... }
  ```

- nth-of-type 选择器

  ```css
  /* 父元素的子女元素中只有 p 元素参与计数并被选中*/
  /* p 元素的父元素的第一个子女元素 */
  p:first-of-type { ... }
  /* p 元素的父元素的最后一个子女元素 */
  p:last-of-type { ... }
  /* p 元素的父元素的唯一一个子女元素 */
  p:only-of-type { ... }
  /* p 元素的父元素的第 5 个子女元素 */
  p:nth-of-type(5) { ... }
  /* p 元素的父元素的倒数第 5 个子女元素 */
  p:nth-last-of-type(5) { ... }
  /* p 元素的父元素的第奇数个子女元素 */
  p:nth-of-type(odd) { ... }
  /* p 元素的父元素的第 6，7，8，... 个子女元素 */
  p:nth-child(n+6) { ... }
  /* p 元素的父元素的第 1-9 个子女元素 */
  p:nth-child(-n+9) { ... }
  /* p 元素的父元素的第 4-8 个子女元素 */
  p:nth-child(n+9):nth-child(-n+8) { ... }
  /* p 元素的父元素的第 2-9 个子女元素中的奇数位元素 */
  p:nth-child(n+2):nth-child(-n+9):nth-child(odd) { ... }
  ```

## 样式层叠

很多时候一个元素的样式并非直接对元素定义，而是对其祖先元素定义，然后通过继承性得到样式。但注意，并非所有样式都具有继承性。

如果有多个同一样式同时作用在同一元素，就出现了样式层叠，这时 css 解析器会根据选择器特殊性来确定优先权，进而选择其中一个样式作用在该元素上。

选择器越特殊优先权越高，优先权最高的样式被选中。如果最高优先权的样式有多个，则要看离元素最近的被选中。

特殊性值根据以下规则确定：

- 每个元素只能定义一个行内样式，特殊性为`[1, 0, 0, 0]`（你可以将其视为一个一维向量）
- id 选择器，特殊性为`[0, 1, 0, 0]`
- 类选择器、属性选择器、伪类选择器，特殊性为`[0, 0, 1, 0]`
- 元素选择器、伪元素选择器，特殊性为`[0, 0, 1, 0]`
- 结合符、通配选择器，特殊性为`[0, 0, 0, 0]`
- 继承所得选择器，特殊性为`[0, 0, 0, 0]`
- 加上`!important`的样式有最高特殊性值

优先权确定请参考以下两条

- 越靠前的值，权重越大，例：`[0, 1, 0, 0]`>`[0, 0, 2, 0]`
- 相同位置的值相同，看下一位置的值，例：`[0, 0, 2, 1]`>`[0, 0, 2, 0]`

## 定位样式 positioning

### `position`

如果需要重叠元素，一个较为直观的方式就是使用`position`样式。

最常见的`position`样式有四种：

- `static`：默认取值，采用正常文档流定位，正常情况下无须显式定义
- `fixed`：相对于相对于屏幕视口`viewport`（即浏览器当前能看到的部分）进行定位，不会随页面滚动
- `relative`：相对于正常文档流位置进行定位
- `absolute`：相对于非`static`的最近祖先元素（一直上溯到根元素）进行定位

非`static`元素的位置需要使用样式属性`top`，`right`，`bottom`，`left`进行设置，分别对应上下左右四个方向，可以取负值。

如果`top`和`bottom`都被指定了值（非`auto`），优先取`top`的值，忽略`bottom`的值。

`position`属性指定一个元素在文档中的定位方式，`top`，`right`，`bottom`，`left`四个属性决定了该元素的最终位置。

重点在于`relative`和`absolute`这两个取值，二者通常结合使用。

下面给出一个例子。假定主要页面结构如下所示。

```html
<body>
  <div>
    <p>abc</p>
  </div>
</body>
```

为 div 和 p 元素添加样式如下所示。

`width: 300px;`表示 div 元素的宽度为 300px（此处只需了解 px 为一个度量单位，后面会做相关介绍），`height: 300px;`表示 div 元素的高度为 300px，`background-color: rgba(0, 0, 0, 0.5);`会为 div 元素添加一个背景颜色，`0.5`可写作`.5`（此处只需了解这是添加背景颜色即可，后面会做相关介绍）。

```css
div {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
}
```

`position: absolute;`定义了 p 的定位样式，而 div 元素指定`position: relative;`样式，所以 p 将相对于 div 元素进行定位。而`right: 0;`表示 p 的位置与 div 元素的右边相贴，`bottom: 0;`表示 p 的位置与 div 元素的下边相贴，所以 p 元素应该会出现在 div 元素的右下方。

```css
p {
  position: absolute;
  right: 0;
  bottom: 0;
}
```

在 Chrome 较新版本下，可以看到 div 元素并没有紧贴窗口，这是 Chrome 浏览器默认的样式所致的。我们可以引入外部的`normalize.css`样式，使得大部分元素的表现符合正常的预期。我们会在后面专门有一章节讲解`normalize.css`相关。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css">
```

完整代码如下。可以复制粘贴到某个 html 文件中保存，然后在浏览器打开该文件查看效果。

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Test</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css">
  <style>
    div {
      position: relative;
      width: 300px;
      height: 300px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    span {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  </style>
</head>

<body>
  <div>
    <span>abc</span>
  </div>
</body>

</html>
```

更加复杂的情况，比如多个元素的定位样式为`position: relative`和`position: absolute`时的情况，请自行尝试。

### `z-index`

`z-index`属性决定了在视觉上，哪个具有定位属性的元素及其子代元素会更在上层。通常来说 z-index 较大的元素会覆盖在较小的元素上。

下面给出完整代码，可以复制粘贴到某个 html 文件中保存，然后在浏览器打开该文件查看效果。

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Test</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css">
  <style>
    html, body, .container {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }

    [class*="z-"] {
      position: absolute;
    }

    .z-1 {
      z-index: 1;
    }

    .z-2 {
      z-index: 2;
    }

    .z-3 {
      z-index: 3;
    }

    .red {
      background-color: red;
    }

    .green {
      background-color: green;
    }

    .blue {
      background-color: blue;
    }

    .square-100px {
      width: 100px;
      height: 100px;
    }

    .square-200px {
      top: 50px;
      left: 50px;
      width: 200px;
      height: 200px;
    }

    .square-300px {
      top: 150px;
      left: 150px;
      width: 300px;
      height: 300px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="z-2 red square-100px"></div>
    <div class="z-1 green square-200px"></div>
    <div class="z-3 blue square-300px"></div>
  </div>
</body>

</html>
```

## 盒模型样式 Box Model

将每个 html 元素都视为一个矩形盒子，盒模型样式就是用于描述这些盒子自身的样式，包括相对位置，长度，宽度，边框，显示等。

每个盒子会有四个边界：内容边界 content edge，内边距边界 padding edge，边框边界 border edge，外边距边界 margin edge，对应地有四个区域：内容区域 content area（对应下图内容边界内白色部分），内边距区域 padding area（对应下图内边距边界与内容边界之间白色部分），边框区域 border area（对应下图边框边界与内边距边界之间蓝色部分），外边距区域 margin area（对应下图外边距边界与边框边界格子部分）。

![盒模型示意图](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)

### `box-sizing`

`box-sizing`控制一个元素的总宽度和总高度的计算。`box-sizing`样式取值只有以下 2 种：

- `content-box`：默认值，只考虑内容区域的宽和高
- `border-box`：考虑边框区域，内边距区域和内容区域总计的宽和高

### `display`

`display`样式定义元素呈现为什么元素，最常见的`display`样式取值有以下 5 种：

- `inline`：元素呈现为行内元素，`width`，`height`，上下`margin`和上下`padding`相关样式不起作用（`width`，`height`，`margin`和`padding`会在之后进行详细讲解）。
- `block`：元素呈现为块级元素。
- `inline-block`：元素呈现为行内元素，但能像块级元素一样设置`width`，`height`，上下`margin`和上下`padding`相关样式。
- `none`：元素不显示，会影响页面布局。
- `flex`：元素呈现为 flex 元素，能够进行 flex 布局。

更多的取值与相关含义请参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)。

### `flex`

flex 布局是一些较新的项目中常用的项目，主要面向现代浏览器。

要启用 flex 布局，通常首先要选定一个元素，并声明`display: flex`，这个元素被称为`容器`，它的子元素被称为`项目`，在项目上设置`float`，`clear`，`vertical-align`属性均无效。

![容器](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

![项目](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)

首先看作用在容器上的属性。

首先可以通过指定`flex-direction`属性来指定容器的主轴 main axis 方向，没有指定的属性将作为容器的交叉轴 cross axis 方向，这将影响项目的排布。`flex-direction`属性常见 4 个取值：`row`（默认），`column`，`row-reverse`，`column-reverse`。

如下图所示，左边两个，从上到下是`flex-direction: row;`和`flex-direction: row-reverse;`的情况，右边两个，从左到右是`flex-direction: column;`和`flex-direction: column-reverse;`。

![flex-direction](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

接下来可以通过指定`flex-wrap`属性来指定项目是否需要全部放在容器的一行（对于`flex-direction: row`和`flex-direction: row-reverse`）或一列（对于`flex-direction: column`和`flex-direction: column-reverse`）中。`flex-wrap`属性只有 3 个取值：`nowrap`（默认），`wrap`，`wrap-reverse`。

如下图所示是`flex-wrap: wrap`的情况。

![flex-wrap: wrap](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

以上两个属性，可以直接简写成`flex-flow: <flex-direction> <flex-wrap>`，默认为`flex-flow: row nowrap`。

接着可以通过指定`justify-content`属性来指定项目在容器主轴上的对齐方式。`justify-content`常见 6 个取值：`flex-start`（默认），`center`，`flex-end`，`space-between`，`space-around`，`space-evenly`。注意，取`space-around`时，左右两端项目与容器之间的空间，是项目彼此间空间的½。

![justify-content](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

随后可以通过指定`align-items`属性来指定项目在容器交叉轴上的对齐方式。`align-items`常见 5 个取值：`flex-start`，`center`，`flex-end`，`stretch`（默认），`baseline`。

![align-items](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

最后可以通过指定`align-content`属性来指定在有多行的情况下，所有项目形成的总体与交叉轴的对齐方式，类似于`justify-content`。`align-content`常见 7 个取值：`flex-start`，`center`，`flex-end`，`stretch`，`space-between`，`space-around`，`space-evenly`。

![align-content](https://css-tricks.com/wp-content/uploads/2018/10/align-content.svg)

然后再来看作用在项目上的属性。

首先可以通过`order`属性来指定项目排列顺序，数值越小越靠前，默认为 0。

![order](https://css-tricks.com/wp-content/uploads/2018/10/order.svg)

可以通过`flex-grow`，`flex-shrink`和`flex-basis`三个属性来指定项目所占空间的大小。

`flex-basis`属性指定在调整项目所占空间之前，项目所占的主轴空间，默认为`auto`，也可以设置成和`width`、`height`属性一样的值。

`flex-grow`属性指定项目的放大比例，默认为 0，这意味着即使容器主轴有多余空间，项目也不会放大。假如值为正数，则容器主轴的多余空间会根据该值按比例分配给各项目。

![flex-grow](https://css-tricks.com/wp-content/uploads/2018/10/flex-grow.svg)

`flex-shrink`属性指定项目的缩小比例，默认为 1，即容器主轴空间不足时，项目自动按比例缩小。

以上三个属性，可以直接简写成：`flex: <flex-grow> <flex-shrink>? <flex-basis>？`，默认值为`flex: 0 1 auto`，后面两项是可选的。`flex`属性有两个快捷值：`auto`（即`1 1 auto`）和`none`（即`0 0 auto`）。

最后通过`align-self`属性指定单个项目不一样的交叉轴对齐方式，覆盖容器的`align-items`属性，默认为`auto`，即继承容器的`align-items`属性的值。

### `float`

`float`定义元素浮动在父元素的哪一边，允许文本和内联元素环绕它。元素会从网页的正常文档流中移除，但仍保持着一定的流动性。

最常见的（不是全部的）`float`取值有三种：

- `none`: 默认取值，表示元素不浮动
- `left`: 表示元素浮动在父元素的左边
- `right`: 表示元素浮动在父元素的右边

`float`取值合法且不为 `none` 的元素，被称为浮动元素。

上面的话初读不好理解，下面结合例子来说明。

首先我们来看浮动的效果。我们构建一个宽度为 100% 的 div 作为承载浮动元素的容器。

```html
<div class="container">
  <div class="float-left">float-left1</div>
  <div class="float-left">float-left2</div>
  <div class="float-left">float-left3</div>
  <div class="float-right">float-right1</div>
  <div class="float-right">float-right2</div>
  <div class="float-right">float-right3</div>
</div>
```

```css
.container {
  width: 100%;
}
```

接下来为元素添加浮动样式。为了更好地看出效果，需要另外添加背景色，边框颜色和文字颜色。

```css
.container {
  width: 100%;
  background-color: #000;
  color: red;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
```

可以看到，三个 .float-left 元素都挤占在页面左上方，三个 .float-right 元素都挤占在页面右上方。

神奇的是，我们没有看到 .container 的背景颜色。这是因为浮动元素会从网页的正常文档流中移除，这时可以认为没有设置高度的 .container 元素没有子元素来撑开它的高度，所以 .container 元素的高度为 0。这种情况，我们称之为“高度塌陷。”

我们为 .container 添加高度为 256px。之后再查看页面，就能看到 .container 元素的背景颜色了。

```css
.container {
  width: 100%;
  height: 256px;
  background-color: #000;
  color: red;
}
```

我们让 .container 元素稍微往下移动一点。`margin-top: 64px;`是之后会讲到的内容，此处只需知道它类似于 top 属性，会影响 .container 元素的位置即可。

```css
.container {
  width: 100%;
  height: 256px;
  margin-top: 64px;
  background-color: #000;
  color: red;
}
```

可以看到，几个浮动元素也跟着往下移动了，这是因为浮动元素虽然会从网页的正常文档流中移除，但仍保持着一定的流动性，可以进一步地理解为，浮动元素的宽度、高度、位置等仍与其父元素挂钩。

进一步地，我们往父元素中添加不浮动的元素。

```html
<div class="container">
  <div class="float-left">float-left1</div>
  <div class="float-left">float-left2</div>
  <div class="float-left">float-left3</div>
  <div class="float-right">float-right1</div>
  <div class="float-right">float-right2</div>
  <div class="float-right">float-right3</div>
  <div class="div">div1</div>
  <div class="div">div2</div>
  <div class="div">div3</div>
</div>
```

可以看到，内容为 div1 的 div 不浮动元素在左浮动元素的右边，右浮动元素的左边。而其余 div 元素位于内容为 div1 的 div 元素的下方，这是因为几个浮动元素都仅仅占据了其内容所需要的空间，不浮动元素围绕在浮动元素周围了。

为浮动元素指定高度，可以看到，现在所有不浮动元素都对齐了。

```css
.float-left {
  float: left;
  height: 100%;
}
.float-right {
  float: right;
  height: 100%;
}
```

高度设定为 100% 生效，从中我们可以确认，浮动元素的宽度和高度，仍与其父元素有关联。

反过来，我们再来看“高度塌陷”现象。现在指定了 .container 元素的固定高度，假如想要 .container 元素的高度由子元素撑开而不是直接指定，该怎么办？

很简单，就是要清除浮动。最简单的方法就是添加一个空的 div 元素，使用`clear`属性禁止两边浮动。

```html
<div class="container">
  <div class="float-left">float-left1</div>
  <div class="float-left">float-left2</div>
  <div class="float-left">float-left3</div>
  <div class="float-right">float-right1</div>
  <div class="float-right">float-right2</div>
  <div class="float-right">float-right3</div>
  <div class="clear"></div>
</div>
```

```css
.clear {
  clear: both;
}
```

可以看到 .container 元素的背景颜色出现了。我们再为它加上几个不浮动的元素。

```html
<div class="container">
  <div class="float-left">float-left1</div>
  <div class="float-left">float-left2</div>
  <div class="float-left">float-left3</div>
  <div class="float-right">float-right1</div>
  <div class="float-right">float-right2</div>
  <div class="float-right">float-right3</div>
  <div class="div">div1</div>
  <div class="div">div2</div>
  <div class="div">div3</div>
  <div class="clear"></div>
</div>
```

这个时候会发现，为浮动元素指定高度 100% 失效了，这是因为 .container 元素的高度本身也是不固定的。如果想达到不围绕的效果，我们可以调整不浮动元素的`margin`样式，让它们看起来处于父元素的中间。

首先需要指定浮动元素的宽度，然后指定不浮动元素的`margin`样式，左、右偏移分别大于左、右浮动元素的相加宽度，如此便一切正常了。

```css
.float-left {
  float: left;
  width: 16px;
}
.float-right {
  float: right;
  width: 8px;
}
.div {
  margin-left: 64px;
  margin-right: 48px;
}
```

我们还能利用 after 伪元素来清除浮动。

```html
<div class="container">
  <div class="float-left">float-left1</div>
  <div class="float-left">float-left2</div>
  <div class="float-left">float-left3</div>
  <div class="float-right">float-right1</div>
  <div class="float-right">float-right2</div>
  <div class="float-right">float-right3</div>
  <div class="div">div1</div>
  <div class="div">div2</div>
  <div class="div">div3</div>
</div>
```

```css
.container::after {
  content: '';
  clear: both;
}
```

此外，我们可以创建 BFC 来清除浮动。进阶阅读：

- [块格式化上下文（Block Formatting Context，BFC）](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

`float`样式会对`display`样式产生影响，之后会做相关说明。

### `width`

根据`box-sizing`来指定区域的宽度。最常见的`width`样式取值示例如下：

- 30%: 父元素的 30% 宽度
- 30px: 30 像素，通常与显示设备相关
- 30vw: 视口宽度的 30%
- 30vmin: 视口高度和宽度之间的最小值的 30%
- 30vmax: 视口高度和宽度之间的最大值的 30%

长度单位参考 [MDN `<length>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length) 和 [MDN `<length-percentage>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length-percentage)。

### `min-width`

根据`box-sizing`来指定区域的最小宽度。

### `max-width`

根据`box-sizing`来指定区域的最大宽度。

### `height`

根据`box-sizing`来指定区域的宽度。最常见的`height`样式取值示例如下：

- 30%：父元素的 30% 高度
- 30px
- 30vh: 视口高度的 30%
- 30vmin：视口高度和宽度之间的最小值的 30%
- 30vmax：视口高度和宽度之间的最大值的 30%

### `min-height`

根据`box-sizing`来指定区域的最小高度。

### `max-height`

根据`box-sizing`来指定区域的最大高度。

### `padding`

`padding`设置一个元素的内边距，该属性取值不能为负值。

`padding`属性实则包含四个子属性：`padding-top`，`padding-right`，`padding-bottom`，`padding-left`。

```css
div {
  padding: 1px;
  /*
  * 等同于
  * padding-top: 1px;
  * padding-right: 1px;
  * padding-bottom: 1px;
  * padding-left: 1px;
  */
  padding: 1px 2px;
  /*
  * 等同于
  * padding-top: 1px;
  * padding-right: 2px;
  * padding-bottom: 1px;
  * padding-left: 2px;
  */
  padding: 1px 2px 3px;
  /*
  * 等同于
  * padding-top: 1px;
  * padding-right: 2px;
  * padding-bottom: 3px;
  * padding-left: 2px;
  */
  padding: 1px 2px 3px 4px;
  /*
  * 等同于
  * padding-top: 1px;
  * padding-right: 2px;
  * padding-bottom: 3px;
  * padding-left: 4px;
  */
}
```

### `margin`

`margin`设置一个元素的内边距，该属性取值可以为负值。

`margin`属性实则包含四个子属性：`margin-top`，`margin-right`，`margin-bottom`，`margin-left`。

```css
div {
  margin: 1px;
  /*
  * 等同于
  * margin-top: 1px;
  * margin-right: 1px;
  * margin-bottom: 1px;
  * margin-left: 1px;
  */
  margin: 1px 2px;
  /*
  * 等同于
  * margin-top: 1px;
  * margin-right: 2px;
  * margin-bottom: 1px;
  * margin-left: 2px;
  */
  margin: 1px 2px 3px;
  /*
  * 等同于
  * margin-top: 1px;
  * margin-right: 2px;
  * margin-bottom: 3px;
  * margin-left: 2px;
  */
  margin: 1px 2px 3px 4px;
  /*
  * 等同于
  * margin-top: 1px;
  * margin-right: 2px;
  * margin-bottom: 3px;
  * margin-left: 4px;
  */

  margin: 0 auto; /* 居中 */
}
```

更多的取值与相关含义请参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)。

### `overflow`

`overflow`设置内容超出盒子时该如何呈现内容。最常见的`overflow`样式取值有以下 4 种：

- `visible`：默认值，内容不会被裁剪，会呈现在盒子以外。
- `hidden`：内容会被裁剪，而且被裁减的内容不可见。
- `scroll`：内容会被裁剪，滚动条会被显示以便查看其余内容。
- `auto`：由浏览器决定，如果内容被裁剪，就会显示滚动条以便查看其余内容。

`overflow`实则是`overflow-x`和`overflow-y`的简写属性，分别对应水平轴和竖直轴的表现。直接为`overflow`设置一个值，相当于为`overflow-x`和`overflow-y`设置同样的值。

## 排版样式 Typographic

### `font-family`

`font-family`用于设置对应元素的字体，需要给定一个有先后顺序的，由字体名或者字体族名组成的列表。

小程序端不建议设置字体，使用默认字体即可。网页建议使用阿里巴巴普惠体。使用外部字体时，需要通过`@font-face`进行导入，可参考我自己的默认配置 [css-styles/web/global.scss](https://github.com/ModyQyW/css-styles/tree/master/web/global.scss)。

### `font-size`

`font-size`指定对应元素的文字大小，通常使用`14px`或`16px`作为基准大小，但是为了适配大屏幕，目前也有使用`rem`作为单位的情况。

以`rem`作为单位，取值将会是页面根元素字体的相对大小。假如页面根元素字体大小`14px`，某元素字体大小是`1.5rem`，则该元素字体大小实际是`21px`。

### `font-style`

`font-style`指定文字的倾斜样式，常见取值有 2 种：`normal`（默认）和`italic`（斜体）。

### `font-weight`

`font-weight`指定文字的粗细，常见取值有：`normal`（默认，等同于`400`），`bold`（等同于`700`），`100`，`200`，`300`，`400`（默认，等同于`normal`），`500`，`600`，`700`（等同于`bold`），`800`，`900`。

### `line-height`

`line-height`可指定多行文字的间隔，取值与`font-size`一致。

### `color`

`color`可指定文字颜色，取值格式常见有：`rgb(r, g, b)`，`rgba(r, g, b, a)`，`#RRGGBB`，`#RRGGBBAA`，`#RGB`（等同于`#RRGGBB`）。

### `text-align`

`text-align`可控制文字对齐方式，常见取值有 3 种：`left`（默认，左对齐），`center`（居中）和`right`（右对齐）。

### `text-decoration`

`text-decoration`是`text-decoration-line`，`text-decoration-color`和`text-decoration-style`的简写属性。

`text-decoration-line`设置文本修饰的位置，常见取值有 2 种：`underline`（下划线）和`line-through`（删除线）。

`text-decoration-color`设置文本修饰的颜色，取值格式与`color`属性一致。

`text-decoration-style`设置文本修饰的样式，常见取值有 4 种：`solid`（实线），`dotted`（点线），`dashed`（虚线）和`wavy`（波浪线）。

### `text-indent`

`text-indent`能定义文本的缩进，取值为`length`单位，如`14px`，`1.15rem`，`30%`等。

### `text-overflow`

`text-overflow`可指定文本溢出时的处理行为，常见取值有 2 种：`clip`（默认值，直接截断）和`ellipsis`（截断，后续省略号）。

### `text-shadow`

`text-shadow`可指定文本阴影，取值格式为`offset-x | offset-y | blur-radius | color`，多个阴影之间用英文逗号分隔。

### `letter-spacing`

`letter-spacing`用于指定文本的间距，默认为`normal`（即没有间距），可取值为`length`单位。

### `white-space`

常与`overflow`，`text-overflow`组合，对溢出文本进行截断并显示`...`，可直接硬记。

```css
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

[拓展：css 文本溢出显示省略号](https://www.cnblogs.com/yzg1/p/5089534.html)

### `vertical-align`

`vertical-align`用于指定行内元素或表格单元格元素的垂直对齐方式，常见取值有 4 种：`baseline`，`top`，`middle`，`bottom`。

## 视觉样式 Visual

### `cursor`

`cursor`属性定义鼠标指针悬浮在元素上方显示的鼠标光标，常见取值有 2 种：`default`（默认值），`pointer`（常见于指针悬浮于链接上时）。

### `visibility`

`visibility`属性可显示或隐藏元素而不改变布局，常见取值有 2 种：`visible`和`hidden`。

### `border-spacing`

`border-spacing`属性决定表格的边框是分隔模式时，相邻单元格边框之间的距离，取值为`length`单位。只设置一个值时，同时设置水平与垂直的间距；设置两个值时，分别设置水平与垂直的间距。

### `border-collapse`

`border-collapse`属性决定表格的边框是分隔的还是合并的，常见取值有 2 种：`collapse`（合并）和`separate`（默认值，分隔）。

### `resize`

`resize`属性决定能否调整某些元素的大小，常见取值有 4 种：`none`（不能被缩放），`both`（能在水平、垂直方向缩放），`horizontal`（只能在水平方向缩放）和`vertical`（只能在垂直方向缩放）。

### `background`

`background`是一个简写属性，可以在其声明中定义一个或多个属性：`background-color`，`background-image`，`background-repeat`，`background-attachment`，`background-position`，`background-clip`，`background-origin`和`background-size`。

该部分建议完整参阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)。

### `border`

`border`是一个简写属性，可以在其声明中定义一个或多个属性：`border-color`，`border-style`和`border-width`。

### `border-color`

`border-color`是一个用于设置元素四个边框颜色的简写属性：`border-top-color`，`border-right-color`，`border-bottom-color`，`border-left-color`，可选值为颜色值。

注意，不能在`border`中分别设置四个边框颜色，只能同时设置四个边框颜色。只有在单独的`border-color`属性中，才能分别设置四个边框颜色。`border-style`和`border-width`也是类似的。

### `border-style`

`border-style`是一个简写属性，用于设定元素边框的样式，常见取值有 6 种：`dashed`，，`dotted`，`solid`，`hidden`，`double`，`inset`。

### `border-width`

`border-width`是一个简写属性，用于设定元素边框的宽度，可选值为长度值。

### `border-radius`

`border-radius`用于设置元素的外边框圆角，可选值为长度值。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆，这个（椭）圆与边框的交集形成圆角效果。

![border-radius](https://developer.mozilla.org/files/3638/border-radius-sh.png)

### `border-image`

`border-image`是一个简写属性，可以在其声明中定义一个或多个属性：`border-image-source`，`border-image-slice`，`border-image-width`，`border-image-outset`和`border-image-repeat`。

该部分建议完整参阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)。

### `box-shadow`

`box-shadow`用于在元素边框上添加阴影效果，该属性可设置的值包括：水平偏移，垂直偏移，阴影模糊半径，阴影扩散半径和阴影颜色，以多个逗号分隔。如果元素设置了`border-radius`，阴影也会有圆角效果。

该部分建议完整参阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)。

## 杂项样式 Misc

### `opacity`

`opacity`属性指定了一个元素及其子元素的透明度，取值为`[0.0, 1.0]`。`1.0`表示完全不透明，`0.0`表示完全透明。

### `transition`

`transition`是一个简写属性，可以在其声明中定义一个或多个属性：`transition-delay`，`transition-timing-function`，`transition-duration`和`transition-property`。

该部分建议完整参阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)。

### `transform`

`transform`用于旋转，缩放，倾斜或平移给定元素。

该部分建议完整参阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)。

### `animation`

`animation`是一个简写属性，可以在其声明中定义一个或多个属性：`animation-name`，`animation-duration`，`animation-play-state`，`animation-timing-function`，`animation-delay`，`animation-iteration-count`，`animation-direction`和`animation-fill-mode`。
该部分建议完整参阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)。

## 再一次理解`z-index`

[进一步理解`z-index`属性](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index)

[层叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)

## 块格式化上下文 BFC

[块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

## normalize.css

在前面部分，我们使用过`normalize.css`来设定了一些元素的默认样式，我们现在重新再来认识一下`normalize.css`。

官网上是这样介绍的：

```md
Normalize.css 使浏览器更一致地渲染所有元素，并符合现代标准。它只针对需要规范化的样式。
```

可以认为，normalize.css 重置了浏览器默认 css，替我们抹平了不同浏览器默认元素样式的不一致。

还有一些类似的库做到了相近的效果，此处不再多赘述。

## sass/scss/less/stylus

这四者，实际上起到的作用都是增强 css 语法，但与此同时，也需要额外的工具来将对应的文件转化成 css 文件，具体的使用可以直接参考其官方文档。工程化使用时，跟随选定的 ui 库所使用的即可（如`element-ui`使用了`sass/scss`，`antd`使用了`less`）。

- [sass/scss](https://sass-lang.com/guide)
- [less](http://lesscss.org/usage/)
- [stylus](http://stylus-lang.com/)

## stylelint

[stylelint](https://stylelint.io/) 是一个类似于 eslint 的规范器，可针对于 css/sass/scss/less/stylus 做检查。

本篇中，css 顺序都是参考`bootstrap`的 [stylelint 配置](https://github.com/twbs/stylelint-config-twbs-bootstrap)的顺序进行介绍的，具体配置可以参考我整理的 [css-styles](https://github.com/ModyQyW/css-styles)。

## 引入外部字体

使用`@font-face`来引入外部字体，具体可以参考 [MDN @font-face](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)。

## 响应式布局

响应式布局指页面会根据视窗宽高而自动改变的布局。响应式设计有三个要素：流式布局 fluid grid / flexible grid，流式图像 fluid images 和 媒体查询 media query。

流式布局也就是之前讲述的 flex 布局方式，这里另外再补充一些说明如下所示。

||手机|平板和更宽的设备|
|:-:|:-:|:-:|
|内容列数|单列|多列|
|内容宽度|建议 100%|建议确定值（如 100%）|

所有设备的相同元素设置的`margin`和`padding`都应该一致。

针对于手机，不重要的内容需要手动展开，菜单应为下拉菜单。

流式图像也就是可伸缩图像，具体遵循以下几点：

- 不定义`width`和`height`
- 定义`max-width`为 100%，保证图像不变形

媒体查询需要划分断点来确认设备，最著名的 UI 库 bootstrap 的 v4 断点划分如下所示：

- extra small/xs：手机，< 576px
- small/sm：平板，> 576px 且 < 768px
- medium/md：笔记本电脑，> 768px 且 < 992px
- large/lg：普通显示屏，> 992px 且 < 1200px
- extra large/xl：4k 及以上显示屏，> 1200 px

而 Material Design UI 库 vuetify 的断点划分如下所示：

- extra small/xs：手机，< 600px
- small/sm：平板，> 600px 且 < 900px
- medium/md：笔记本电脑，> 900px 且 < 1264px
- large/lg：普通显示屏，> 1264px 且 < 1904px
- extra large/xl：4k 及以上显示屏，> 1904 px

可以使用`@media`作媒体查询，如

```css
@media (min-width: 576px) {
  ...
}
```

参考 [bootstrap-grid](https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap-grid.css)。

## 实现一个月牙图形

```html
<style>
.center {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0 0 yellow;
}
</style>
<div class="center"></div>
```

## 实现一个心形

```html
<style>
.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
  height: 50px;
  width: 50px;
  transform: rotate(-45deg);
}
.heart::after {
  background-color: pink;
  content: "";
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart::before {
  content: "";
  background-color: pink;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}
</style>
```

## 参考

- [前端九部](https://www.yuque.com/fe9/basic)
- [MDN Web 文档](https://developer.mozilla.org/)
- [编码规范 by mdo](https://codeguide.bootcss.com/)
- [编码规范 by AlloyTeam](http://alloyteam.github.io/CodeGuide/)
- [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
