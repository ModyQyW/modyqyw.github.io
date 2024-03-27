# 三角形

有时候我们需要三角形图标，但是引入 SVG 或 PNG 图标的性价比太低，这时候我们可以使用 CSS 来画三角形。

## border

给定一个宽高均为 0 的元素，`border` 设置后必然产生交点，因此可以用来画三角形。

- 需要把其它边框设为透明才能正常显示三角形
- 直角三角形需要设置两个边框
- 居中需要设置 `transform`

你也可以利用伪元素来画三角形，本质上仍然是利用 `border`，居中需要设置 `top`、`right`、`bottom`、`left`，这里不再过多赘述。

前者需要设置一个新元素，定位可能复杂，后者可以在父元素上直接画，方便定位但是会占用伪元素。

<VEmbed src="https://stackblitz.com/edit/vitejs-vite-fesqn8?embed=1&file=src%2FApp.vue"></VEmbed>

## 其它方式

另外还可以使用 `linear-gradient` 和 `clip-path` 来实现三角形，但相对复杂，请参考下方链接。

## 参考

- [纯 CSS 实现三角形的 3 种方式](https://zhuanlan.zhihu.com/p/482361933)
