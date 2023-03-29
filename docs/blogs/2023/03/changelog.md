# 改动日志

- [语义化版本](./semver.md)
- [约定式提交](./conventional-commits.md)
- 改动日志 - 本篇

改动日志反馈了每个版本的改动，它没有固定的格式，常常提供给使用者阅读。

## 关联

### 和语义化版本的关联

习惯上，我们推荐一份改动日志对应一个版本，并将所有改动日志放到一个文件内（一般是 `CHANGELOG.md`）。

即便你没有使用语义化版本，也有必要提供改动日志。改动日志能更详细地告知使用者具体的改动内容，这往往是某些使用者特别关注的。另外，改动日志也可以作为开发者的备忘录之一，给开发者带来便利（比如我 😅）。

### 和约定式提交的关联

每一个约定式提交的描述和正文，可以作为一条改动日志列写在改动日志文件内。

类似地，你也可以使用工具自动生成改动日志！这又一步地节省了不少时间，不是吗？

## 改动日志的思考

[keepachangelog](https://keepachangelog.com/zh-CN/) 提出了一个观点：`更新日志绝对不应该是 git 日志的堆砌物`。

我认为它反映了约定式提交的缺陷，而不是改动日志本身的缺陷。约定式提交是主观的，一旦约定式提交不能准确地描述提交的 **意图**，或者约定式提交不够 **整洁**，借助工具和 git 日志生成的改动日志就很有可能带来迷惑性。反过来，如果我们规范了约定式提交，那么自动生成的改动日志可读性就会很高。

`keepachangelog` 还提出，改动日志文件内应该要有 `Unreleased` 章节来记录准备发布的更新内容。这样可以帮助部分使用者了解未来可能会有什么变更，降低迁移成本。

就我个人而言，我认为只维护一个改动日志文件对于大部分情况足够，但仍然有所不足，尤其是功能复杂的情况时。[tailwindcss](https://tailwindcss.com/) 是我心中的典范。它是怎么做的呢？每一个 MAJOR 和 MINOR 版本发布，除了会更新更新日志文件外，还会发布一篇 **博文** 来阐述团队的工作。这篇博文简单、明确地描述了 **新功能** 并提供了对应的 **例子**，同时也加入了 **文档链接**，帮助使用者更快地掌握新功能。除此之外，周边生态有更新时，也会发布一篇博文。总体而言，我认为 `tailwindcss` 是目前我见到的对使用者最友好的库之一。

## 实践

有非常多工具支持自动生成改动日志，而且这些工具大部分都依赖于约定式提交。就我个人而言，我正在使用 [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)。`tailwindcss` 应该是在使用 [keep-a-changelog](https://github.com/oscarotero/keep-a-changelog)。

[changesets](https://github.com/changesets/changesets) 和 [changelogen](https://github.com/unjs/changelogen) 是最近开始流行的选择，前者更适用于 monorepo，后者我认为还需要一点时间发展。

如果你想要更一体化的解决方案，包括自动更新版本和自动生成改动日志，你应该查看一下 [conventional-changelog](https://github.com/conventional-changelog/) 和 [semantic-release](https://github.com/semantic-release/semantic-release)，前者也是 `commitlint` 和 `conventional-changelog-cli` 的发布者。

本篇是系列的最后一篇，我建议你阅读完 [语义化版本](./semver.md)、[约定式提交](./conventional-commits.md) 和 改动日志（就是本篇）再开始实践！:D
