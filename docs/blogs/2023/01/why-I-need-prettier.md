# 为什么我需要 Prettier

2022 年，[antfu](https://antfu.me/) 发布一篇博文 [为什么我不使用 Prettier](https://antfu.me/posts/why-not-prettier-zh)，里面阐述了他不使用 [Prettier](https://prettier.io/) 的理由。

如果你还没有看过，我很建议去看一下。他阐述的理由如下：

- Prettier 是一个固执己见的工具，在部分情况下没法优雅地让 Prettier 格式化结果和自己设想的一致。
- Prettier 的 `printWidth` 配置可能会破坏行与行之间展示出的差异并且使得代码难以审查，更难过的是你 [不能彻底禁用它](https://github.com/prettier/prettier/issues/3468)。
- 在大部分情况下，Prettier 需要和 [ESLint](https://eslint.org/) 配合使用，这需要大量的配置，而且需要解析两次代码。直接使用 ESLint 会更轻松，更简单，也更快。

我自己对 Prettier 也有一些思考。

## 代码难以审查

不得不承认，`printWidth` 让我又爱又恨。不止一次，Prettier 格式化导致的换行在 Code Review 时折磨我。如果 `printWidth` 能够更可控，那样会更轻松。

## 集成

对 antfu 而言，他可以只使用 ESLint，因为 [UnoCSS](https://github.com/unocss/unocss) 使得他不再需要写样式代码。

但对我而言，大量 Web 项目使用了 [element-plus](https://element-plus.org/) 等 UI 库，往往需要或简单或深度的定制，没办法避开写样式代码。所以在我这里 ESLint 和 Stylelint 都是必需的。

ESLint 和 Stylelint 都提供了代码格式化的规则，但它们彼此不是互通的！如果我想要获得一样的格式，除了自己查看所有的规则然后自定义外，就只有引入一个可以和 ESLint、Stylelint 集成的 formatter 一条路可走。

很明显，自己查看所有的规则然后自定义太累了，我绝不愿意这么做，那我就只能引入一个可以和 ESLint、Stylelint 集成的 formatter。[dprint](https://github.com/dprint/dprint) 和 [Rome](https://github.com/rome/tools) 都还属于早期阶段，我只能选择 Prettier。

值得一提的是，Stylelint 打算 [移除所有和格式化有关的规则](https://github.com/stylelint/stylelint/issues/6342)，这下我更离不开 Prettier 了。

## 性能

在不得不使用 Prettier 之后，性能是迎面而来的问题。

和 ESLint、Stylelint 集成后，代码解析至少有三次：ESLint、Stylelint 和 Prettier。这其中有部分是重复的，导致 lint 使用了比预期还要更多的时间。可惜的是，这在目前是无法避免的问题，因为 ESLint、Stylelint 和 Prettier 对 AST 的解析不完全一致，所以没办法复用 AST。

就目前来看，Rome 是我最期望得到的工具，但它开发得有点慢，恐怕在一两年内也没法和 ESLint、Stylelint、Prettier 相提并论。

## 总结

如果你不需要写样式代码，ESLint 就足够了。否则，我还是建议使用 ESLint + Stylelint + Prettier 的组合。
