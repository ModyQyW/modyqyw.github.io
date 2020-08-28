# webpack4

## 说明

- 形式：尽量口语化的教程。
- 适用：了解 npm，有原生 js 和`react`/`vue`开发经验，想要深入 js 工具链的开发者。
- 目标：跟着教程实操能入门`webpack4`，能解决实际开发中 50% 以上的问题，熟悉参考资料后能解决 80% 以上的问题。
- 思路：`是什么 -> 为什么 -> 怎么做`和`为什么 -> 是什么 -> 怎么做`。
- 结构：拿单页应用作示例，前面部分着重关注怎么使用，后面部分涉及原理，最后列出参考资料给你查阅学习。
- 环境：macOS，zsh，[oh-my-zsh](https://ohmyz.sh/)，[node](https://nodejs.org/en/) v12，[vscode](https://code.visualstudio.com/) 和 [chrome](https://www.google.com/chrome/browser/index.html)。另外用 vscode 的 [live server 插件](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)测试构建产物。
- 约定：使用`${PROJECT_DIR}`表示项目根目录，一般认为`package.json`所处目录就是项目根目录。
- 范围：不考虑 IE 11- 的浏览器。IE 11- 已经连续 24 个月没有得到官方支持，所以不应该再使用 IE 11-。另外，要支持 IE 11-，还要考虑怎么支持完整的 es5 乃至 es3 的语法和特性，非常耗费时间。考虑到[国情](https://tongji.baidu.com/research/site)原因，教程中还是会示例怎么支持 IE 11 的。

## webpack 是什么

`webpack`是一个静态模块构建工具，根据配置分析依赖、生成依赖图、构建（也就是打包）。

## 为什么要使用构建工具

- 无需手动处理新语法`syntax`、新特性`feature`
- 进一步处理图片、文件等资产文件
- 无需手动添加 css 前缀
- 无需手动压缩混淆
- 无需手动做构建文件的版本管理

总而言之，构建工具帮我们完成了大量重复的构建工作，使我们能投入更多的时间到开发工作中。

## 为什么选择 webpack

- 使用广泛
- 生态丰富
- 社区活跃
- 配置灵活

## 基本概念

### 模块 module

`webpack`中，任何文件都可以被解析成模块`module`。

### 入口 entry

`entry`指定`webpack`工作的时候从哪个`.js`文件开始分析依赖，默认值是`${PROJECT_DIR}/src/index.js`。这个文件，也会被叫做入口文件或者入口模块。

```js
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定 entry 为 ${PROJECT_DIR}/src/app.js
  entry: path.resolve('src', 'app.js'),
};

```

`path`是 node 的内置模块，我们可以在`webpack`的配置文件里使用`require`语句引用这个模块。

`path.resolve`是`path`模块内置的方法，它能将提供的字符串参数拼接成一个绝对路径，来指定`entry`的值。

`path.join`和`path.resolve`用法、作用相似，使用频率也比较高。两者之间的主要区别是`path.join`仅仅拼接给出的字符串然后返回，而`path.resolve`会解析然后返回一个绝对路径。

下面是两个对比示例。

```js
path.join('/a', '/b'); // string /a/b
path.resolve('/a', '/b'); // string /b

path.join("a", "b1", "..", "b2"); // string a/b2
path.resolve("a", "b1", "..", "b2"); // string ${PROJECT_DIR}/a/b2
```

### 输出 output

`output`可以指定`webpack`存放所有输出文件的基本路径`output.path`，还有`entry`对应的输出文件的**路径和名称**`output.filename`。

`entry`对应的输出文件默认是`${PROJECT_DIR}/dist/main.js`。

```js
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

### 加载器 loader

`webpack`本身只能处理`.js`和`.json`文件，`loader`增强了`webpack`的解析能力，使得`webpack`能够处理`.jsx`，`.ts`，`.tsx`，`.css`等文件。

`module.rules`数组里面的每一项都是处理模块的规则。每一项规则有两个必需的属性，一个是`test`，用来指定需要解析的文件，它的值往往是一个正则表达式，另一个是`use`，指定用来解析文件的`loader`。

```js
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

有的`loader`还会关联`plugin`或者有额外的属性供你配置，具体信息要查看对应`loader`的文档。

### 插件 plugin

`plugin`被用来执行范围更广的任务，比如打包优化，资源管理，注入环境变量等。

```js
// 使用 path 模块来指定路径
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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

### 模式 mode

指定不同的模式，`webpack`会自动启用不同的优化。

模式一共有三种：`production`（生产模式），`development`（开发模式），`none`（无优化模式），默认值是`production`，优化程度由高到低依次是`production`，`development`，`none`。

`none`不会启用优化，我们一般不会使用，而`production`和`development`的默认优化往往不能满足项目要求，还需要我们进一步定制。

```js
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

### module，chunk，bundle

`bundle`是最终输出的一个或多个文件，也就是最终得到的代码块，或者叫做构建包。

`chunk`则是构建过程中的代码块，它是一些`module`的封装，也可以叫做这些`module`的集合。构建结束后，`chunk`就表现为`bundle`。但为了方便区分，一般会在一些文件的文件名里使用`chunk`。

一个`entry`会对应一个或者多个`chunk`，但最终只会生成一个`bundle`，这个`bundle`一般会包含多个文件。

## demo01 - 一个简单的 demo

前面简单地讲述了`webpack`的几个基本概念，下面开始实战来强化这些概念。

首先安装 [nvm](https://github.com/nvm-sh/nvm)。nvm 是一个用于管理 node 版本的工具。

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

如果你已经安装了 node，你也可以考虑完全卸载 node 之后安装 nvm。如果没有频繁更换 node 版本的需求，可以直接使用 node。

安装 nvm 之后，使用 nvm 来安装 node v12（写下这篇教程的时候，node 的长期支持版本就是 v12）。

```sh
nvm install 12
```

新建一个`demo`文件夹，进入该文件夹，用`npm`初始化，这会在当前目录下生成一个默认的`package.json`文件。

```sh
mkdir demo # 新建一个 demo 文件夹
cd demo # 进入该文件夹
npm init -y # npm 初始化
```

根目录下新建一个`.npmrc`文件用来配置`npm`，这里我们指定依赖源是国内的淘宝源，这样安装依赖的速度会更快一点。

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

然后安装相关依赖。

```sh
npm i webpack@4 -DE
npm i webpack-cli@3 -DE
npm i copy-webpack-plugin@6 -DE
npm i html-webpack-plugin@4 -DE
npm i clean-webpack-plugin@3 -DE
npm i webpackbar@4 -DE
npm i friendly-errors-webpack-plugin@1 -DE
```

创建一个内容简单的`${PROJECT_DIR}/src/index.js`。

```js
document.write('Hello webpack!');

```

创建一个`webpack`配置文件`${PROJECT_DIR}/webpack.config.js`。不特意指定配置文件的时候，`webpack`会默认使用这个文件作为配置文件。

```js
// 使用 path 模块来指定路径
const path = require('path');

module.exports = {
  // 指定 mode
  mode: 'production',
  // 指定 entry
  entry: path.resolve('src', 'index.js'),
  // 指定 output
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
};

```

我们再来修改`package.json`里面的`scripts`字段。这样，我们就能通过命令调用`webpack`构建。

```json
{
  ...,
  "scripts": {
    "build": "webpack"
  },
  ...
}
```

接着，就执行命令开始构建吧。

```sh
npm run build
```

构建结束之后，我们可以看到，在`dist`文件夹里面已经出现了一个`bundle.js`文件。但是我们还不能直接使用这个`bundle.js`文件，要使用它，我们还需要手动创建一个`.html`文件，然后在文件里面引用`bundle.js`。

实际开发的时候，每次构建之后都耗费时间去做这样的重复工作是难以忍受的。我们需要一些自动处理的手段，来帮我们自动生成`.html`文件并引用这个`bundle.js`文件。

项目根目录新建一个`public`文件夹，里面放`favicon.ico`（可以自己随便找一个，或者把你现在有的图片转成 ico 格式）和`index.html`。

`index.html`里面的内容列出在下面。注意：我们在 L7 引用了`favicon.ico`作为网站图标。

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

接着，我们在`${PROJECT_DIR}/webpack.config.js`里配置，让`copy-webpack-plugin`来处理网站图标，让`html-webpack-plugin`处理`.html`文件里的引用。

```js
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  // 指定 entry
  entry: path.resolve('src', 'index.js'),
  // 指定 output
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  plugins: [
    // 复制 ${PROJECT_DIR}/public/favicon.ico
    // 最终生成 ${PROJECT_DIR}/dist/favicon.ico
    new CopyPlugin({
      patterns: [{ from: path.resolve('public', 'favicon.ico') }],
    }),
    // 使用 ${PROJECT_DIR}/public/index.html 作为模板
    // 最终生成 ${PROJECT_DIR}/dist/index.html
    new HtmlPlugin({
      title: 'demo01',
      template: path.resolve('public', 'index.html'),
    }),
  ],
  ...
};

```

- `copy-webpack-plugin`会把`favicon.ico`复制到输出目录下（在这个例子里面，输出目录就是`${PROJECT_DIR}/dist`）。
- `html-webpack-plugin`会使用`${PROJECT_DIR}/public/index.html`作为承载`bundle.js`和`favicon.ico`的模板，最终会生成`${PROJECT_DIR}/dist/index.html`，这个文件会自动引用相关的`.js`文件。

重新构建，构建结束之后，我们会发现`${PROJECT_DIR}/dist`里面出现了三个文件：`favicon.ico`，`index.html`和`bundle.js`，而`index.html`中还自动引用了`bundle.js`。

一切都很完美，但不能忽视的是，每次构建之前都应该删除上一次的构建包，也就是删除`${PROJECT_DIR}/dist`，否则可能会导致新旧构建冲突、`${PROJECT_DIR}/dist`里面的文件越来越多越来越大等问题。

我们可以使用`clean-webpack-plugin`来解决这个问题，默认地，`clean-webpack-plugin`会根据`output.path`自动确认、删除上一次构建的结果。

```js
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');

module.exports = {
  ...
  plugins: [
    // 移除上一次的构建文件
    new CleanPlugin(),
    ...
  ],
  ...
};

```

让`webpack`在构建的时候显示进度条也是常见的做法，这能在一定程度上降低等待的焦虑度。

```js
const WebpackBar = require('webpackbar');

module.exports = {
  ...
  plugins: [
    // 显示进度条
    new WebpackBar(),
    ...
  ],
  ...
};

```

如果构建出现了问题，`webpack`会输出一长串错误信息，使用`friendly-errors-webpack-plugin`可以让输出的错误信息更加友好。

```js
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  ...
  plugins: [
    // 显示友好的错误信息
    new FriendlyErrorsPlugin(),
    ...
  ],
  ...
};

```

完整的`webpack.config.js`代码列写在下面。

```js
// 使用 path 模块来指定路径
const path = require('path');
// 使用 plugin
const { CleanWebpackPlugin: CleanPlugin } = require("clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  // 指定 mode
  mode: 'production',
  // 指定 entry
  entry: path.resolve('src', 'index.js'),
  // 指定 output
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  // 指定 plugin
  plugins: [
    // 显示友好的错误信息
    new FriendlyErrorsPlugin(),
    // 显示进度条
    new WebpackBar(),
    // 移除上一次的构建文件
    new CleanPlugin(),
    // 复制 ${PROJECT_DIR}/public/favicon.ico
    // 最终生成 ${PROJECT_DIR}/dist/favicon.ico
    new CopyPlugin({
      patterns: [{ from: path.resolve('public', 'favicon.ico') }],
    }),
    // 使用 ${PROJECT_DIR}/public/index.html 作为模板
    // 最终生成 ${PROJECT_DIR}/dist/index.html
    new HtmlPlugin({
      title: 'demo01',
      template: path.resolve('public', 'index.html'),
    }),
  ],
};

```

重新开始构建，之后可以看到进度条和简短的提示信息。下面是最终生成的`dist`目录的结构。

```sh
dist
├── bundle.js
├── favicon.ico
└── index.html
```

使用`live server`来查看效果，可以看到`Hello webpack!`。

🎉恭喜，一个简单的 webpack demo 已经完成啦～

参考源代码见 [modyqyw/webpack-demos/demo01](https://github.com/ModyQyW/webpack4-demos/tree/master/demo01)。

## demo02 - 再看 webpack 核心概念与基础应用

### 再看入口 entry

一开始我们说到，`webpack`会分析依赖生成依赖图，而分析依赖生成依赖图的起点就由`entry`指定。

![webpack示意图](https://ae01.alicdn.com/kf/Hc2861d3d0e2b4ad89bfab9c37be5ecbcK.jpg)

单页面应用 SPA 只有单入口，`entry`是一个字符串 string 或一个对象 object。多页面应用 MPA 有多入口，`entry`只能是一个对象 object。demo01 就是一个 SPA 的配置。

demo01 中`entry`的写法等同于下面的代码，也就是说，单入口写成字符串形式的时候，实际上会转换成对象形式，默认的 key 是`main`。

```js
const path = require('path');

module.exports = {
  ...,
  entry: {
    main: path.resolve('src', 'index.js'),
  },
  ...,
};

```

`context`可能会跟`entry`一起使用，它可以指定`entry`的基本路径。对于 MPA，使用`context`往往能使`entry`更简洁。下面是一个示例。

```js
const path = require('path');

module.exports = {
  ...,
  context: path.resolve('src'),
  entry: './index.js',
  ...,
};

```

考虑到实际开发时必要的工程化，我们需要单独维护`webpack`配置相关的文件。我们先把没有使用到`context`的`webpack.config.js`移动到`${PROJECT_DIR}/config`文件夹中，再指定`entry`的 key 为`app`。

```js
// ${PROJECT_DIR}/config/webpack.config.js
const path = require('path');

module.exports = {
  ...,
  entry: {
    app: path.resolve('src', 'index.js'),
  },
  ...,
};

```

`webpack`默认使用`${PROJECT_DIR}/webpack.config.js`作为配置文件，我们移动配置文件后，就需要修改命令、手动指定配置文件了。

```json
{
  ...,
  "scripts": {
    "build": "webpack --config ./config/webpack.config.js"
  },
  ...
}

```

### 再看输出 output

`webpack`构建的结果如何输出由`output`指定。

SPA 可以直接指定`output.filename`和`output.path`，像之前的示例一样，但更好的方法是使用对应的`chunk`的名称来给文件起名。

`entry`目前只会对应一个`chunk`，而这个`chunk`的名称就是`entry`的 key，也就是`app`。

我们修改一下`output`的配置，使得`entry`指定的文件构建出来之后跟随`entry`的 key。

```js
const path = require('path');

module.exports = {
  ...,
  entry: {
    app: path.resolve('src', 'index.js'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  ...,
};

```

或许你会疑惑，为什么用`chunk`的名称来给文件起名更好？现在这样起名叫`bundle.js`不好吗？

对于现在的项目规模，起名叫`bundle.js`完全足够了。但对于更大的项目，我们往往会用到`splitChunks`做优化，这种时候就不能直接起名叫`bundle.js`了。至于为什么不能，先留着这个疑问吧，之后这个疑问就会得到解答了。

### 再看插件 plugin

`plugin`用来增强`webpack`功能，比如优化打包文件，管理资源，注入环境变量等等，它作用于整个构建过程。

前面的例子中，我们用到了`copy-webpack-plugin`，`html-webpack-plugin`一些相对来说比较简单的`plugin`。

每个`plugin`都需要放到`plugins`字段数组里，顺序一般不影响，具体的配置需要去查询具体的文档。

### 再看加载器 loader

因为`webpack`默认只支持解析`.js`和`.json`文件，所以项目中使用到的其他文件，比如图片文件、字体文件、样式文件等，就只能使用`loader`解析。

下面会关注一些常用的`loader`。

### js 新语法和新特性相关的 loader

因为`webpack`本身并不支持解析 es6+ 语法，所以要使用 es6+ 语法，我们就需要使用`babel`和`babel-loader`，让它们来解析 es6+ 语法。

`babel`的一个主要作用就是把新语法转换成旧语法，也就是我们常说的语法转换，比如把箭头函数转换成`function`。`babel-loader`使得`webpack`在构建过程中能使用`babel`处理相关的文件。

首先还是要安装相关的依赖。

```sh
npm i @babel/runtime@7 core-js@3 regenerator-runtime@0.11.1 react@16.13.1 react-dom@16.13.1 -E
npm i @babel/cli@7 @babel/core@7 @babel/plugin-transform-runtime@7 @babel/preset-env@7 @babel/preset-react@7 babel-loader@8 @types/react@16 @types/react-dom@16 -DE
```

然后修改`webpack`配置。不要忘记，对于`webpack`来说，所有文件都可以看成一个模块，所以需要在模块对应的字段下写配置。

```js
// ${PROJECT_DIR}/config/webpack.config.js
module.exports = {
  ...
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // js 和 jsx 文件
        test: /\.jsx?$/,
        // 不处理 node_modules 和 bower_components
        exclude: /(node_modules|bower_components)/,
        // 使用 babel-loader 进行处理
        use: [{ loader: 'babel-loader' }],
      },
      ...
    ],
  },
};

```

不处理`node_modules`和`bower_components`里面的`.js`文件能够有效地提高编译效率，同时避免可能存在的二次编译问题。一般来说，`node_modules`和`bower_components`里面的`.js`文件都会直接支持 es5，如果有特殊需求（比如支持 es3），或者一些`.js`文件没有直接支持 es5，就要特别处理这部分文件。

修改完`webpack`配置后，我们还需要配置`babel`，让它根据我们的需求转换语法。我们创建`${PROJECT_DIR}/babel.config.json`作为`babel`的配置文件。

要支持 es6+ 语法非常简单，可以直接使用`babel`官方提供的`@babel/preset-env`。它能把 es6+ 语法转换到 es5 语法，无需提供额外的配置。

```json
{
  "presets": ["@babel/preset-env"]
}

```

但现实往往是残酷的，`@babel/preset-env`默认的配置通常不能准确满足项目需求。一个比较常见的项目需求是支持特定的浏览器和特定的浏览器版本，比如支持 ie 11。

这个时候，我们就需要向`@babel/preset-env`说明目标浏览器（我们想要支持的浏览器），也就是语法转换后的代码能够跑在什么浏览器上。

我们可以用`${PROJECT_DIR}/.browserslistrc`文件来说明目标浏览器。`.browserslistrc`文件是一个特殊的依赖于`browserslist`的文件，它的内容说明了项目的目标浏览器，会被`@babel/preset-env`读取并使用。

我们为`.browserslistrc`添加以下内容。

```sh
> 0.2%
last 3 versions
not dead
chrome >= 70
firefox >= 68
edge >= 81
safari >= 13
ie >= 11

```

- `> 0.2%`表示需要支持使用率超过 0.2% 的浏览器。
- `last 3 versions`表示需要支持浏览器的最近 3 个版本。
- `not dead`表示浏览器在最近 24 个月内还得到过官方的支持。
- `chrome >= 70`表示 chrome 的版本需要不小于 70。
- `firefox >= 68`表示 firefox 的版本需要不小于 68。
- `edge >= 81`表示 edge 的版本需要不小于 81。
- `safari >= 13`表示 safari 的版本需要不小于 13。
- `ie >= 11`表示 ie 的版本需要不小于 11。

上面的条件取并集，就是需要支持的浏览器范围。

说明目标浏览器之后，`babel`在转换语法的时候会更加精准。它会把目标浏览器不支持的 es6+ 语法转换成 es5 语法，同时保留目标浏览器支持的 es6+ 语法。

但是如果转换后的代码中存在浏览器不支持的特性，比如`Promise`，那该怎么办呢？这个时候，`babel`的另一个作用，自动补齐特性，就很好地解决了这个问题。

polyfill 指的是能够提供一些浏览器本身没有的新特性的 js 代码包。我们可以配置`babel`自动引入 polyfill 来自动补齐目标浏览器的特性。

`@babel/preset-env`默认只会转换语法，我们需要手动配置来启用自动补全特性的功能。

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": { "version": 3, "proposals": true }
      }
    ]
  ]
}

```

- `useBuiltIns`指定`@babel/preset-env`怎么处理 polyfill。
  - 默认地，`useBuiltIns`的值是`false`，也就是不处理 polyfill。
  - `useBuiltIns`可以指定成`entry`，这时候我们需要手动地在项目入口引入`core-js`和`regenerator-runtime`。
  - 指定成`usage`是更好的选择，这时候我们无需手动引入，`babel/preset-env`会为我们做相关的引入。
- `core-js`指定`@babel/preset-env`使用什么版本的`core-js`，只有`useBuiltIns`的值是`entry`或`usage`的时候起作用。
  - 默认地，`core-js`的值是`2`，表示使用`core-js`v2。
  - 指定成`3`是更好的选择，因为`core-js`v3 提供了更多的 polyfill，同时减少了全局污染。
  - 只指定版本，就只会引入稳定的特性。要引入提案特性，可以指定`"proposals": true`，这样就可以使用`core-js`v3 已经支持的提案（一般已经足够稳定）。

这时候，`babel`会为我们自动引入`core-js`v3 和`regenerator-runtime`中和项目代码关联的部分，自动补全浏览器特性。

但使用这样的配置构建出来的代码还不能投入到生产环境中。自动补全浏览器特性之后可能会使得每个文件头部都增加了相同的代码，比如多个文件都使用了`Promise`，转译之后就会在这些文件的头部都引入相同的`Promise`相关的 polyfill。这些重复的代码会影响最终构建包的体积，在实际开发中是难以接受的。

我们可以使用`@babel/plugin-transform-runtime`来抽离这些重复的 polyfill 代码，把它们放到一起，进一步压缩最终构建包的体积。业务代码需要用到对应功能的时候，再去引入。当然，引入 polyfill 也会帮我们自动处理。

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": { "version": 3, "proposals": true }
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}

```

除了 es6+ 的语法，我们还想支持`react`语法。我们也可以用`babel`来解析`react`代码，只需要根据`@babel/preset-react`的文档配置就可以了。

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": { "version": 3, "proposals": true }
      }
    ],
    "@babel/preset-react"
  ],
  "env": {
    "development": {
      "presets": [["@babel/preset-react", { "development": true }]]
    }
  },
  "plugins": ["@babel/plugin-transform-runtime"]
}

