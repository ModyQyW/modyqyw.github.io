# 从 tsup 迁移到 rollup

在 2022 年底，我将所有我维护的库的打包工具从 [tsup](https://github.com/egoist/tsup) 迁移到了 [rollup](https://rollupjs.org/)。

## 缘由

`tsup` 真的非常强大，我之前也做过 [推荐](../../2022/12/why-tsup.md)。但是我维护的库有一些是面向类浏览器环境的，使用 `tsup` 会遇到无解的 `Dynamic Require` 问题。这是一个致命的问题，我不得不放弃继续使用 `tsup`。

决定放弃 `tsup` 后，我有这么几种选择：[rollup](https://rollupjs.org/)、[unbuild](https://github.com/unjs/unbuild)、[bunchee](https://github.com/huozhi/bunchee)、[vite](https://cn.vitejs.dev/)、[webpack](https://webpack.js.org/)、`tsc`。

- `unbuild` 文档非常简略，我不太想使用它。
- `bunchee` 使用了 [swc](https://swc.rs/)，我更倾向于使用 [esbuild](https://esbuild.github.io/)。
- `webpack` 太复杂了。
- `tsc` 太慢了。

`vite` 本身基于 `rollup`，但它的库模式是一个黑盒，文档很少，而且需要使用 [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts) 来生成类型文件。

本着学习 `rollup` 的想法，我将所有我维护的库的打包工具迁移到了 `rollup`。

## 例子

我在这里用 [vite-plugin-stylelint](https://github.com/ModyQyW/vite-plugin-stylelint) 做例子。

### tsup 配置文件

以下是切换到 `rollup` 前的 `tsup` 配置文件，打包命令是 `tsup`。

```typescript
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    // 入口是 src/index.ts 和 src/worker.ts
    entry: ['src/index.ts', 'src/worker.ts'],
    // 生成 esm 和 cjs 两种格式
    format: ['esm', 'cjs'],
    // 只为 src/index.ts 生成类型文件
    dts: {
      entry: 'src/index.ts',
    },
    // 自动生成 shims
    // 为 cjs 生成 import.meta.url shims
    // 为 esm 生成 __dirname 和 __filename
    shims: true,
    // 打包目标
    target: 'node14.18',
    // 为 esm 文件补充文件头
    banner: ({ format }) => {
      if (format === 'esm') {
        return {
          js: `import {createRequire as __createRequire} from 'module';var require=__createRequire(import\.meta.url);`,
        };
      }
    },
    // 为 cjs 文件补充文件尾
    footer: ({ format }) => {
      if (format === 'cjs') {
        return {
          js: `if (module.exports.default) module.exports = module.exports.default;`,
        };
      }
    },
  },
]);
```

在 esm 文件头增加 `import {createRequire as __createRequire} from 'module';var require=__createRequire(import.meta.url);` 是为了解决 `Dynamic Require` 问题，在 cjs 文件尾增加 `if (module.exports.default) module.exports = module.exports.default;` 是为了解决生成的文件不够符合 CJS 规范的问题。更详细的解释可以看 [我之前的博客](../../2022/12/why-tsup.md)。

### 安装相关依赖

先安装需要的依赖。

```shell
pnpm install rollup @rollup/plugin-node-resolve rollup-plugin-esbuild @rollup/plugin-commonjs rollup-plugin-dts
```

- [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) 使用 `Node.js` 的解析算法，定位 `node_modules` 下的第三方模块
- [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild) 使用 `esbuild` 转译、压缩代码
- [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs) 将 CJS 转换成 ESM
- [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts) 生成类型文件

使用 `@rollup/plugin-commonjs`，我们就无需手动处理 `Dynamic Require` 问题，而且也可以用于面向类浏览器环境的库。但同时，我们的代码也需要使用 ESM，也就是说不能再直接使用 `__filename`、`__dirname` 和 `require` 了。

如果仍然有需要，可以使用以下代码。

```typescript
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(url);
const __dirname = dirname(__filename);
const require = createRequire(url);
```

### 基本配置

初步可以写出以下配置文件 `rollup.config.ts`。

```typescript
import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig([
  {
    input: {
      index: 'src/index.ts',
      worker: 'src/worker.ts'
    },
    output: [
      // 多个入口时不能使用 file 指定文件
      // 需要使用 dir 和 entryFileNames
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        format: 'esm',
      },
    ],
    plugins: [
      // 对于 fs、path 等内置模块不再搜索 node_modules
      nodeResolve({ preferBuiltins: true }),
      // 设置目标为 node >= 14.18
      esbuild({ target: 'node14.18' }),
      commonjs(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [
      dts({
        // https://github.com/Swatinem/rollup-plugin-dts/issues/143
        compilerOptions: { preserveSymlinks: false },
        respectExternal: true,
      }),
    ],
  },
]);
```

这时我们还不能用 `rollup -c rollup.config.ts --configPlugin esbuild` 来构建文件，因为 `rollup` 会把所有依赖都打包进去，这会导致一些错误。

### 避免打包所有依赖

`tsup` 会自动除外 `dependencies` 和 `peerDependencies` 下的依赖，还会除外 `node:fs` 等带 `node:` 前缀的内置模块。

上面的基本配置没有考虑到这部分，我们可以手动补充这部分功能。

```typescript
import { builtinModules } from 'node:module'; // [!code ++]
import { readFileSync } from 'node:fs'; // [!code ++]
import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';

const { dependencies, peerDependencies } = JSON.parse( // [!code ++]
  readFileSync('./package.json', 'utf8'), // [!code ++]
) as Record<string, any>; // [!code ++]
 // [!code ++]
const external = [ // [!code ++]
  ...builtinModules, // [!code ++]
  ...builtinModules.map((m) => `node:${m}`), // [!code ++]
  ...Object.keys(dependencies), // [!code ++]
  ...Object.keys(peerDependencies), // [!code ++]
  // 如果需要除外某个包目录下文件 // [!code ++]
  // ...Object.keys(dependencies).map((item) => new RegExp(`^${item}`)), // [!code ++]
  // ...Object.keys(peerDependencies).map((item) => new RegExp(`^${item}`)), // [!code ++]
]; // [!code ++]
 // [!code ++]

export default defineConfig([
  {
    input: {
      index: 'src/index.ts',
      worker: 'src/worker.ts'
    },
    output: [
      // 多个入口时不能使用 file 指定文件
      // 需要使用 dir 和 entryFileNames
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        format: 'esm',
      },
    ],
    plugins: [
      // 对于 fs、path 等内置模块不再搜索 node_modules
      nodeResolve({ preferBuiltins: true }),
      // 设置目标为 node >= 14.18
      esbuild({ target: 'node14.18' }),
      commonjs(),
    ],
    external, // [!code ++]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [
      dts({
        // https://github.com/Swatinem/rollup-plugin-dts/issues/143
        compilerOptions: { preserveSymlinks: false },
        respectExternal: true,
      }),
    ],
    external, // [!code ++]
  },
]);
```

现在我们可以用 `rollup -c rollup.config.ts --configPlugin esbuild` 来打包了！

### CJS 导出

混用默认导出 Default Export 和具名导出 Named Export 并产出 CJS 文件时，`rollup` 会输出警告。

这是因为在 ESM 下默认导出实际上就是具名导出，但 CJS 不是。这个时候你需要使用 `const xxx = require('xxx').default` 而不是 `const xxx = require('xxx')` 来获取到原本的默认导出。

我个人推荐只使用具名导出或者只使用默认导出，这样会方便很多。但如果没办法，一定要混用，也可以配置一下来抑制这类警告，同时保留 `const xxx = require('xxx')` 的用法。

```typescript
import { builtinModules } from 'node:module';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';

const { dependencies, peerDependencies } = JSON.parse(
  readFileSync('./package.json', 'utf8'),
) as Record<string, any>;

const external = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  ...Object.keys(dependencies),
  ...Object.keys(peerDependencies),
  // 如果需要除外某个包目录下文件
  // ...Object.keys(dependencies).map((item) => new RegExp(`^${item}`)),
  // ...Object.keys(peerDependencies).map((item) => new RegExp(`^${item}`)),
];

export default defineConfig([
  {
    input: {
      index: './src/index.ts',
      worker: './src/worker.ts'
    },
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
        exports: 'named', // [!code ++]
        // 如果有 exports 就补充文件尾 // [!code ++]
        footer: ({ exports }) => // [!code ++]
          exports.length > 0  // [!code ++]
            ? 'module.exports = Object.assign(exports.default || {}, exports)' // [!code ++]
            : '', // [!code ++]
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        format: 'esm',
      },
    ],
    plugins: [
      // 对于 fs、path 等内置模块不再搜索 node_modules
      nodeResolve({ preferBuiltins: true }),
      // 设置目标为 node >= 14.18
      esbuild({ target: 'node14.18' }),
      commonjs(),
    ],
    external,
  },
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.d.ts',
      format: 'esm',
    },
    plugins: [
      dts({
        // https://github.com/Swatinem/rollup-plugin-dts/issues/143
        compilerOptions: { preserveSymlinks: false },
        respectExternal: true,
      }),
    ],
    external,
  },
]);
```

## 总结

我在 `vite-plugin-stylelint` 中使用的 `rollup` 配置还要复杂得多，这里已经做了适当的简化。可以看到，尽管 `rollup` 可以处理 `Dynamic Require` 问题，但它仍有一些别的问题，比如不够开箱即用、CJS 混用导出等。要实现同样的功能，`rollup` 需要的配置也要比 `tsup` 多得多。

为了再简化一些，可以封装常用的 `rollup` 配置，或者直接使用 `unbuild`。
