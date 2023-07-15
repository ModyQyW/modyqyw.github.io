# Vue 很棒，但不是特别棒

我使用 Vue 2 已经有 3、4 年的时间，3.2 我也使用了差不多有 1 年了，3.3 发布后我也第一时间学习了一下。我想在这个节点聊聊我对 Vue 的看法。

## 优良的文档

Vue 的文档是我见过最优良的文档之一，非常适合新手学习上手，也适合老手快速查阅。我认为能做到如此地步，离不开它的 [文档编写指南](https://github.com/vuejs/docs/blob/main/.github/contributing/writing-guide.md)。

## 相对完善的 TS 支持

在 Vue 2 时代，要得到完善的 TS 支持是很痛苦的。你需要写 `class`，并使用大量的 `decorator`。在当时 `decorator` 还是一个草案（现在已经稳定了，大概……），我认为使用它是一种冒险的行为（后来 Vue 团队确实放弃了这种做法，转向了函数式），所以我一直在用 JS 来写项目。

这带来了数不清的类型问题，尤其是业务需求变来变去的时候。有的时候我甚至花上一两天来调试问题，这严重地拖慢了业务进度，也打击了我的信心。

我尝试过使用 JSDoc 来替代 TS，有一点效果，但不是很明显。在特别复杂的情况下，JSDoc 写起来很困难。

Vue 3 直接使用 TS 编写，对 TS 支持很好，Vue 3 带来的 Composition API 属于函数式，对 TS 支持也很好。双管齐下，在 Vue 3 时代我得到了相对完善的 TS 支持，在开发时我真的很爽。

## 更方便的 Composition API

Composition API 是对 Vue 2 时代的 Options API 的改进，这一点在 [文档](https://cn.vuejs.org/guide/extras/composition-api-faq.html) 里已经解释得非常清楚。为了让 Vue 2 用户也能用上 Composition API，Vue 团队先后发布了 [@vue/composition-api](https://github.com/vuejs/composition-api) 和 Vue 2.7。

在 Vue 2 时代，由于业务需求变来变去，分离组件成本很高。我并不习惯分离组件，而更习惯于在页面文件内写完所有页面逻辑。这就导致每一次我在改动时都要上上下下来来回回地翻，非常地不方便。也因此，我第一次看到下图就狠狠地动心了。Composition API 大大地减少了我翻的次数，有的时候甚至不用翻了，开发体验好了不少。

![重构后的文件夹组件](https://user-images.githubusercontent.com/499550/62783026-810e6180-ba89-11e9-8774-e7771c8095d6.png)

## 迅速跟上的生态

不知道是不是我的错觉，Vue 3 和 Composition API 出来之后，Vue 生态迅速地跟上了，甚至还照顾到了 Vue 2 用户。

对于我来说，最重要的莫过于 [VueUse](https://vueuse.org/) 和 [@tanstack/vue-query](https://tanstack.com/query/v4/docs/vue/overview)。前者提供了非常多好用的组合式方法，而且类型完备，后者提供了请求管理，可以与 axios 结合使用以获取更好的请求体验，它们都大大地提高了我的开发效率。

## 响应性系统的权衡

Vue 3 中响应性系统做了不少的权衡才最终落地，但我个人不太喜欢所带来的心智负担。

如果你使用了 `ref`，那么在 `<script>` 中你需要使用 `.value` 来读取对应的值，但在 `<template>` 中却不需要，甚至你使用 `reactive` 包裹住 `ref` 后也不需要。这是设计上的权衡，却带来了不够统一的问题，进而增加了心智负担。这方面我更喜欢 `solid` 的处理。

`props` 也是类似的，你不能直接解构赋值，否则就会影响响应性。更多的细节你可以查看 [这里](https://cn.vuejs.org/guide/extras/reactivity-transform.html)。

哦对了，Vue 3 还提供了 `watchEffect`，有好几次我自己因为使用它时没有分析清楚依赖项而陷入了死循环，而在写 React `useEffect` 时候，由于需要明确提供依赖项，我几乎没有陷入过死循环。这也是一个恼人的地方。

## 不稳定的 Vue Language Tools

为了提供更好的开发者体验，Vue 团队推出了新的 VSCode 插件 [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。它的确提供了更强大的功能，包括类型推导等，但是它的性能不算太好，你可以在 [这里](https://github.com/vuejs/language-tools/issues?q=performance) 看到大量性能相关的 ISSUE。

它每次版本更迭都会带来更多功能，也会带来更多问题。我大概是从 v0.2x 开始使用的，几乎每次更新都会报出新的错误，只能等待更新修复，直到 v1 这种情况才相对减少。

## 不受待见自己也不争气的 uni-app

[uni-app](https://uniapp.dcloud.net.cn/) 是一个很神奇的存在。在国内，它几乎是使用 Vue 开发小程序和 APP 的唯一选择。尽管 Taro 从 v3 开始也支持使用 Vue 开发小程序，但只有 JSX 才能得到完整的 JSX 支持，而且也无法使用 Vue 开发 APP。Ionic、NativeScript 等国外的库固然可以开发 APP，但对国外生态支持不足（如地图、支付、分享等），也没法开发小程序。绕来绕去，你终究会发现 uni-app 是国内使用 Vue 开发小程序和 APP 的不二之选。

与 react-native 不同，uni-app 是非官方的，也没有任何标准，这就意味着 Vue 生态圈内的库都没有专门适配它。VueUse 不考虑 uni-app（见 [vueuse/vueuse#1073](https://github.com/vueuse/vueuse/pull/1073#issuecomment-1000141194)），Vue Language Features 更新时也不会考虑 uni-app，截至目前它甚至移除了 v0.x 中增加的 uni-app 支持……

在这种情况下，uni-app 团队的做法令我迷惑不解。他们没有着力于适配 Vue 生态，也没有着力于适配 VSCode，先是推出了自己的 IDE HBuilderX，然后向开发者推 HBuilderX，并基于 HBuilderX 展开做一系列的推进，比如 uni-cloud、nvue、uvue 等。我认为这有些逼迫开发者使用 HBuilderX 的意味。更为人诟病的是，uni-app 和 HBuilderX 比 Vue Language Features 更不稳定，团队处理 ISSUE 和 PR 的速度非常慢，可谓是自己也不争气了。

## 总结

其实没有什么好总结的。从文档水准、国内友好度、周边生态、心智负担各方面看，即使 Vue 有各种缺点，Vue 仍然是我最推荐的库 / 框架。

如果你想要选一个前端库 / 框架学习，Vue 绝对是你的首选。但请注意，它绝不应该是你的唯一选择。我认为你也应该关注 React、Angular、Solid 和 Svelte，尤其是 Angular，它的工程化已经做到了某种极致，如果你感觉遇到了技术瓶颈，翻看它的文档你可能会有一些意想不到的突破。