```

之后可以修改`${PROJECT_DIR}/src/index.js`，使用`react`，`react-dom`，`Promise`以测试我们的配置。

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(() => {
        document.title = 'Hello World!';
        resolve();
      }, 5000);
    });
  }

  render() {
    return (
      <div className="container">
        <p>Hello Webpack!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

```

现在更推荐用函数式组件 Functional Component。如果不了解这部分的话，必须要去再看看官方文档了。

```js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => {
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        document.title = 'Hello World!';
        resolve();
      }, 5000);
    });
  }, []);

  return (
    <div className="container">
      <p>Hello Webpack!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

之后构建并运行测试即可。

如果一切正常，可以看到页面上会出现`Hello Webpack!`的文字，5 秒左右标签页的标题被修改成`Hello World!`。

我们查看`${PROJECT_DIR}/dist/report.html`会看到`es.promise.js`也加入了`bundle`中，这是因为我们给出的目标浏览器包含了`ie >= 11`，而 ie 11 是不支持`Promise`的。

可能你还会有疑虑，那已经支持了`Promise`特性的浏览器会再度引入这部分 polyfill 吗？不会，polyfill 会聪明地先判断浏览器环境，如果不支持这部分特性再引入。

当然，对比起官方文档和实际大型应用开发需求，教程这部分还相当简陋，建议还是多多阅读文档多多实践。

### 样式相关的 loader

因为`webpack`本身并不支持解析`.css`，`.sass`和`.scss`文件，所以我们需要用`loader`去解析这些文件。

要解析`.less`和`.styl`文件，相对应的`loader`的配置大同小异，参考对应文档摸索就行了。

首先还是要安装相关的依赖。

```sh
npm i zent@8 -E
npm i style-loader@1 css-loader@4 sass@1 sass-loader@10 resolve-url-loader@3 babel-plugin-zent@2 -DE
```

`css-loader`能够把`.css`文件解析成 css 模块，`style-loader`能够将 css 模块嵌入到文件中。

我们先在`${PROJECT_DIR}/src/index.js`引入`.css`文件。

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div className="container">
    <p>Hello Webpack!</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

```

