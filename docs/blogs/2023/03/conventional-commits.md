# 约定式提交

- [语义化版本](./semver.md)
- 约定式提交 - 本篇
- [改动日志](./changelog.md)

和语义化版本类似，[约定式提交](https://www.conventionalcommits.org/zh-hans/) 对我也有着特别的意义。

## 什么是约定式提交

约定式提交是一种提交信息相关的规范。

## 基本格式

最基本的约定式提交格式如下：

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

- 类型常常使用 `fix`（表示修复问题，对应语义化版本的 PATCH）、`feat`（表示新增功能，对应语义化版本的 MINOR），当然也有别的类型，比如 `build`（表示构建相关）、`docs`（表示文档相关）等。你可以参考 [angular/angularjs DEVELOPERS.md Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) 和 [angular/angular CONTRIBUTING.md Commit Message Format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit) 了解更多类型。
- 在脚注中包含 `BREAKING CHANGE`: 或 `<类型>(范围)` 后面有一个 `!` 的提交，表示引入了破坏性 API 变更（对应语义化版本中的 MAJOR）。破坏性变更可以是任意类型提交的一部分。

## 为什么要用约定式提交

理由和语义化版本是类似的。

约定式提交已经被广泛采用。遵循约定式提交，可以获取到清晰的提交历史，有利于编写自动化工具，自动确定语义化版本和改动日志等，可以为开发带来实打实的便利。

## 谁在用约定式提交

`npm`、`webpack`、`vite`、`rollup`、`antd` 等库就是遵循约定式提交的巨头。

## 约定式提交的缺陷

我个人认为，约定式提交有两个缺陷。

第一个缺陷是，类型对新手来说很难确定，可能会出现不够 **整洁** 的提交。

第二个缺陷是，描述带有主观认识，可能不够 **准确**。

## 和语义化版本的关联

一旦你在使用约定式提交，你不再需要自行翻看提交历史来确认你的下一个版本。很多语义化版本工具可以自动确定下一个版本，一般也允许你手动确定下一个版本。但既然你已经选择了语义化版本和约定式提交，为什么不投入自动化的怀抱，让自己的生活更轻松一些呢？

## 实践

[commitlint](https://github.com/conventional-changelog/commitlint) 是我首先推荐的工具，它能有效地检查提交信息。

我建议使用 [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) 获取和约定式提交一致的体验，如果你倾向于 angular 风格，可以使用 [@commitlint/config-angular](https://www.npmjs.com/package/@commitlint/config-angular)。

而要在命令行中使用，则需要 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)。你可以配合 [husky](https://github.com/typicode/husky) 或者 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 来调用它。

对于新手，你可以尝试使用 [commitizen](https://www.npmjs.com/package/commitizen)。它带有一些额外的提示，方便新手使用。你可以搭配 [@commitlint/cz-commitlint](https://www.npmjs.com/package/@commitlint/cz-commitlint) 或 [@commitlint/prompt](https://www.npmjs.com/package/@commitlint/prompt) 来使用。

本篇是系列的第二篇，我建议你阅读完 [语义化版本](./semver.md)、约定式提交（就是本篇）和 [改动日志](./changelog.md) 再开始实践！:D
