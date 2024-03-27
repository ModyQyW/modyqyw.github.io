# BFC

## BFC 是什么

BFC 即 Block Formatting Context，中文名是块级格式化上下文。

BFC 是页面内的迷你布局，是一块独立的渲染区域，具有独立的渲染规则。

## BFC 的特点

- BFC 会形成⼀个独⽴空间，内外元素不会相互影响。
- BFC 内部块级元素垂直排列。
- BFC 内部相邻块级元素外边距重叠（即外边距塌陷，margin collapsing）。
- BFC 不会与外部浮动元素重叠。
- BFC 会包含内部浮动元素，排除外部浮动元素，抑制与外部元素的外边距重叠。
- BFC 高度会包含内部浮动元素高度。

## 怎么建立 BFC

### 常用

- 页面根元素 `<html></html>`
- 浮动元素，`float` 值为 `left` 或 `right`
  - `float: left`
  - `float: right`
- 绝对定位元素
  - `position: absolute`
  - `position: fixed`
- 内联块级元素
  - `display: inline-block`
- 表格相关
  - 表格 `display: table`
  - 内联表格 `display: inline-table`
  - 表格行组 `display: table-row-group`，表现为 `<tbody><tbody>`
  - 表格头组 `display: table-header-group`，表现为 `<thead></thead>`
  - 表格尾组 `display: table-footer-group`，表现为 `<tfoot></tfoot>`
  - 表格行 `display: table-row`，表现为 `<tr></tr>`
  - 表格单元格 `display: table-cell`，表现为 `<td></td>`
  - 表格标题 `display: table-caption`，表现为 `<caption><caption>`
- 块级元素，且 `overflow` 的值不是 `visible` 或 `clip`
  - `overflow: auto`
  - `overflow: hidden`
  - `overflow: scroll`

### 少见

- 浮动元素，`float` 值为 `inline-start` 或 `inline-end`
  - `float: inline-start`
  - `float: inline-end`
- 直接声明 BFC
  - `display: flow-root`
- 设置 `contain` 为 `layout`、`content` 或 `paint` 的元素
  - `contain: layout`
  - `contain: content`
  - `contain: paint`
- flex 项目
  - `display: flex` 或 `display: inline-flex` 元素的直接子元素
  - 本身不是 flex 容器、 grid 容器或 table 容器
- grid 项目
  - `display: grid` 或 `display: inline-grid` 元素的直接子元素
  - 本身不是 flex 容器、 grid 容器或 table 容器
- 多列容器
  - `column-count` 或 `column-width` 不是 auto
- `column-span: all`

### 边缘情况

flex 容器 / grid 容器会建立一个新的 flex / grid 格式化上下文，除了布局之外，它与块格式化上下文类似。

flex / grid 容器内没有可用的浮动元素，但仍会排除外部浮动元素，抑制外边距折叠。

## 应用

### 包含内部浮动元素

<VEmbed src="https://stackblitz.com/edit/vitejs-vite-j7mtud?embed=1&file=src%2FApp.vue"></VEmbed>

### 排除外部浮动元素 / 双列布局

<VEmbed src="https://stackblitz.com/edit/vitejs-vite-hexaow?embed=1&file=src%2FApp.vue"></VEmbed>

### 抑制外边距折叠

<VEmbed src="https://stackblitz.com/edit/vitejs-vite-3am1ff?embed=1&file=src%2FApp.vue"></VEmbed>

## 参考

- [MDN > References > Developer Guides > Block Formatting Context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)