然后创建`${PROJECT_DIR}/src/index.css`，简单地设置样式。

```css
*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  min-width: 1280px;
  min-height: 100%;
}

.container {
  width: 100%;
}

```

最后，我们修改一下`webpack`配置，增加对`.css`文件的解析。

```js
module.exports = {
  ...,
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // css 文件
        test: /\.css$/,
        // 先使用 css-loader 再使用 style-loader 处理
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      ...
    ],
  },
};

```

默认地，`.js`文件引用了 css，转换后的 css 模块会被嵌入到`.js`文件中，然后再生成标签嵌入到`<head>`标签中，你也可以通过修改`style-loader`的配置来自定义这一行为。

重新构建并运行，我们可以在浏览器开发者工具中看到，样式已经被插入到`<head>`标签里面了。

需要注意，`loader`的调用顺序是从后往前的。上面的示例里，会先调用`css-loader`处理`.css`文件，再调用`style-loader`做进一步处理。

处理`.sass`和`.scss`文件有少许的不同。因为`sass-loader`会把`.sass`和`.scss`文件转换成`.css`文件，而`.css`文件的处理步骤就跟上面一致。所以，我们只需要复制粘贴，然后配置`sass-loader`就可以了。

```js
module.exports = {
  ...,
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // css 文件
        test: /\.css$/,
        // 先使用 css-loader 再使用 style-loader 处理
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        // sass/scss 文件
        test: /\.s[ac]ss$/,
        // 依次使用 sass-loader，css-loader 和 style-loader 处理
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      ...,
    ],
  },
};

```

