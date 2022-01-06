# 基本概念

## 模块 module

任何文件都可以被 `webpack` 解析成模块 `module`。`webpack` 本身支持解析某些文件，而 `webpack` 本身不支持解析的，需要使用工具来帮助解析。

## 入口 entry

`entry` 指定 `webpack` 工作的时候从哪个文件开始分析依赖，默认值是 `${PROJECT_DIR}/src/index.js`。这个文件也会被叫做入口文件或者入口模块。

```javascript
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定 entry 为 ${PROJECT_DIR}/src/app.js
  entry: path.resolve('src', 'app.js'),
};
```

- `path` 是 node 的内置模块，我们可以在 `webpack` 的配置文件里使用 `require` 语句引用这个模块。
- `module.exports` 用于导出配置。
- `path.resolve` 是 `path` 模块内置的方法，它能将提供的字符串参数拼接成一个绝对路径，来指定 `entry` 的值。

`path.join` 也较为常用，它和 `path.resolve` 用法、作用相似，两者之间的主要区别是 `path.join` 仅仅拼接给出的字符串然后返回一个字符串（可能无意义，取决于给出的字符串），而 `path.resolve` 会解析然后返回一个绝对路径。

下面是两个对比示例。

```javascript
path.join('/a', '/b'); // string /a/b
path.resolve('/a', '/b'); // string /b

path.join('a', 'b1', '..', 'b2'); // string a/b2
path.resolve('a', 'b1', '..', 'b2'); // string ${PROJECT_DIR}/a/b2
```

## 输出 output

`output` 可以指定 `webpack` 存放所有输出文件的基本路径 `output.path`，还有 `entry` 对应的输出文件的路径和文件名 `output.filename`。

`entry` 对应的输出文件默认是 `${PROJECT_DIR}/dist/main.js`。

```javascript
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定 entry 是 ${PROJECT_DIR}/src/app.js
  entry: path.resolve('src', 'app.js'),
  // 指定 output 目录是 ${PROJECT_DIR}/dist
  // 指定 entry 对应的输出文件是 ${PROJECT_DIR}/dist/bundle.js
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
};
```

如果指定 `output.filename = 'js/bundle.js'`，那么 `entry` 对应的输出文件是 `${PROJECT_DIR}/dist/js/bundle.js`。

## 加载器 loader

`webpack` 本身只能处理 `.js` 和 `.json` 文件，`loader` 增强了 `webpack` 的解析能力，使得 `webpack` 能够处理 `.jsx`，`.ts`，`.tsx`，`.css` 等文件。

```javascript
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定 entry 为 ${PROJECT_DIR}/src/app.js
  entry: path.resolve('src', 'app.js'),
  // 指定 output 目录为 ${PROJECT_DIR}/dist
  // 指定 entry 对应的输出文件为 ${PROJECT_DIR}/dist/bundle.js
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // png 文件
        test: /\.png$/,
        // 使用 url-loader 处理
        use: 'url-loader',
      },
    ],
  },
};
```

- `module.rules` 数组里面的每一个元素都是处理模块的规则。
- 每一个元素都是对象 object，有两个必需的属性。
  - 一个必需的属性是 `test`，用来指定需要解析的文件，它的值往往是一个正则表达式。
  - 另一个必需的属性是 `use`，指定用来解析文件的 `loader`。

有的 `loader` 还会关联 `plugin` 或者有额外的属性供你配置，具体信息要查看对应 `loader` 的文档。

## 插件 plugin

`plugin`被用来执行范围更广的任务，比如打包优化，资源管理，注入环境变量等。

```javascript
// 使用 path 模块来指定路径
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  // 指定 entry 为 ${PROJECT_DIR}/src/app.js
  entry: path.resolve('src', 'app.js'),
  // 指定 output 目录为 ${PROJECT_DIR}/dist
  // 指定 entry 对应的输出文件为 ${PROJECT_DIR}/dist/bundle.js
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // png 文件
        test: /\.png$/,
        // 使用 url-loader 处理
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    // 分析生成包大小
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'stat',
      openAnalyzer: false,
    }),
  ],
};
```

## 模式 mode

指定不同的模式，`webpack` 会自动启用不同的优化。

模式一共有三种：`production`（生产模式），`development`（开发模式），`none`（无优化模式），默认值是`production`，优化程度由高到低依次是 `production`，`development`，`none`。

`none` 不会启用优化，我们一般不会去用它。而 `production` 和 `development` 的默认优化往往不能满足项目要求，我们还要进一步定制。

```javascript
// 使用 path 模块来指定路径
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // 指定 mode 为 development，即开发模式
  mode: 'development',
  // 指定 entry 为 ${PROJECT_DIR}/src/app.js
  entry: path.resolve('src', 'app.js'),
  // 指定 output 目录为 ${PROJECT_DIR}/dist
  // 指定 entry 对应的输出文件为 ${PROJECT_DIR}/dist/bundle.js
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // png 文件
        test: /\.png$/,
        // 使用 url-loader 处理
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    // 分析生成包大小
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      defaultSizes: 'stat',
      openAnalyzer: false,
    }),
  ],
};
```

## module，chunk，bundle

`bundle` 是最终输出的一个或多个文件，也就是最终得到的代码块，或者叫做构建包。

`chunk` 则是构建过程中的代码块，它是一些 `module` 的封装，也可以叫做这些 `module` 的集合。构建结束后，`chunk` 就表现为 `bundle`。但为了方便区分，一般会在一些文件的文件名里使用 `chunk`。

一个 `entry` 会对应一个或者多个 `chunk`，但最终只会生成一个 `bundle`，这个 `bundle` 一般会包含多个文件。
