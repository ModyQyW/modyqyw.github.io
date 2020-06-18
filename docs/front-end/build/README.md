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

webpack 4 是一个静态模块打包工具，分析依赖生成依赖图，最终根据配置生成一个或多个 bundle。

### 为什么选择 webpack

- 社区活跃度高
- 官方生态完整，社区生态丰富
- 配置灵活
- 更新迭代速度快

### 核心概念

#### 入口 entry

entry 指定 webpack 工作时从哪个文件开始分析依赖，默认值为`${PROJECT_DIR}/src/index.js`。

```js
// webpack.config.js，假定该文件放在项目根目录下
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
};

```

#### 输出 output

output 指定 webpack 在哪里存放、命名创建的 bundle，主要输出文件的默认值为`${PROJECT_DIR}/dist/main.js`，其他生成文件默认放在`${PROJECT_DIR}/dist`。

```js
// webpack.config.js，假定该文件放在项目根目录下
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

```

#### 加载器 loader

webpack 本身只能解析 js 和 json 文件，loader 增强了 webpack 的解析能力，使得 webpack 能够解析 jsx，ts，tsx，png，jpg，mp3，mp4，flv，webp 等诸多格式的文件，并将它们转换为有效模块、添加到依赖图中并供应用程序使用。

loader 有两个必需的属性，一个是`test`，用于判断需要解析的文件，另一个是`use`，指定用于解析的 loader。

```js
// webpack.config.js，假定该文件放在项目根目录下
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 指定：在 require/import 语句中涉及到 .png 的路径都先用 url-loader 转换一下
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
// 使用 path 模块来指定路径
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 指定：在 require/import 语句中涉及到 .png 的路径都先用 url-loader 转换一下
      { text: /\.png$/, use: 'url-loader' },
    ],
  },
  plugins: [
    // 指定：使用 webpack-bundle-analyzer 分析生成内容的大小及各依赖占比
    new BundleAnalyzerPlugin(),
  ],
};

```

#### 模式 mode

指定不同的模式，webpack 会有不同的表现，默认值为`production`。

```js
// webpack.config.js，假定该文件放在项目根目录下
// 使用 path 模块来指定路径
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // 指定模式为 development，即开发模式
  mode: 'development',
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, 'src', 'app.js'),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 指定：在 require/import 语句中涉及到 .png 的路径都先用 url-loader 转换一下
      { text: /\.png$/, use: 'url-loader' },
    ],
  },
  plugins: [
    // 指定：使用 webpack-bundle-analyzer 分析生成内容的大小及各依赖占比
    new BundleAnalyzerPlugin(),
  ],
};

```

### 第一个简单的 demo - Demo01

前面简单地讲述了 webpack 4 的 5 个核心概念，下面开始实战。

首先安装 nvm。nvm 是一个用于管理 node 版本的工具，免去了升级 node 版本的繁琐工作。之后，示例的代码均基于 macOS，使用 linux 和 windows 的朋友请自行作相关调整。

