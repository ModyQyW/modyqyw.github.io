# 构建

待补充，催稿可以

（1）邮件催稿

（2）打赏，备注“催稿+内容”（通常这种方式会更有效点，毕竟收了钱不好意思再拖）

## 为什么需要构建工具

- 允许书写 ES6+ 代码、vue template、jsx 等
- 无需考虑 css 前缀，自动添加
- 压缩混淆代码
- 压缩图片、文件等大小

总而言之，构建工具减少了重复的工作，使我们能投入更多的时间到开发工作中。

## webpack 4

webpack 是一个静态模块打包工具，分析依赖生成依赖图，最终根据配置生成一个或多个 bundle。

### 为什么选择 webpack

- 社区活跃度高
- 官方生态完整，社区生态丰富
- 配置灵活
- 更新迭代速度快

### 核心概念

#### 入口 entry

entry 指定 webpack 工作时从哪个文件开始分析依赖，默认值为`${projectRoot}/src/index.js`。

```js
// webpack.config.js，假定该文件放在项目根目录下
const path = require('path');
module.exports = {
  // 指定入口为项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
};
```

#### 输出 output

output 指定 webpack 在哪里存放、命名创建的 bundle，主要输出文件的默认值为`${projectRoot}/dist/main.js`，其他生成文件默认放在`${projectRoot}/dist`。

```js
// webpack.config.js，假定该文件放在项目根目录下
const path = require('path');
module.exports = {
  // 指定入口为项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为项目根目录下的 dist/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

#### loader

webpack 本身只能解析 js 和 json 文件，loader 增强了 webpack 的解析能力，使得 webpack 能够解析 jsx，ts，tsx，png，jpg，mp3，mp4，flv，webp 等诸多格式的文件，并将它们转换为有效模块、添加到依赖图中并供应用程序使用。

loader 有两个必需的属性，一个是`test`，用于判断需要解析的文件，另一个是`use`，指定用于解析的 loader。

```js
// webpack.config.js，假定该文件放在项目根目录下
const path = require('path');
module.exports = {
  // 指定入口为项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为项目根目录下的 dist/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 在 require/import 语句中涉及到 .png 的路径，先用 url-loader 转换一下
      { text: /\.png$/, use: 'url-loader' },
    ],
  },
};
```

有的 loader 可能还会有额外的属性供你配置。

#### 插件 plugin

plugin 用于执行范围更广的任务，比如打包优化，资源管理，注入环境变量等。

```js
// webpack.config.js，假定该文件放在项目根目录下
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  // 指定入口为项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为项目根目录下的 dist/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 在 require/import 语句中涉及到 .png 的路径，先用 url-loader 转换一下
      { text: /\.png$/, use: 'url-loader' },
    ],
  },
  plugins: [
    // 使用 webpack-bundle-analyzer 分析 output 内容大小
    new BundleAnalyzerPlugin(),
  ],
};
```

#### 模式 mode

指定不同的模式，webpack 会有不同的表现，默认值为`production`。

```js
// webpack.config.js，假定该文件放在项目根目录下
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  // 指定入口为项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为项目根目录下的 dist/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 在 require/import 语句中涉及到 .png 的路径，先用 url-loader 转换一下
      { text: /\.png$/, use: 'url-loader' },
    ],
  },
  plugins: [
    // 使用 webpack-bundle-analyzer 分析 output 内容大小
    new BundleAnalyzerPlugin(),
  ],
  // 指定模式为 development
  mode: 'development',
};
```

###

## rollup

## parcel

<Vssue />