`sass-loader`会处理`@import`语句，所以我们还需要配置`css-loader`，说明在`css-loader`之前还有 1 个`loader`会处理`@import`语句。

```js
module.exports = {
  ...,
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // css 文件
        test: /\.css$/,
        // 先使用 css-loader 再使用 style-loader 处理
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        // sass/scss 文件
        test: /\.s[ac]ss$/,
        // 依次使用 sass-loader，css-loader 和 style-loader 处理
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      ...,
    ],
  },
};

```

另外需要注意，sass 没有 url 重写的功能，所以我们还需要加入`resolve-url-loader`，不然可能会在实际使用的时候出现 url 指向不正确的问题。`resolve-url-loader`并不会处理`@import`语句，所以不用再修改`css-loader`的`importLoaders`配置。

```js
module.exports = {
  ...,
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // css 文件
        test: /\.css$/,
        // 先使用 css-loader 再使用 style-loader 处理
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        // sass/scss 文件
        test: /\.s[ac]ss$/,
        // 依次使用 sass-loader，resolve-url-loader，css-loader 和 style-loader 处理
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
      ...,
    ],
  },
};

```

我们把`index.css`重命名为`index.scss`并修改`${PROJECT_DIR}/src/index.js`里面的引入。重新构建、测试，一切正常。

我们再来试着添加并使用`zent`这个组件库。首先修改`${PROJECT_DIR}/src/index.js`，加入一个简单的带图标的按钮。

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'zent';
import './index.scss';

const App = () => (
  <div className="container">
    <p>Hello Webpack!</p>
    <Button type="primary">
      <Icon type="youzan" />
      Hello Zent!
    </Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

```

然后修改`${PROJECT_DIR}/babel.config.json`，根据`zent`的官网说明加入按需加载的优化。

```json
{
  ...,
  "plugins": [
    "@babel/plugin-transform-runtime",
    [
      "zent",
      {
        "libraryName": "zent",
        "noModuleRewrite": false,
        "automaticStyleImport": true,
        "useRawStyle": true
      }
    ]
  ]
}

```

重新构建、测试，可以看到一个蓝色的按钮，按钮内左边是有赞的图标，文字是`Hello Zent`。

可能有人会问，为什么不用`antd`作示例呢？第一，我认为`zent`使用的 scss 的语法比`antd`使用的 less 的更接近 css；第二，`antd`曾经出过圣诞彩蛋事件，目前对我来说没有可信度。

### 资产相关的 loader

一般我们把项目使用到的图片、字体、音频、视频等文件叫做项目资产文件。

最常用的处理资产的`loader`就是`file-loader`和`url-loader`。`url-loader`是`file-loader`的升级版，增加了文件大小的上限配置，达到大小上限时会自动使用`file-loader`，没达到大小上限的时候，会把文件转换成 base64 数据，然后硬编码到代码里。

为什么要转换成 base64 数据并硬编码进代码呢？一方面，直接硬编码进代码可以避免在读取该部分文件时的页面闪烁，提高用户体验，另一方面也可以减少网络请求，降低服务器压力。

如果 base64 数据太多太大，加载网页的速度依旧会变慢，所以不是所有文件都适宜转换成 base64 数据。

下面来演示如何加入和使用这两个`loader`。首先还是安装依赖。

```sh
npm i file-loader@6 url-loader@4 -DE
```

直接修改配置文件。

```js
module.exports = {
  ...,
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // 图片文件
        test: /\.(png|jpg|jpeg|gif)$/,
        // 使用 url-loader 处理
        use: [
          {
            loader: 'url-loader',
            options: {
              // 8 MB 上限
              limit: 8192,
              // 放进 ${output.path}/img 文件夹里
              outputPath: 'img',
              // 使用 ${output.path}/img 文件夹里的图片
              publicPath: 'img',
            },
          },
        ],
      },
      {
        // 字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // 使用 url-loader 处理
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'fonts',
              publicPath: 'fonts',
            },
          },
        ],
      },
    ],
    ...,
  },
  ...,
}
```

- `outputPath`和`publicPath`是和项目中配置的输出路径`output.path`相关的，在这个项目里，也就是和`${PROJECT_DIR}/dist`相关。像上面的配置，最终构建结果会显示图片放进了`${PROJECT_DIR}/dist/img`里，而字体放进了`${PROJECT_DIR}/dist/fonts`。
- 把图片和字体放入各自的文件夹中，主要目的是区分开不同类型的文件，避免所有文件都直接放在`${PROJECT_DIR}/dist`。

放一个图片文件在`${PROJECT_DIR}/src/assets`里面（我这里放了`webpack.png`），然后在`${PROJECT_DIR}/src/index.js`里引入、使用它。

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'zent';
import iconWebpack from './assets/webpack.png';
import './index.scss';

const App = () => (
  <div className="container">
    <p>Hello Webpack!</p>
    <img src={iconWebpack} />
    <Button type="primary">
      <Icon type="youzan" />
      Hello Zent!
    </Button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

```

放一个字体文件在`${PROJECT_DIR}/src/assets`里面（我这里放入了阿里普惠体的字体文件`Alibaba-PuHuiTi-Regular.ttf`），然后在`${PROJECT_DIR}/src/index.scss`里引入、使用它。

```scss
@font-face {
  font-family: "Alibaba PuHuiTi";
  src: url("./assets/Alibaba-PuHuiTi-Regular.ttf") format("ttf");
}

*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  min-width: 1280px;
  min-height: 100%;
  font-family: "Alibaba PuHuiTi", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.container {
  width: 100%;
}

```

重新构建，可以看到`${PROJECT_DIR}/dist`目录下多出了两个文件夹`fonts`和`img`，里面分别是一个字体文件和一个图片文件，名字被修改成一串字符串。这个我们称为文件指纹，会在之后做进一步的解释。测试一切正常。

`url-loader`和`file-loader`只会处理`.js`中引用的图片，如果我们在`.html`里直接引用呢？那就只能使用`html-loader`来处理了。这种情况比较少见，在这里不再展开。

### 再看模式 mode

指定不同的模式，`webpack`会自动启用不同的优化。默认模式是`production`，默认取值范围是`development`，`production`和`none`。

