# 为什么是 tsup

在很长一段时间内，我都使用 [tsup](https://github.com/egoist/tsup) 来构建 TypeScript 库。

`tsup` 是基于 [esbuild](https://github.com/evanw/esbuild) 的构建工具，能够处理 `.js`、`.cjs`、`.mjs`、`.jsx`、`.ts`、`.cts`、`.mts`、`.tsx`、`.json` 以及样式文件。这足以覆盖大部分库了。

## 优势

### 快

得益于使用 `esbuild` 和 `worker`，`tsup` 的构建速度非常快。

在我用 2018 款 MacBook Pro（2.6 GHz 六核 Intel Core i7，16 GB 2400 MHz DDR4，macOS Ventura 13.1 (22C65)）开发 `vite-plugin-stylelint` 时，只需要 2 - 3 秒就能得到最终的构建结果。

在上面的例子里，瓶颈不在 ESM 和 CommonJS 两种规范的文件生成，而是在类型文件的生成。`tsup` 基于 [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts) 生成类型文件，这一步骤需要 1 - 1.5 秒，几乎是总构建时间的一半。

### 配置

`tsup` 几乎开箱即用，你只需要指定入口。

当然，这在 `vite-plugin-stylelint` 是远远不够的，因为还需要指定生成类型文件（`dts`）、压缩文件（`minify`）、代码分割（`splitting`）、目标环境（`target`）等。

非常幸运，`tsup` 有完善的文档，以上用例都在文档中有所提及。

### 文档

正如前面提到的，`tsup` 有着完善的文档，覆盖了库开发的大量用例。

遗憾的是，还没有覆盖全部用例，我会在下面更详细地阐述这一点。

### Shims

考虑到 ESM 和 CommonJS 支持，`tsup` 提供了 shims 支持。只要开启 shims，`tsup` 会自动处理 CommonJS 下的 `import.meta.url` 和 ESM 下的 `__filename` 和 `__dirname`。这对于存量项目和新项目都算得上福音。

顺便吐槽下，`__filename` 和 `__dirname` 比 `fileURLToPath(import.meta.url)` 和 `dirname(fileURLToPath(import.meta.url))` 简洁太多了。

### CLI

`tsup` 甚至支持 CLI。只要有 hashbang，`tsup` 就会自动设置文件可执行，不需要手动操作。

## 劣势

### Dynamic Require

我在 `tsup` 遇到的第一个严重问题就是 Dynamic Require。

当我引入 [picocolors](https://github.com/alexeyraspopov/picocolors) 并生成 ESM 文件时，我发现为了处理 `picocolors` 里面使用的 `require("tty")`，`esbuild` 构建了一个无效的 `__require`。这个无效的 `__require` 会导致代码在运行报 `Dynamic Require` 的错误。

```javascript
var __require = /* @__PURE__ */ ((x) =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b],
      })
    : x)(function (x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
```

这似乎是一个最终我在 [这个 discussion](https://github.com/egoist/tsup/discussions/505) 中找到了解决方法，那就是自己帮助 `esbuild` 构建有效的 `__require`。

更具体地说，在生成 ESM 文件时加入 banner，构建出 ESM 环境下的有效 `require`，再让 `esbuild` 基于这个 ESM 环境下的有效 `require` 构建出有效的 `__require`。

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  banner: ({ format }) => {
    if (format === 'esm') {
      return {
        js: `import {createRequire as __createRequire} from 'module';var require=__createRequire(import\.meta.url);`,
      };
    }
  },
});
```

请注意，这种方法不支持类浏览器环境。这是极其致命的缺点。如果你要构建一个用于类浏览器环境的包，可以看看别的工具。

也有一个 [esbuild 插件](https://github.com/hyrious/esbuild-plugin-commonjs) 试着解决这个问题，我还没有尝试过，感兴趣可以试试。

### Named Export & Default Export

该部分存在认知误解，请直接阅读 [ESM 和 CJS 互相转换](https://zhuanlan.zhihu.com/p/610878001) 了解。

如何把 ESM 正确地转换成 CommonJS 一直是令人头痛的问题。我们往往期望有如下的表现。

| ESM              | CommonJS             | CommonJS Usage                 |
| ---------------- | -------------------- | ------------------------------ |
| `export default` | `module.exports`     | `const bar = require('foo')`   |
| `export { xxx }` | `module.exports.xxx` | `const {xxx} = require('foo')` |

但由于 ESM 中 `export default` 实际上也是具名导出 named export，这使得两种模块系统的行为很难对齐。你可以在网上搜索到大量相关的资料，这里就不再赘述了。

总而言之，实际大部分构建工具都有如下的表现。

| ESM              | CommonJS                 | CommonJS Usage                       |
| ---------------- | ------------------------ | ------------------------------------ |
| `export default` | `module.exports.default` | `const bar = require('foo').default` |
| `export { xxx }` | `module.exports.xxx`     | `const {xxx} = require('foo')`       |

所以，我们还需要把 `module.exports.default` 转换成 `module.exports`，这样就能按照期望来使用 CommonJS 文件了。

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  footer: ({ format }) => {
    if (format === 'cjs') {
      return {
        js: `if (module.exports.default) module.exports = module.exports.default;`,
      };
    }
  },
});
```

在可预见的将来，作为官方标准的 ESM 会成为唯一的模块规范。届时，就不再需要支持 CommonJS，也不再需要为此而烦恼了。

## 为什么不是……

### [webpack](https://webpack.js.org/)

`webpack` 功能强大，但概念很多，配置复杂。我更倾向于概念少且配置简单的构建工具。

### [rollup](https://rollupjs.org/)

`rollup` 在各方面几近完美，概念比 `webpack` 少，配置也比 `webpack` 简单。但它过于偏向底层，我会优先考虑比 `rollup` 层级更高一些的工具，比如 `tsup`、`unbuild` 和 `bunchee`。

### [unbuild](https://github.com/unjs/unbuild)

`unbuild` 是基于 `rollup` 和 `esbuild` 的构建工具，由 `nuxt` 团队推出。它会使用 `@rollup/plugin-commonjs` 处理 `commonjs` 语法，这一点要比 `tsup` 更好。但它的文档非常简略，远远比不上 `tsup`。

### [bunchee](https://github.com/huozhi/bunchee)

`bunchee` 是基于 `rollup` 和 `swc` 的构建工具，由 `next` 团队成员推出。类似地，它会使用 `@rollup/plugin-commonjs` 处理 `commonjs` 语法。它的文档比 `unbuild` 详细，而且也不需要额外的配置文件。

### [vite](https://cn.vitejs.dev/)

`vite` 也是基于 `rollup` 的构建工具。它的主要目标在于构建一个前端应用，层级过高。它自带的库支持是基于 `rollup` 的，而且不会生成类型文件，那我为什么不直接使用 `rollup` 呢？

## 总结

`tsup` 足够简单，对用户友好。如果只需要考虑 `node` 环境，我认为它是打包库的最优选择。

如果 `tsup` 不能满足需求，我建议尝试 `rollup`，我也正准备把我负责的几个项目迁移到 `rollup`。为了提升构建速度，你可以加入 [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild)、[rollup-plugin-swc3](https://github.com/SukkaW/rollup-plugin-swc) 或 [unplugin-swc](https://github.com/egoist/unplugin-swc)。值得一提的是，`tsup` 的作者也是 `rollup-plugin-esbuild` 和 `unplugin-swc` 的作者。

如果你觉得 `rollup` 也过于复杂，我建议尝试 `unbuild` 或者 `bunchee`。你可以从 `unbuild` 和 `bunchee` 不同用例中了解一些用法。
