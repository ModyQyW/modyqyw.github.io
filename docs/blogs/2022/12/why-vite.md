# 为什么是 vite

2022 年我做过最疯狂的事是 <del>疯狂给 `uni-app` 提 issue</del> <del>疯狂做 `uni-app` 生态</del> 把几个项目从 `webpack` 迁移到 `vite`。

必须先声明的是，`webpack` 真的很强大，与此同时它也很复杂。我之前有写过一篇 webpack 4 教程，但遗憾的是我完全没有精力再出一篇 webpack 5 教程。

抛开现实生活中的影响，我认为 `webpack` 复杂的配置项和排列组合在很大程度上劝退了我。内置外置的 loader，这种那种的 plugin，足以把我绕晕，更别提模块联邦了。

`vite` 出现之后，我几乎毫不犹豫地投入了 `vite` 阵营。

## 优势

### 快

`vite` 的启动和更新非常快。在我这里，同样的项目，`vite` 所需的时间是 `webpack` 的 1/5 - 1/2。这可以说是一个巨大的飞跃了。

即使我需要支持传统浏览器，`vite` 所需的时间也比 `webpack` 少了至少 1/10。

### 配置

尽管我认为 `vite` 的配置还是很多，但我也不得不承认，相比起 `webpack` 它已经简化了很多。

似乎也已经很难再缩减配置项了，因为前端的构建复杂度也在逐渐增加，包括 SSR、ESM 等。值得一提的是，`vite` 也有 SSR 支持。

### 文档

`vite` 的文档和 `vue` 的文档类似，读起来非常舒服，而且也足够详细。`webpack` 的文档读起来差了点意思，有时候我甚至怀疑是不是我太笨了读不懂 `webpack` 文档，又或者是我是不是看漏了哪里。

## 劣势

### 生态

`vite` 诞生至今时间不长，总体生态不如 `webpack`。可以说，`webpack` 已经把 99.9999% 的坑踩了一遍，而 `vite` 可能还需要再踩一遍。

庆幸的是，到现在我还没有遇到严重的大坑。

### 环境

在 v3 的改动日志中说得很清楚，这里照搬一下。

```text
Experimental

Using esbuild deps optimization at build time

In v3, Vite allows the use of esbuild to optimize dependencies during build time. If enabled, it removes one of the most significant differences between dev and prod present in v2. `@rollup/plugin-commonjs` is no longer needed in this case since esbuild converts CJS-only dependencies to ESM.

If you want to try this build strategy, you can use `optimizeDeps.disabled: false` (the default in v3 is `disabled: 'build'`). `@rollup/plugin-commonjs` can be removed by passing `build.commonjsOptions: { include: [] }`.

实验性功能

在构建时使用 esbuild 优化依赖

在 v3，Vite 允许在构建时使用 esbuild 来优化依赖关系。如果启用，它将消除 v2 中存在的开发环境和生产环境之间最显著的差异之一。在这种情况下，不再需要 `@rollup/plugin-commonjs`，因为 `esbuild` 将仅有的 CJS 依赖关系转换为 ESM。

如果你想尝试这种构建策略，你可以使用 `optimizeDeps.disabled: false`（v3 默认为 `disabled: 'build'`）。`@rollup/plugin-commonjs` 可以通过传递 `build.commonjsOptions: { include: [] }` 来移除。
```

## 总结

`vite` 很有潜力。我已经顶不住 `webpack` 了，所以我转投了 `vite` 阵营。我很满意 `vite` 的表现。希望你也会喜欢。