现在，我们每一次查看代码效果，都要执行`npm run build`，然后用`live server`启动。这相当麻烦，尤其是开发的时候，这么做会耗费很多时间，而且开发时也不应该使用`production`模式，而应该使用`development`模式。

`webpack-dev-server`帮我们解决了这个问题。使用`webpack-dev-server`可以不刷新浏览器就看到我们开发的时候修改代码后的结果（这也就是我们常说的热更新），也不会生成文件放到`dist`目录下（实际上，会把生成文件放到内存中）。

```sh
npm i cross-env@7 webpack-dev-server@3 webpack-merge@5 -DE
```

我们还要根据环境来使用不同的构建配置。基于可维护性考虑，我们应该拆分出不同环境的构建配置文件，最终根据环境暴露出对应环境的构建配置。

首先修改`package.json`。`cross-env`可以修改`process.env.NODE_ENV`的值，进而供我们确认环境。

```json
{
  ...,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./config/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./config/webpack.config.js"
  },
  ...
}

```

接着，我们把原本`${PROJECT_DIR}/config/webpack.config.js`中除`mode`之外的内容抽离出来，放到`${PROJECT_DIR}/config/webpack.base.js`里。这部分内容作为基础配置，会被对应环境的配置所引用。

再新建两个配置文件如下。

`${PROJECT_DIR}/config/webpack.dev.js`：

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    quiet: true,
  },
  devtool: 'eval-cheap-source-map',
});

```

- `devServer.hot = true`表示开启`webpack-dev-server`的热更新。
- `devServer.quiet = true`表示减少构建输出的信息显示。
- `devtool`可以确定错误对应的代码，能帮助调试，这里指定为`eval-cheap-source-map`。
- 使用`webpack-merge`自动合并相关字段的配置，`webpack-dev-server`就能使用基础配置了。

`${PROJECT_DIR}/config/webpack.prod.js`也十分类似，指定了`mode`，`devtool`还有额外的 `plugin`。

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
});

```

最后修改`${PROJECT_DIR}/config/webpack.config.js`，让它在不同环境暴露不同的构建配置。

```js
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

if (process.env.NODE_ENV === 'development') {
  module.exports = devConfig;
} else {
  module.exports = prodConfig;
}

```

最后分别执行`npm run dev`和`npm run build`做测试，一切正常。下面是最终项目目录。

```sh
.
├── babel.config.json
├── config
│   ├── webpack.base.js
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist
│   ├── app.js
│   ├── app.js.map
│   ├── favicon.ico
│   ├── fonts
│   ├── img
│   ├── index.html
│   └── report.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── assets
    ├── index.js
    └── index.scss
```

对于`react`，还可以加入`react-hot-loader`进一步提升使用体验。有兴趣可以查阅相关资料学习。

🎉恭喜，你的第二个 webpack demo 已经完成啦～

参考源代码见 [modyqyw/webpack-demos/demo02](https://github.com/ModyQyW/webpack4-demos/tree/master/demo02)。

## demo03 - 优化以贴近实际工程

### 使用文件指纹做版本管理

人的指纹是特殊的，不存在完全相同的人的指纹，所以依靠人的指纹可以确定唯一的人。文件指纹的用途和人的指纹相近，可以用来确定文件有没有改变，方便做版本管理。

常用的文件指纹有三类。

- `hash` - 和整个项目的构建有关，只要项目里有文件被修改，值就会有变化。特别地，对于图片、字体这些资产文件，`hash`和整个项目的构建无关，而是和文件内容相关。因为对版本管理没什么帮助，所以一般只会在资产文件上使用。
- `chunkhash` - 根据不同的`chunk`生成`hash`。通常会把依赖库和业务代码分别抽离出对应的`chunk`，然后使用`chunkhash`。也就是说，一般对`.js`文件使用`chunkhash`。
- `contenthash` - 根据文件内容生成`hash`。`.js`文件常常会引用`.css`文件，如果使用`chunkhash`，就会导致修改`.js`文件、没有修改`.css`文件的情况下，`.css`文件的`hash`也变化了，这不太符合工程要求，所以`.css`文件一般使用`contenthash`。资产文件也可以使用`contenthash`。

我们先来修改`${PROJECT_DIR}/config/webpack.base.js`，为图片和字体添加文件指纹。

```js
module.exports = {
  ...,
  module: {
    rules: [
      ...,
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              ...,
              name: '[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              ...,
              name: '[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
      ...,
    ],
  },
};

```

- `[name]`表示使用文件本身的命名。
- `[contenthash:8]`表示使用`contenthash`的前 8 位，也可以写成`[hash:8]`，结果会是一样的，这是因为`url-loader`和`file-loader`将会以同样的方式处理`contenthash`和`hash`，这是文件指纹的特例。
- `[ext]`表示使用文件本身的后缀。

而要在生产模式下为`.css`文件添加文件指纹，就不能使用`style-loader`。`style-loader`会把`.css`文件嵌入到`.js`文件中，我们无法得到单独的`.css`文件，自然也就无法添加文件指纹了。

要解决这个问题，我们要使用`mini-css-extract-plugin`，它能分离出`.css`文件让我们添加文件指纹。一般只会在生产环境中使用它，在开发环境里，从效率考虑，还是会使用`style-loader`。

```sh
npm i mini-css-extract-plugin@0 -DE
```

我们再把`${PROJECT_DIR}/config/webpack.base.js`里关于 css 的部分都放到`${PROJECT_DIR}/config/webpack.dev.js`里。

现在，完整的`${PROJECT_DIR}/config/webpack.base.js`包含了`entry`，`plugin`和`loader`。其中，图片文件和字体文件的处理都使用了`contenthash`的前 8 位。

注意：我们只是移除了其中关于 css 的部分，下面给出完整的文件内容供参考。

```js
const path = require('path');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src', 'index.js'),
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new WebpackBar(),
    new CleanPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve('public', 'favicon.ico') }],
    }),
    new HtmlPlugin({
      title: 'demo03',
      template: path.resolve('public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'img',
              publicPath: 'img',
              name: '[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'fonts',
              publicPath: 'fonts',
              name: '[name].[contenthash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
};

```

完整的`${PROJECT_DIR}/config/webpack.dev.js`内容也放在下面。除去基本的配置外，还声明了`mode`，`webpack-dev-server`，`devtool`和`loader`。在这里，我们使用了`style-loader`。

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
});

```

我们再来修改`${PROJECT_DIR}/config/webpack.prod.js`，不使用`style-loader`而是使用`mini-css-extract-plugin`。

首先用`mini-css-extract-plugin`附带的`loader`替换掉原本使用的`style-loader`。我们还要指定`publicPath`，也就是指定代码使用的`.css`文件所在的相对于`output.path`的文件夹。

```js
module.exports = merge(baseConfig, {
  ...,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css',
            },
          },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
});

```

`publicPath: 'css'`表示要使用`${output.path}/css`里的`.css`文件。

接着，把`mini-css-extract-plugin`加到`plugins`里，指定输出文件名。在前面我们已经指定要使用`${output.path}/css`文件夹里的`.css`文件，在这里我们需要把文件夹名也添加上去，让`.css`文件输出到`${output.path}/css`目录下。

```js
module.exports = merge(baseConfig, {
  ...,
  plugins: [
    ...,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    ...,
  ],
  ...,
});

```

而要为`entry`对应的输出文件添加文件指纹非常简单，只需要直接使用`chunkhash`。

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  ...,
  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash:8].js',
  },
  ...,
};

```

完整的`${PROJECT_DIR}/config/webpack.prod.js`如下所示。

```js
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css',
            },
          },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css',
            },
          },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
});

```

这仅仅是最简单的处理，在实际应用中，我们还可能会遇到更复杂的情况需要我们来处理。

### 移除 js 中的注释以压缩 js

如果我们完成之后打开`${PROJECT_DIR}/dist/js/app.[chunkhash:8].js`，就会发现大量 js 代码堆叠到一起，这是正常的压缩现象。但是，文件里还有一些注释，这是生产环境不需要的，我们可以手动配置来去除这些注释，进一步地压缩`.js`文件。

