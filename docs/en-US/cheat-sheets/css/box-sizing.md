# box-sizing

## box-sizing 是什么

`box-sizing` 用于设置如何计算元素总宽高。

## box-sizing 的取值与含义

`box-sizing` 的常见取值有 `content-box`（默认值）和 `border-box`。

### content-box

设置为 `content-box` 时，元素 `width`、`height` 分别表示元素内容 content 宽高，`padding`、`border-width` 设置的值另外计算。

### border-box

设置为 `border-box` 时，元素 `width`、`height` 分别表示元素内容 content、`padding`、`border-width` 对应值之和。

## 理解 border-box

我们常常会见到 `box-sizing: border-box` 下 `width` 和 `height` 的计算式：

- `width = content-width + padding-right + padding-left + border-right-width + border-left-width`
- `height = content-width + padding-top + padding-bottom + border-top-width + border-bottom-width`

但是这无法解释为什么我们设置 `width: 0` 和 `border-width` 后还是可以显示 border。

<VEmbed src="https://stackblitz.com/edit/vitejs-vite-cfecs9?embed=1&file=src%2FApp.vue"></VEmbed>

以这个例子来说，`width` 是 0px，单个 `border-width` 是 8px，单个 `padding` 是 8px，那么内容宽度 content-width 应该会算出来是 0px - 8px · 2 - 8px · 2 = -32px。但是 CSS 规范规定了 content-width 最小为 0px，所以取 0px。

你可以将以上计算式的 `width` 和 `height` 理解为元素的理论总宽度和总高度，实际计算时 content-width 最小为 0px，`padding` 和 `border-width` 设置的值保留。

## 参考

- [MDN > References > CSS > box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