- [nvm for linux/macOS](https://github.com/nvm-sh/nvm)
- [nvm for windows](https://github.com/coreybutler/nvm-windows)

安装 nvm 之后，使用 nvm 来安装 node lts 版本（即长期支持版）。

```sh
nvm install --lts
```

新建一个文件夹，命名为 demo。进入到该文件夹中，初始化一个`package.json`文件。

```sh
mkdir demo && cd demo
npm init -y
```

根目录下新建一个`.npmrc`文件，用于设置 npm 镜像，加速安装依赖。

```sh
registry=https://registry.npm.taobao.org
disturl=https://npm.taobao.org/dist
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
electron_mirror=https://npm.taobao.org/mirrors/electron/
electron_builder_binaries_mirror=https://npm.taobao.org/mirrors/electron-builder-binaries/
chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
operadriver_cdnurl=https://npm.taobao.org/mirrors/operadriver
selenium_cdnurl=https://npm.taobao.org/mirrors/selenium
node_inspector_cdnurl=https://npm.taobao.org/mirrors/node-inspector
fsevents_binary_host_mirror=http://npm.taobao.org/mirrors/fsevents/

```

然后安装 webpack 相关的依赖。`-D`表示安装的依赖显示在`devDependencies`字段中，表示该部分依赖只会在实际部署前起作用。

```sh
npm add webpack@4 webpack-cli@3 -D
```

创建一个内容简单的`index.js`。

```js
// ./src/index.js
document.write("Hello webpack!");

```

创建一个 webpack 配置文件`webpack.config.js`。

```js
// ./src/webpack.config.js
// 使用 path 模块来指定路径
const path = require("path");

module.exports = {
  // 指定模式为 production，即生产模式
  mode: "production",
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, "src", "index.js"),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

```

目前，我们已经看到了 2 种模式：`development`和`production`。实际上，webpack 内置有 3 种模式，还有一种模式就是`none`。

`development`和`production`模式都会启用一些内置的优化，而`none`模式没有任何优化，一般也不会使用该模式。假如不指定模式，webpack 4 会默认使用`production`模式。

现在，我们修改`package.json`中的`scripts`字段。

```json
{
  ...,
  "scripts": {
    "build": "webpack"
  },
  ...
}
```

接着，就可以执行命令进行构建了。npm 会自动在项目根目录下的 node_modules 中寻找 webpack 并调用，webpack 会使用我们前面创建的`webpack.config.js`文件进行构建（也就是俗称的打包）。假如没有在项目根目录下的 node_modules 中找到，就会到全局目录下的 node_modules 下去找，找不到的话最终会报错终止执行。

```sh
npm run build
```

最后，我们可以在`dist`目录下看到已经生成了一个`bundle.js`文件。

但是现在还远远不够，每次都手动创建一个 html 文件并且手动引用这个`bundle.js`是难以接受的，因为这会耗费不必要的时间，而且当项目复杂度越来越高时，这个引用的成本也会越来越高。我们需要一些自动处理的手段，来帮我们自动引入这个`bundle.js`文件到 html 文件中。

我们先来安装一下相关的依赖。

```sh
npm i copy-webpack-plugin@6 html-webpack-plugin@4 clean-webpack-plugin@3 webpackbar@4 -D
```

在项目根目录下新建一个`public`文件夹，放入`favicon.ico`（可以自己随便找一个，或者把已有的图片转成 ico 格式）和`index.html`。`index.html`如下所示。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="favicon.ico" type="image/x-icon" />
    <title>demo01</title>
  </head>
  <body></body>
</html>

```

紧接着，我们在`webpack.config.js`中做相关的配置。这样，我们就可以无需操心在 html 文件中引入 js 文件的问题了，而且网站的图标也可以帮我们自动处理。

```js
// ./src/webpack.config.js
// 使用 path 模块来指定路径
const path = require("path");
// 使用 plugins
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  // 指定模式为 production，即生产模式
  mode: "production",
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, "src", "index.js"),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // 指定插件
  plugins: [
    // 复制 ./public/favicon.ico 到 ./dist 目录下
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public", "favicon.ico") }],
    }),
    // 使用 ./public/index.html 作为模板
    new HtmlPlugin({
      title: "demo01",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};

```

但现在还不够，我们还需要在每次构建之前，把上一次构建的文件给删除掉，也就是删除掉`dist`文件夹，以避免可能发生的冲突。我们还需要加入一些额外的配置。

```js
// ./src/webpack.config.js
// 使用 path 模块来指定路径
const path = require("path");
// 使用 plugins
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  // 指定模式为 production，即生产模式
  mode: "production",
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, "src", "index.js"),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // 指定插件
  plugins: [
    // 移除上一次的构建文件
    new CleanPlugin(),
    // 复制 ./public/favicon.ico 到 ./dist 目录下
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public", "favicon.ico") }],
    }),
    // 使用 ./public/index.html 作为模板
    new HtmlPlugin({
      title: "demo01",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};

```

我们还可以加一点额外的处理，让它在打包的时候显示进度条。

```js
// ./src/webpack.config.js
// 使用 path 模块来指定路径
const path = require("path");
// 使用 plugins
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const WebpackBar = require('webpackbar');

module.exports = {
  // 指定模式为 production，即生产模式
  mode: "production",
  // 指定入口为当前目录下的 src/app.js 文件，即项目根目录下的 src/app.js 文件
  entry: path.resolve(__dirname, "src", "index.js"),
  // 指定输出为当前目录下的 dist/bundle.js 文件，即项目根目录下的 src/bundle.js 文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // 指定插件
  plugins: [
    // 显示进度条
    new WebpackBar(),
    // 移除上一次的构建文件
    new CleanPlugin(),
    // 复制 ./public/favicon.ico 到 ./dist 目录下
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "public", "favicon.ico") }],
    }),
    // 使用 ./public/index.html 作为模板
    new HtmlPlugin({
      title: "demo01",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};

```

重新开始构建，之后可以看到进度条和简短的提示信息。最终生成的`dist`目录的结构如下。直接打开`index.html`，可以看到`Hello webpack!`。🎉恭喜，一个简单的 webpack demo 已经完成啦～

```sh
dist
├── bundle.js
├── favicon.ico
└── index.html
```

相关文档汇总：

- [webpack - mode](https://webpack.js.org/configuration/mode/)
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin#readme)
- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin#readme)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#readme)
- [webpack-bar](https://github.com/nuxt/webpackbar)
- [webpack plugins 的顺序会影响什么吗？](https://stackoverflow.com/questions/41470771/webpack-does-the-order-of-plugins-matter)

源代码见 [modyqyw/webpack-demos/demo01](https://github.com/ModyQyW/webpack4-demos/tree/master/demo01)。

## snowpack

## rollup

## parcel

待补充，催稿可以

（1）邮件催稿

（2）打赏，备注“催稿+内容”（通常这种方式会更有效点，毕竟收了钱不好意思再拖）

<Vssue />