`webpack`默认在生产环境下使用`terser-webpack-plugin`来压缩`.js`文件，我们只需要做进一步的配置即可。

虽然安装`webpack`依赖的时候会自动安装该依赖，但是我们通常会显式安装我们所需要的依赖，指定版本，避免版本不一致的问题。

```sh
npm i terser-webpack-plugin@4 -DE
```

我们不是从头配置`terser-webpack-plugin`，而是修改`webpack`原本的`terser-webpack-plugin`配置，所以我们是在`optimization`字段中（而不是在`plugins`字段中）使用`terser-webpack-plugin`。

```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  ...,
};

```

简单地配置`terser-webpack-plugin`，就可以使得最终输出的结果没有注释。

这个配置也是`terser-webpack-plugin`文档中提供的例子，而这只是`terser-webpack-plugin`功能的冰山一角。感兴趣的话可以查阅相关资料学习。

### 压缩 html

要压缩`.html`文件，我们可以使用之前用到的`html-webpack-plugin`。除了我们之前用到的指定模板的功能，它还有压缩 html 的功能，而且是默认开启的。

如果我们需要修改`html-webpack-plugin`的压缩选项，我们只需要为`${PROJECT_DIR}/config/webpack.base.js`中的`html-webpack-plugin`的配置添加一个`minify`字段，然后写入自己的配置即可。

下面是默认的`html-webpack-plugin`的压缩选项。

```js
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  ...,
  plugins: [
    ...,
    new HtmlPlugin({
      title: 'demo03',
      template: path.resolve('public', 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    ...,
  ],
  ...,
};

```

- `collapseWhitespace: true`表示减少 html 中不必要的空白。
- `removeComments: true`表示移除 html 中的注释。
- `removeRedundantAttributes: true`表示移除标签上使用了默认值的属性，比如`<input type="text" />`，可以移除`type="text`。
- `removeScriptTypeAttributes: true`表示移除`<script>`标签上的`type="text/javascript"`。
- `removeStyleLinkTypeAttributes: true`表示移除`<style>`和`<link>`标签上的`type="text/css"`。
- `useShortDoctype: true`表示使用较短的 html 格式声明。

一般不需要手动配置，如果有这方面需求，可以翻看文档再做修改。注意：写入的自己的配置不会和默认配置组合使用（默认配置会被覆盖），所以必须确保写入的自己的配置是完整的。

### 使用 postcss 处理 css

`postcss`是一个处理 css 的工具。因为`postcss`能通过不同的插件实现各种对 css 的操作（包括补齐特性、压缩等），不少人叫它 css 界的`babel`。

还是要先安装相关的依赖。

```sh
npm i postcss@7 postcss-loader@3 autoprefixer@9 postcss-preset-env@6 cssnano@4 -DE
```

要怎么使用`postcss`呢？很简单，在`webpack`配置文件里使用`postcss-loader`，之后创建一个`${PROJECT_DIR}/postcss.config.js`文件作为`postcss`的配置文件。

注意：`postcss-loader`会处理`@import`语句，所以还需要修改`css-loader`的`importLoaders`配置。

`${PROJECT_DIR}/config/webpack.dev.js`：

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  ...,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  ...,
});

```

`${PROJECT_DIR}/config/webpack.prod.js`：

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  ...,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'css',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  ...,
});

```

`${PROJECT_DIR}/postcss.config.js`：

```js
module.exports = {};

```

空文件等同于没有配置`postcss`。要让`postcss`处理 css，就需要使用插件。

浏览器厂商们有时会给实验性的或者非标准的 css 属性添加前缀，这样就可以让开发者进行试验，同时也不会使得标准化之后现有代码被破坏。

因为存在浏览器厂商自实现某些实验性的属性、停止更新浏览器导致没有浏览器跟随标准等情况，所以为 css 属性添加特定浏览器的前缀也带有了 polyfill 的意味。

手动添加前缀是相当麻烦的一件事情，使用`autoprefixer`插件可以让`postcss`自动为我们补全浏览器的样式前缀。

`${PROJECT_DIR}/postcss.config.js`：

```js
module.exports = {
  plugins: [
    require('autoprefixer'),
  ],
};

```

无需额外的配置，就是这么简单。`autoprefixer`会自动寻找目标浏览器的说明（就是`${PROJECT_DIR}/.browserslistrc`，希望你还没有忘记），并且根据目标浏览器自动地添加前缀。

而要处理某些 css 的新语法和新特性，我们就需要用到另外一个插件`postcss-preset-env`。和`@babel/preset-env`类似，它可以为我们处理 css 的某些新语法和新特性，而且，它还内置了`autoprefixer`！

我们可以把`autoprefixer`换成`postcss-preset-env`，同样的，无需额外的配置。`${PROJECT_DIR}/.browserslistrc`也会被自动地读取使用。这时候，`postcss`会根据目标浏览器自动添加属性前缀、处理相对稳定的新语法和新特性。

```js
module.exports = {
  plugins: [
    require('postcss-preset-env'),
  ],
};

```

默认地，`postcss-preset-env`会自动处理 stage 2+ 的新语法和新特性，你可以在它的[官方网站](https://preset-env.cssdb.org/features)中查看。

最后，`cssnano`插件可以帮助我们压缩`.css`文件并且去除掉多余的注释，用法也同样很简单。但要注意：只有在生产环境下才需要压缩并去除注释，所以我们在生产环境时再引入`cssnano`。

这里我们参考官方文档的配置，使用`cssnano-preset-default`，配置移除所有注释。

```js
module.exports = {
  plugins: [
    require('postcss-preset-env'),
    process.env.NODE_ENV === 'production' &&
      require('cssnano')({
        preset: ['default', { discardComments: { removeAll: true } }],
      }),
  ],
};

```

如果你在加入`cssnano`前查看过生产环境下构建出来的`.css`文件，你会发现文件已经被压缩过了，只是注释没有被去掉。这是因为目前我们所有的`.css`文件都是由`.scss`编译而来，而在生产环境下，`sass`依赖会给`sass-loader`指定`outputStyle: 'compressed'`，这就导致了我们得到的`.css`文件已经被压缩过一次，但注释仍然还在。

加入`cssnano`插件仍然是有必要的，因为`.css`文件依旧没有被压缩，而`.css`和`.scss`文件的注释也没有被去掉，`cssnano`可以很好地完成这部分工作。

到此为止，`postcss`已经能自动处理我们的 css 代码中用到的新语法和新特性，会自动添加属性前缀，能压缩并移除注释了。

### 基础依赖的处理

项目内往往有一些比较基础的依赖，比如`vue`，`react`，`react-dom`。默认地，`webpack`会把这些基础依赖放入`entry`对应的输出文件中。

这些基础依赖往往比较稳定，不会经常更新，如果打包进`entry`对应的输出文件，就会出现业务代码变化、基础依赖没有变化、但用户需要重新拉取包含了基础依赖的代码的情况，这相当不合理。

我们可以使用公共 cdn 来加载这些依赖，解决这个问题。首先要在`${PROJECT_DIR}/config/webpack.prod.js`配置`externals`，向`webpack`说明无需添加到构建包中的依赖。

```js
module.exports = {
  ...,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  ...,
};

```

`externals`是一个对象 object，它的键就是`webpack`需要排除的依赖名，稍后我们再说明对应的值。上面的配置会让`webpack`构建时排除`react`和`react-dom`两个依赖，不把它们加入到最终构建包中。

之后，还需要手动加入`react`和`react-dom`的公共 cdn 链接，使得项目能够使用`react`和`react-dom`这两个依赖，否则构建包没办法正常运行。

这里使用了 [jsdelivr](https://www.jsdelivr.com/) 这个公共 cdn，你也可以使用 [unpkg](https://unpkg.com/)。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="favicon.ico" type="image/x-icon" />
    <title>demo03</title>
  </head>
  <body>
    <div id="root" />
    <script src="https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"></script>
  </body>
</html>

```

- 公共 cdn 链接指定的依赖版本，要和项目内使用的依赖版本一致，不然可能导致开发和生产环境的表现不一致。
- `react`的 cdn 链接中暴露了`React`这个变量，而`react-dom`的 cdn 链接中暴露了`ReactDOM`这个变量，对应地，我们要把这两个变量指定为对应键的值。

我们尝试构建一下。最终构建的文件中，没有`react`和`react-dom`的存在。运行测试正常。我们也可以借助`html-webpack-externals-plugin`来实现类似的功能，这里不再做相应的演示，感兴趣的可以自行查看资料。

但是更多时候，比起相信公共 cdn，相信自己更好。不使用公共 cdn，我们可以自行把这些基础依赖抽离出来统一放置。这么做要比使用公共 cdn 更好，无需手动指定、更新公共 cdn 的依赖版本，也无需考虑公共 cdn 的稳定性。

`webpack`已经内置了这部分优化，但还需要进一步配置。我们要做的就是配置`optimization.splitChunks`，让这部分内置的优化更紧贴我们的项目。

```js
// ${PROJECT_DIR}/config/webpack.prod.js
module.exports = merge(baseConfig, {
  mode: 'production',
  ...,
  optimization: {
    ...,
    splitChunks: {
      chunks: 'all',
    },
    ...,
  },
  ...,
});

```

- 使用`optimization.splitChunks`，表示我们想要手动配置地分离`chunk`，而路径和名称会跟随`output.path`。
- 指定`chunks: 'all'`，表示我们想要把所有引入的库从已有的业务代码中分离出来。

具体需要怎么分离呢？一个常见的配置是，项目内的组件库单独成一个`chunk`，然后`node_modules`文件夹内同步引入的其他依赖单独成一个`chunk`，最后是项目内封装的自定义组件（也就是页面公共组件）单独成一个`chunk`。

我们通过`optimization.cacheGroups`来配置。首先是项目内的组件库`zent`单独成一个`chunk`。

```js
// ${PROJECT_DIR}/config/webpack.prod.js
module.exports = merge(baseConfig, {
  mode: 'production',
  ...,
  optimization: {
    ...,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        zent: {
          name: 'chunk-zent',
          priority: 30,
          test: /[\\/]node_modules[\\/]_?zent(.*)/,
        },
      },
    },
    ...,
  },
  ...,
});

```

接着是`node_modules`文件夹内同步引入的其他依赖。

```js
// ${PROJECT_DIR}/config/webpack.prod.js
module.exports = merge(baseConfig, {
  mode: 'production',
  ...,
  optimization: {
    ...,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        ...,
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
          chunks: 'initial',
        },
      },
    },
    ...,
  },
  ...,
});

```

- `vendors`的`priority`设置得比`zent`的`priority`低，因此，`zent`会优先生成一个`chunk`，而`vendors`对应的`chunk`不会再包含`zent`。
- 设置`vendors.chunks`为`initial`，意味着`chunk-vendors`只会包含代码中同步引入的部分，异步引入的部分会加入到`${PROJECT_DIR}/dist/app.[chunkhash:8].js`中。

最后则是页面公共组件。

```js
// ${PROJECT_DIR}/config/webpack.prod.js
module.exports = merge(baseConfig, {
  mode: 'production',
  ...,
  optimization: {
    ...,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        ...,
        components: {
          name: 'chunk-components',
          test: path.resolve('src', 'components'),
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
    ...,
  },
  ...,
});

```

- `minChunks`表示最小引用次数，这里设置为 2，即`chunk-components`内的代码都被其他`.js`中的代码引用过 2 次或以上。
- `reuseExistingChunk: true`表示如果`chunk-components`包含了已经被分离出来的部分（某些代码已经被分进了自定义`chunk`中），这些部分会被复用而不再打包进`chunk-components`中。

我们可以构建一下，看看效果。查看构建文件可以发现，`html-webpack-plugin`已经自动引入了各个`chunk`，无需我们操心。

下面是我在构建后的截图。

![有 splitChunks 构建效果图](https://ae01.alicdn.com/kf/U9cbdde6f3a1f4b728dcb3f9902ac9300C.jpg)

- 列`Asset`给出了打包出来的各个文件的位置和名称。
- 列`Size`给出了打包出来的各个文件的大小。
- 列`Chunks`和`Chunk Names`是我们所要关注的重点。
  - `Chunk Names`一共三个：`app`，`chunk-zent`和`chunk-vendors`。
  - `app`就是我们设置的`entry`键值，也就是说，`entry`本身就会生成一个`chunk`。
  - `chunk-zent`和`chunk-vendors`是我们配置后从`chunk app`中分离出来的`chunk`，位置和命名会跟随`output.filename`（也就是`${PROJECT_DIR}/dist/[name]:[chunkhash:8].js`）。
  - `react`和`react-dom`已经被加入到`chunk-vendors`中。
  - 我们如果修改`${PROJECT_DIR}/src/index.js`，就会发现只有`app`对应的文件指纹发生了变化，而`chunk-zent`和`chunk-vendors`的文件指纹没有发生变化。这样就使得这两个部分能有效地缓存，减少请求时间。
  - 没有`chunk-components`，这是因为我们目前没有使用任何的页面公共组件。

没有`splitChunks`的构建后的截图如下所示。

![没有 splitChunks 构建效果图](https://ae01.alicdn.com/kf/Uabea4a17c0224557bf1213cd32339ea01.jpg)

可以看到，如果不使用`splitChunks`，几乎所有的代码都会挤到`app.[chunkhash:8].js`中，在比较大的项目中，文件就会变得非常大。如果不更新基础库，用户就要耗费大量时间在获取包含了基础库代码的文件上。而使用了`splitChunks`，在不更新基础库的前提下，用户只需要获取包含了最新业务代码的相关文件（也就是`app`相关的文件），缩短了获取的时间。

但使用了`splitChunks`后，另一个问题也暴露出来了，那就是所有`.js`文件都放到了`${PROJECT_DIR}/dist`目录下，这并不利于管理。

和前面对字体、图片、`.css`文件的配置类似，我们可以让`.js`文件都放入特定的文件夹中。我们修改`output.filename`，使得所有的`.js`文件都会放入`${PROJECT_DIR}/dist/js`文件夹中。

```js
module.exports = merge(baseConfig, {
  ...,
  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].[chunkhash:8].js',
  },
  ...,
});

```

### 使用 gzip 文件

gzip 是一种数据压缩格式，或者说是一种文件格式。在生产环境打包的最后阶段，为生成的文件生成对应的`.gz`文件，可以有效地减小文件体积，让支持 gzip 的浏览器更快地加载页面。

```sh
npm i compression-webpack-plugin@4 -DE
```

然后我们在`${PROJECT_DIR}/config/webpack.prod.js`里配置它。

```js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(baseConfig, {
  ...,
  plugins: [
    ...,
    new CompressionPlugin({
      test: /\.(html|css|js|png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
    }),
  ],
  ...,
});

```

在上面，我们配置了`compression-webpack-plugin`去处理生成的`.html`，`.css`，`.js`，`.png`等文件。默认地，它会使用 gzip 算法去压缩处理。

但`compression-webpack-plugin`还有一个默认的限制，那就是如果生成的`.gz`文件的大小不能达到原文件的 80% 或以下，就不会去生成`.gz`文件。这是为了减少不必要的压缩，提高处理速度，在大型项目中，提高的速度尤为明显。

我们可以构建一下，看看效果。查看构建文件可以发现，文件基本都出现了对应的`.gz`文件。

如果你不在意处理速度，而是追求极致的压缩，你可以改成下面这样。这样做的话，所有符合正则表达式的文件都会生成`.gz`文件。

```js
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(baseConfig, {
  ...,
  plugins: [
    ...,
    new CompressionPlugin({
      test: /\.(html|css|js|png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
      minRatio: 1,
    }),
  ],
  ...,
});

```

### 使用 eslint 格式化和检验代码

`eslint`是现在最热门的 js 校验工具（当然也支持 ts），我们也可以在`webpack`中使用`eslint`。

```sh
npm i @modyqyw/eslint-config-react@1 eslint@7 eslint-webpack-plugin@2 -DE
```

目前，大部分项目会使用`eslint-loader`而不是`eslint-webpack-plugin`。因为`eslint-loader`将要被废弃，所以这里我们用`eslint-webpack-plugin`来做配置，但是它们的配置相差不大，而且`eslint-webpack-plugin`还修复了一些问题，推荐使用。

安装完依赖之后，我们可以在根目录下建立一个新文件`.eslintrc.js`作为`eslint`的配置文件。这里用我自己封装的`eslint`规则来演示。

```js
module.exports = {
  extends: ['@modyqyw/react'],
};

```

*题外话：如果你想在 vscode 中享受 eslint 的提示，请参考[这里](../environment/README.md#vscode)手动配置。*

无论是开发环境还是生产环境都需要使用到`eslint`，所以我们需要在公共的配置文件里加入`eslint-webpack-plugin`。

```js
/* eslint-disable import/no-extraneous-dependencies */
...
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  ...,
  plugins: [
    ...,
    new ESLintPlugin({
      files: 'src',
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
    }),
  ],
  ...,
};

```

- L1：我们添加了注释，表示让`eslint`在这个文件内忽略`eslint-plugin-import`里面的`no-extraneous-dependencies`规则，减少不必要的麻烦。类似的，我们还需要修改`${PROJECT_DIR}/config`里面的所有文件，还有`${PROJECT_DIR}/postcss.config.js`。
- L3：引入`eslint-webpack-plugin`
- L10：指定`eslint`需要校验的文件目录，这里指定成`src`，默认地，等同于`${PROJECT_DIR}/src`
- L11：指定`eslint`需要校验的文件格式，这里指定成`.js`，`.jsx`，`.ts`，`.tsx`
- L12：指定`eslint`开启自动修复功能

现在，我们执行命令`npm run dev`和`npm run build`，命令行中会提示哪里出现了不能自动修复的错误。

```sh
 ERROR  Failed to compile with 1 errors

 error


.../webpack4-demos/demo03/src/index.js
   9:5  error  Do not use 'new' for side effects                                                                          no-new
  20:7  error  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

✖ 1 problem (1 error, 0 warnings)
```

- L6：提示我们这个文件里有错误
- L7：提示这个文件里的第 9 行第 5 列开始错误地使用了`new`
- L8：提示这个文件里地第 20 行第 7 列应该为`<img>`添加一个`alt`属性

我们只需要对应地改一下就可以了。前面加入`Promise`只是为了验证我们的配置，现在可以直接去掉。

```js
// ${PROJECT_DIR}/src/index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'zent';
import iconWebpack from './assets/webpack.png';
import './index.scss';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      document.title = 'Hello World!';
    }, 5000);
  }, []);

  return (
    <div className="container">
      <p>Hello Webpack!</p>
      <img src={iconWebpack} alt="icon-webpack" />
      <Button type="primary">
        <Icon type="youzan" />
        Hello Zent!
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

### 使用 stylelint 格式化和检验代码

### 代码提交的格式化和校验

### 优化日志

### 构建分析

### 减少 webpack 信息输出

你可能会注意到，运行`npm run build`输出的信息，要比`npm run dev`输出的信息多得多。这是因为我们控制了`webpack-dev-server`输出的信息，类似地我们也可以控制`webpack`输出的信息。

要控制`webpack`输出的信息很简单，只需要在`${PROJECT_DIR}/config/webpack.prod.js`中设置`stats`字段。

```js
module.exports = {
  ...,
  stats: 'minimal',
  ...,
};

```

`stats`用于控制显示哪些信息，默认为`normal`。我们修改成`minimal`，就可以达到和`webpack-dev-server`的配置一样的效果。

🎉恭喜，你的第三个 webpack demo 已经完成啦～

参考源代码见 [modyqyw/webpack-demos/demo03](https://github.com/ModyQyW/webpack4-demos/tree/master/demo03)。

待补充，催稿可以

（1）邮件催稿

（2）打赏，备注“催稿+内容”（通常这种方式会更有效点，毕竟收了钱不好意思再拖）

## demo04 - 编写可维护的配置

### 配置设计

### 使用 eslint 检验配置

### 使用 prettier 格式化配置

### 冒烟测试

### 单元测试

### 持续集成

## 原理

### 热更新 hot-reload

### 摇树优化 tree-shaking

### 作用域提升 scope-hoisting

🎉恭喜，你的第四个 webpack demo 已经完成啦～

参考源代码见 [modyqyw/webpack-demos/demo04](https://github.com/ModyQyW/webpack4-demos/tree/master/demo04)。

## demo05 - 背后的原理

待补充，催稿可以

（1）邮件催稿

（2）打赏，备注“催稿+内容”（通常这种方式会更有效点，毕竟收了钱不好意思再拖）

## 参考

- [nodejs 12.x - path](https://nodejs.org/dist/latest-v12.x/docs/api/path.html)
- [webpack](https://v4.webpack.js.org)
- [理解 webpack chunk](https://juejin.im/post/5d2b300de51d45775b419c76)
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin#readme)
- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin#readme)
- [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin#readme)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#readme)
- [webpack-bar](https://github.com/nuxt/webpackbar)
- [webpack plugins 的顺序会影响什么吗？](https://stackoverflow.com/questions/41470771/webpack-does-the-order-of-plugins-matter)
- [常用 plugins 汇总](https://modyqyw.top/front-end/misc/#%E7%BC%96%E8%AF%91%E6%89%93%E5%8C%85)
- [常用 loaders 汇总](https://modyqyw.top/front-end/misc/#%E7%BC%96%E8%AF%91%E6%89%93%E5%8C%85)
- [babel](https://babeljs.io/)
- [babel-loader](https://github.com/babel/babel-loader#readme)
- [babel 教程](https://www.jiangruitao.com/docs/babel/)
- [browserslist](https://github.com/browserslist/browserslist#readme)
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
- [@babel/plugin-transform-runtime 到底是什么](https://zhuanlan.zhihu.com/p/147083132)
- [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)
- [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app)
- [core-js](https://github.com/zloirock/core-js#readme)
- [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)
- [style-loader](https://github.com/webpack-contrib/style-loader#readme)
- [css-loader](https://github.com/webpack-contrib/css-loader#readme)
- [less](http://lesscss.org/)
- [less-loader](https://github.com/webpack-contrib/less-loader#readme)
- [sass](https://sass-lang.com/)
- [sass-loader](https://github.com/webpack-contrib/sass-loader#readme)
- [resolve-url-loader](https://github.com/bholloway/resolve-url-loader#readme)
- [stylus](https://stylus-lang.com/)
- [stylus-loader](https://github.com/shama/stylus-loader#readme)
- [zent](https://youzan.github.io/zent/zh/)
- [file-loader](https://github.com/webpack-contrib/file-loader#readme)
- [url-loader](https://github.com/webpack-contrib/url-loader#readme)
- [html-loader](https://github.com/webpack-contrib/html-loader#readme)
- [cross-env](https://github.com/kentcdodds/cross-env)
- [webpack-merge](https://github.com/survivejs/webpack-merge#readme)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader#readme)
- [webpack 文件指纹策略](https://jkfhto.github.io/2019-10-18/webpack/webpack-%E6%96%87%E4%BB%B6%E6%8C%87%E7%BA%B9%E7%AD%96%E7%95%A5%EF%BC%9Achunkhash%E3%80%81contenthash%E5%92%8Chash/)
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin#readme)
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin/#readme)
- [postcss](https://postcss.org/)
- [CSS 3 中 -webkit-, -moz-, -o-, -ms- 这些私有前缀什么时候可以移除？](https://www.zhihu.com/question/20597072)
- [autoprefixer](https://github.com/postcss/autoprefixer#readme)
- [postcss-preset-env](https://github.com/csstools/postcss-preset-env#readme)
- [cssnano](https://cssnano.co/)
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader#readme)
- [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin#readme)
- [阮一峰 - JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
- [潘嘉晨 - 手摸手，带你用合理的姿势使用webpack4（上）](https://juejin.im/post/5b56909a518825195f499806)
- [潘嘉晨 - 手摸手，带你用合理的姿势使用webpack4（上）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)
- [stylelint](https://stylelint.io/)

## 致谢

- [XuXianTao](https://github.com/XuXianTao) - 阅读了初稿并提供了弥足珍贵的建议和意见

<Vssue />
