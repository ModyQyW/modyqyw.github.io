# demo02 - 再看核心概念

在这一部分，我们来稍微深入一下核心概念。

## 再看入口 entry

一开始我们说到，`webpack` 会分析依赖生成依赖图，而分析依赖生成依赖图的起点就由 `entry` 指定。

![webpack示意图](https://ae01.alicdn.com/kf/Hc2861d3d0e2b4ad89bfab9c37be5ecbcK.jpg)

单页面应用 SPA 只有一个入口，也就是说，`entry` 是一个字符串 string 或一个对象 object。多页面应用 MPA 有多个入口，`entry` 只能是一个对象 object。demo01 里的配置就是一个 SPA 的配置。

demo01 中 `entry` 的写法等同于下面的代码，也就是说，单入口写成字符串形式的时候，实际上会转换成对象形式，默认的 key 是 `main`。

```javascript
const path = require('path');

module.exports = {
  ...,
  entry: {
    main: path.resolve('src', 'index.js'),
  },
  ...,
};

```

`context` 可能会跟 `entry` 一起使用，它可以指定 `entry` 的基本路径。对于 MPA，使用 `context` 往往能使 `entry` 更简洁。下面是一个示例。

```javascript
const path = require('path');

module.exports = {
  ...,
  context: path.resolve('src'),
  entry: './index.js',
  ...,
};

```

考虑到实际开发时必要的工程化，我们有必要把 `webpack` 配置相关的文件放到一个单独的文件夹内，方便修改。

我们先把没有使用到 `context` 的 `webpack.config.js` 移动到 `${PROJECT_DIR}/config` 文件夹中，再指定 `entry` 的 key 为 `app`。

```javascript
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

移动配置文件后，就需要修改 `package.json` 里的命令，手动指定配置文件了。

```json
{
  ...,
  "scripts": {
    "build": "webpack --config ./config/webpack.config.js"
  },
  ...
}

```

## 再看输出 output

`webpack` 构建的结果如何输出由 `output` 指定。

SPA 可以直接指定 `output.filename` 和 `output.path`，像之前的示例一样，但更好的方法是使用对应的 `chunk` 的名称来给文件命名，而不是简单直接地使用固定名称。

`entry` 目前只会对应一个 `chunk`，而这个 `chunk` 的名称就是 `entry` 的键，也就是 `app`。

我们修改一下 `output` 的配置，使得 `entry` 指定的文件构建出来之后跟随 `entry` 的 key。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
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

- `output.filename = '[name].js'` 表示使用对应的 `chunk` 的名称来给文件命名。

## 再看插件 plugin

`plugin` 用来增强 `webpack` 功能，比如优化打包文件，管理资源，注入环境变量等等，它作用于整个构建过程。

前面的例子中，我们用到了 `copy-webpack-plugin`，`html-webpack-plugin` 一些相对来说比较简单的 `plugin`。

每个 `plugin` 都需要放到 `plugins` 字段数组里，顺序一般不影响，具体的配置需要去查询对应的文档。

## 再看加载器 loader

因为 `webpack` 默认只支持解析 `.js` 和 `.json` 文件，所以项目中使用到的其他文件，比如图片文件、字体文件、样式文件等，就只能使用 `loader` 解析。

下面会关注一些常用的 `loader`。

### js 语法和特性相关的 loader

因为 `webpack` 本身并不支持解析 es6+ 语法，所以要使用 es6+ 语法，我们就需要使用 `babel` 和 `babel-loader` 来解析。

`babel` 的一个主要作用就是把新语法转换成旧语法，也就是我们常说的语法转换，比如把箭头函数转换成 `function`。`babel-loader` 使得 `webpack` 在构建过程中能使用 `babel` 处理相关的文件。

首先还是要安装相关的依赖。

```shell
npm i @babel/runtime@~7.14.6
npm i core-js@~3.15.2
npm i react@~17.0.2
npm i react-dom@~17.0.2
npm i regenerator-runtime@~0.13.7
npm i @babel/cli@~7.14.5 -D
npm i @babel/core@~7.14.6 -D
npm i @babel/plugin-transform-runtime@~7.14.5 -D
npm i @babel/preset-env@~7.14.7 -D
npm i @babel/preset-react@~7.14.5 -D
npm i babel-loader@~8.2.2 -D
npm i @types/react@~17.0.14 -D
npm i @types/react-dom@~17.0.9 -D
npm i @types/node@~16.3.3 -D
```

然后修改 `webpack` 配置。不要忘记，对于 `webpack` 来说，所有文件都可以看成一个模块，所以需要在模块对应的字段下写配置。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
module.exports = {
  ...
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // js/jsx 文件
        test: /\.jsx?$/,
        // 只处理 src 里面的 js/jsx 文件
        include: /src/,
        // 使用 babel-loader 处理
        use: [{ loader: 'babel-loader' }],
      },
      ...
    ],
  },
};

```

- `test: /\.jsx?$/` 表示只处理 `.js` 和 `.jsx` 文件。
- `include: /src/` 表示只处理 `src` 里面的 `.js` 和 `.jsx` 文件，这能够有效地提高效率，同时避免可能存在的二次编译问题。一般来说，`node_modules` 里面的 `.js` 和 `.jsx` 文件都会直接支持 es5，所以不需要处理。
- 你也可以使用 `exclude` 来指定不需要处理的文件，它的优先级比 `include` 更高。

修改完 `webpack` 配置后，我们还需要配置 `babel`，让它根据我们的需求转换语法。我们创建 `${PROJECT_DIR}/babel.config.json` 作为 `babel` 的配置文件。

要支持 es6+ 语法非常简单，只需要直接使用的 `@babel/preset-env`。

```json
{
  "presets": ["@babel/preset-env"]
}
```

但 `@babel/preset-env` 默认的配置往往不能准确满足项目需求。一个比较常见的项目需求是支持特定的浏览器和特定的浏览器版本，比如支持 IE 11。

这个时候，我们就需要向 `@babel/preset-env` 说明目标浏览器，也就是语法转换后的代码能够跑在什么浏览器上。

我们可以用 `${PROJECT_DIR}/.browserslistrc` 文件来说明目标浏览器。`.browserslistrc` 文件是一个特殊的依赖于 `browserslist` 的文件，它的内容说明了项目的目标浏览器，会被 `@babel/preset-env` 读取并使用。

我们为 `${PROJECT_DIR}/.browserslistrc` 添加以下内容。

```shell
> 0.2%
last 3 versions
not dead
chrome >= 70
firefox >= 68
safari >= 13
ie >= 11

```

- `> 0.2%` 表示需要支持使用率超过 0.2% 的浏览器。
- `last 3 versions` 表示需要支持浏览器的最近 3 个版本。
- `not dead` 表示浏览器在最近 24 个月内还得到过官方的支持。
- `chrome >= 70` 表示 chrome 的版本需要不小于 70。
- `firefox >= 68` 表示 firefox 的版本需要不小于 68。
- `safari >= 13` 表示 safari 的版本需要不小于 13。
- `ie >= 11` 表示 ie 的版本需要不小于 11。

上面的条件取并集，就是需要支持的浏览器范围。

说明目标浏览器之后，`babel` 在转换语法的时候会更加精准。它会把目标浏览器不支持的 es6+ 语法转换成 es5 语法，同时保留目标浏览器支持的 es6+ 语法。

但是如果转换后的代码中存在浏览器不支持的特性，比如 `Promise`，那该怎么办呢？这个时候，`babel` 的另一个作用——自动补齐特性——就很好地解决了这个问题。

polyfill 指的是能够提供一些浏览器本身没有的新特性的 js 代码包。我们可以配置 `babel` 自动引入 polyfill 来自动补齐目标浏览器的特性。

`@babel/preset-env` 默认只会转换语法，我们需要手动配置来启用自动补全特性的功能。

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

- `useBuiltIns` 指定 `@babel/preset-env` 怎么处理 polyfill。
  - 默认地，`useBuiltIns` 的值是 `false`，也就是不处理 polyfill。
  - `useBuiltIns` 可以指定成 `entry`，这时候我们需要手动地在项目入口引入 `core-js` 和 `regenerator-runtime`，这种情况较为少见。
  - 指定成 `usage` 是一般情况下更好的选择，这时候我们无需手动引入，`babel/preset-env` 会为我们根据目标浏览器做相关的引入。
- `core-js` 指定 `@babel/preset-env` 使用什么版本的 `core-js`，只有 `useBuiltIns` 的值是 `entry` 或 `usage` 的时候起作用。
  - 默认地，`core-js` 的值是 2，表示使用 `core-js` v2。
  - 指定成 3 是更好的选择，因为 `core-js` v3 提供了更多的 polyfill，同时减少了全局污染。
  - 只指定版本，就只会引入稳定的特性。要引入提案特性，可以指定 `"proposals": true`，这样就可以使用 `core-js` v3 已经支持的提案（一般已经足够稳定）。

这时候，`babel` 会为我们自动引入 `core-js` v3 和 `regenerator-runtime` 中和项目代码关联的部分，自动补全浏览器特性。

但使用这样的配置构建出来的代码还不能投入到生产环境中。自动补全浏览器特性之后可能会使得每个文件头部都增加了相同的代码，比如多个文件都使用了 `Promise`，转译之后就会在这些文件的头部都引入相同的 `Promise` 相关的 polyfill。这些重复的代码会影响最终构建包的体积，在实际开发中是难以接受的。

我们可以使用 `@babel/plugin-transform-runtime` 来抽离这些重复的 polyfill 代码，把它们放到一起，进一步压缩最终构建包的体积。代码里面用到对应功能的时候，会自动引入对应的 polyfill。

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

除了 es6+ 的语法，我们还想支持 `react` 语法。我们也可以用 `babel` 来解析 `react` 代码，只需要根据 `@babel/preset-react` 的文档配置就可以了。

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

之后可以修改 `${PROJECT_DIR}/src/index.js`。

```javascript
// ${PROJECT_DIR}/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

如果不想写 `.jsx` 等后缀，我们可以手动设置 `resolve.extensions`。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
module.exports = {
  ...
  resolve: {
    // 不用写 .js，.jsx，.ts 和 .tsx
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

```

我们在 `App.jsx` 里使用 `react`，`react-dom`，`Promise` 以测试我们的配置。

```javascript
// ${PROJECT_DIR}/src/App.jsx
import React, { useEffect } from 'react';
import iconWebpack from './assets/webpack.png';

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
    <div>
      <span>Hello Webpack!</span>
    </div>
  );
};

export default App;
```

之后构建并运行测试。如果一切正常，可以看到页面上会出现 `Hello Webpack!` 的文字，5 秒左右标签页的标题被修改成 `Hello World!`。ie 11 本身不支持 `Promise`，但在 ie 11 上测试也能有这样的效果，说明 `Promise` 已经被加入进去了。

已经支持了特定特性的浏览器不会再度引入对应的 polyfill。

`@babel/plugin-transform-runtime` 也可以和 `core-js` 搭配使用，你可以自行尝试。

### 样式相关的 loader

由于 `webpack` 本身并不支持解析 `.css`，`.sass` 和 `.scss` 文件，所以我们需要用 `loader` 去解析这些文件。要解析 `.less` 和 `.styl` 文件，相对应的 `loader` 的配置大同小异，参考对应文档摸索就可以了，这里不再演示。

首先还是要安装相关的依赖。

```shell
npm i zent@~9.8.0
npm i babel-plugin-zent@~2.2.2 -D
npm i style-loader@~2.0.0 -D
npm i css-loader@~5.2.7 -D
npm i sass@~1.35.2 -D
npm i sass-loader@~10.2.0 -D
npm i resolve-url-loader@~3.1.4 -D
```

`css-loader` 能够把 `.css` 文件解析成 css 模块，而 `style-loader` 能够将 css 模块嵌入到文件中。

我们先在 `${PROJECT_DIR}/src/index.js` 引入 `.css` 文件。

```javascript
// ${PROJECT_DIR}/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

然后创建 `${PROJECT_DIR}/src/index.css`，设置一些样式。

```css
/* ${PROJECT_DIR}/src/index.css */
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica,
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

最后，我们修改一下 `webpack` 配置，增加对 `.css` 文件的解析。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
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

- `loader` 的调用顺序是从后往前的。上面的示例里，会先调用 `css-loader` 处理 `.css` 文件，再调用 `style-loader` 做进一步处理。

重新构建并运行，我们可以在浏览器开发者工具中看到，样式已经作为 `<style>` 被插入到 `<head>` 标签里面。

处理 `.sass` 和 `.scss` 文件有少许的不同。`sass-loader` 会把 `.sass` 和 `.scss` 文件转换成 `.css` 文件，而 `.css` 文件的处理步骤就跟上面一致。所以，我们只需要复制粘贴，然后配置 `sass-loader` 就可以了。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
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
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      ...,
    ],
  },
};

```

`sass-loader` 会处理 `@import` 语句，所以我们还需要配置 `css-loader`，说明在 `css-loader` 之前还有 1 个 `loader` 会处理 `@import` 语句。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
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
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      ...,
    ],
  },
};

```

sass/scss 没有 url 重写的功能，所以我们还需要加入 `resolve-url-loader`，避免实际使用的时候出现 url 指向不正确的问题。`resolve-url-loader` 不会处理 `@import` 语句，所以不用再修改 `css-loader` 的 `importLoaders` 配置项。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
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
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      ...,
    ],
  },
};

```

我们把 `index.css` 重命名为 `index.scss`，修改 `${PROJECT_DIR}/src/index.js` 里面的引入。重新构建、测试，一切正常。

我们再来试着添加并使用 `zent` 这个组件库。我们修改 `${PROJECT_DIR}/src/App.jsx`，加入栅格系统和带图标的按钮。

```javascript
// ${PROJECT_DIR}/src/App.jsx
import React, { useEffect } from 'react';
import { LayoutRow as Row, LayoutCol as Col, LayoutGrid as Grid, Button, Icon } from 'zent';

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
    <Grid>
      <Row>
        <Col span={24}>
          <Button type="primary">
            <Icon type="youzan" />
            Hello Zent!
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
```

然后修改 `${PROJECT_DIR}/babel.config.json`，根据 `babel-plugin-zent` 说明加入按需加载的优化。

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

重新构建、测试，可以看到一个蓝色的按钮，按钮内左边是有赞的图标，文字是 `Hello Zent`。

但仅仅是解析 `.css`，`.sass` 和 `scss` 还远远不能达到实际的需求，我们往往会需要使用 css 新特性，或者压缩 css 代码，又或者为 css 属性添加浏览器前缀。这时候我们就需要使用 `postcss` 和 `postcss-loader`，不少人把 `postcss` 叫做 css 界的 `babel`。

```shell
npm i postcss@~8.3.5 -D
npm i postcss-loader@~4.3.0 -D
npm i autoprefixer@~10.3.1 -D
npm i postcss-preset-env@~6.7.0 -D
npm i cssnano@~5.0.6 -D
```

在 `webpack` 配置文件里使用 `postcss-loader`。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
module.exports = {
  ...,
  // 指定 loader
  module: {
    rules: [
      ...,
      {
        // css 文件
        test: /\.css$/,
        // 依次使用 postcss-loader，css-loader，style-loader 处理
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
        // sass/scss 文件
        test: /\.s[ac]ss$/,
        // 依次使用 sass-loader，resolve-url-loader，postcss-loader，css-loader，style-loader 处理
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
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      ...,
    ],
  },
};

```

- `postcss-loader` 会处理 `@import` 语句，注意修改 `css-loader` 的 `importLoaders` 配置项。

创建一个 `${PROJECT_DIR}/postcss.config.js` 文件作为 `postcss` 的配置文件。

```javascript
// ${PROJECT_DIR}/postcss.config.js
module.exports = {};
```

空文件等同于没有配置 `postcss`。要让 `postcss` 处理 css，就需要使用插件。

浏览器厂商们有时会给实验性的或者非标准的 css 属性添加前缀，这样就可以让开发者进行试验，同时也不会使得标准化之后现有代码被破坏。

因为存在浏览器厂商自实现某些实验性的属性、停止更新浏览器导致没有浏览器跟随标准等情况，所以为 css 属性添加特定浏览器的前缀也带有了 polyfill 的意味。

手动添加前缀是相当麻烦的一件事情，使用 `autoprefixer` 插件可以让 `postcss` 自动为我们补全浏览器的样式前缀。

```javascript
// ${PROJECT_DIR}/postcss.config.js
module.exports = {
  plugins: [require('autoprefixer')],
};
```

无需额外的配置，`autoprefixer` 会自动寻找目标浏览器的说明，也就是 `${PROJECT_DIR}/.browserslistrc`，并且根据目标浏览器自动地添加前缀。

而要处理某些 css 的新语法和新特性，我们就需要用到另外一个插件 `postcss-preset-env`。和 `@babel/preset-env` 类似，它可以为我们处理 css 的某些新语法和新特性，而且，它还内置了 `autoprefixer` 的功能。我们可以直接把 `autoprefixer` 换成 `postcss-preset-env`，`${PROJECT_DIR}/.browserslistrc` 也会被自动地读取使用。

这时候，`postcss` 就会根据目标浏览器自动添加属性前缀、处理相对稳定的新语法和新特性了。

```javascript
// ${PROJECT_DIR}/postcss.config.js
module.exports = {
  plugins: [require('postcss-preset-env')],
};
```

默认地，`postcss-preset-env` 会自动处理 stage 2+ 的新语法和新特性，你可以在它的官方网站中查看。

最后，`cssnano` 插件可以帮助我们压缩 `.css` 文件并且去除掉多余的注释，用法也同样很简单。但要注意，只有在生产环境下才需要压缩并去除注释，所以我们在生产环境时再引入 `cssnano`。

这里我们参考官方文档的配置，使用 `cssnano-preset-default`，配置移除所有注释。

```javascript
// ${PROJECT_DIR}/postcss.config.js
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

如果你在加入 `cssnano` 前查看过生产环境下构建出来的 `.css` 文件，你会发现文件已经被压缩过了，只是注释没有被去掉。这是因为目前我们所有的 `.css` 文件都是由 `.scss` 编译而来，而在生产环境下，`sass` 依赖会给 `sass-loader` 指定 `outputStyle: 'compressed'`，这就导致了我们得到的 `.css` 文件已经被压缩过一次，但注释仍然还在。

加入 `cssnano` 插件仍然是有必要的，因为 `.css` 文件依旧没有被压缩，而 `.css` 和 `.scss` 文件的注释也没有被去掉，`cssnano` 可以很好地完成这部分工作。

到此为止，`postcss` 已经能自动处理我们的 css 代码中用到的新语法和新特性，会自动添加属性前缀，能压缩并移除注释了。

某些样式库可能需要我们引入对应的组件样式，比如上面的 `zent`。我们在配置对应的 `loader` 的时候没有像配置 `babel-loader` 一样只处理 `src` 内的样式文件，这么做是有原因的。

- 比起 js/jsx 文件的内容，样式文件的内容往往更小，处理起来不会耗费过多资源。
- 样式文件本身有可能没被处理过，无论有没有被处理过，重新处理一次的结果也不会有任何影响，由我们的 `loader` 处理一次是保险的选择。

### 资产相关的 loader

一般我们把项目使用到的图片、字体、音频、视频之类的文件叫做项目资产文件，它们一般不能被直接修改。

最常用的处理资产的 `loader` 就是 `file-loader` 和 `url-loader`。`url-loader` 是 `file-loader` 的升级版，增加了文件大小的上限配置，达到大小上限时会自动使用 `file-loader`，没达到大小上限的时候，会把文件转换成 base64 数据，然后硬编码到代码里。

为什么要转换成 base64 数据硬编码进代码呢？一方面，直接硬编码进代码可以减轻在读取该部分文件时的页面闪烁，提高用户体验，另一方面也可以减少网络请求，降低服务器压力。

如果 base64 数据太多太大，加载网页的速度依旧会变慢，所以不是所有文件都适宜转换成 base64 数据。

下面来演示如何加入和使用这两个 `loader`。首先还是安装依赖。

```shell
npm i file-loader@~6.2.0 -D
npm i url-loader@~4.1.1 -D
```

直接修改配置文件。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
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
              // 2 MB 上限
              limit: 2097152,
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
              limit: 2097152,
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

- 指定 `limit: 2097152` 后，超过 2 MB 时，`url-loader` 会自动降级成 `file-loader`。在实际应用里可以自行调整这个限制。
- `outputPath` 和 `publicPath` 是和项目中配置的输出路径 `output.path` 相关的，在这个项目里，也就是和 `${PROJECT_DIR}/dist` 相关。像上面的配置，最终构建结果是图片放进了 `${PROJECT_DIR}/dist/img` 里，而字体放进了 `${PROJECT_DIR}/dist/fonts` 里，使用资产的时候代码会自动到对应的文件夹里获取。
- 把图片和字体放入各自的文件夹中，主要目的是区分开不同类型的文件，避免所有文件都直接放在 `${PROJECT_DIR}/dist`。当然也可以把图片、字体等都放入到 `${PROJECT_DIR}/dist/assets` 里，只需要注意修改 `outputPath` 和 `publicPath` 即可。

放一个图片文件在 `${PROJECT_DIR}/src/assets` 里面（我这里放了 `webpack.png`），然后在 `${PROJECT_DIR}/src/App.jsx` 里引入、使用它。

```javascript
// ${PROJECT_DIR}/src/App.jsx
import React, { useEffect } from 'react';
import { LayoutRow as Row, LayoutCol as Col, LayoutGrid as Grid, Button, Icon } from 'zent';
import iconWebpack from './assets/webpack.png';
import './App.scss';

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
    <Grid>
      <Row>
        <Col span={24}>
          <img className="icon" src={iconWebpack} />
          <Button type="primary">
            <Icon type="youzan" />
            Hello Zent!
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default App;
```

```scss
// ${PROJECT_DIR}/src/App.scss
.icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  vertical-align: middle;
}
```

放一个字体文件在 `${PROJECT_DIR}/src/assets` 里面（我这里放入了阿里普惠体的字体文件 `Alibaba-PuHuiTi-Regular.ttf`），然后在 `${PROJECT_DIR}/src/index.scss` 里引入、使用它。

```scss
// ${PROJECT_DIR}/src/index.scss
@font-face {
  font-family: 'Alibaba PuHuiTi';
  src: url('./assets/Alibaba-PuHuiTi-Regular.ttf') format('ttf');
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
  font-family: 'Alibaba PuHuiTi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

重新构建，可以看到 `${PROJECT_DIR}/dist` 目录下多出了一个文件夹 `fonts`，里面是一个字体文件，名字被修改成一串字符串（也就是文件指纹，后面会做进一步解释），而图片文件被硬编码进代码里。测试一切正常。

`url-loader` 和 `file-loader` 只会处理 `.js` 中引用的图片。如果需要在 `.html` 里引用，那就需要使用 `html-loader` 处理；如果需要在 `.vue` 里引用，那就需要使用 `vue-loader` 处理。

或许你还想了解 svg 该如何处理，不妨自己去查查资料，亲手实践一下。

## 再看模式 mode

指定不同的模式，`webpack` 会自动启用不同的优化。默认模式是 `production`，默认取值范围是 `development`，`production` 和 `none`。

现在，我们每一次查看代码效果，都要执行 `npm run build`，然后用 `live server` 或 `serve` 启动。这相当麻烦，尤其是开发的时候，这么做会耗费很多时间，而且开发时也不应该使用 `production` 模式，而应该使用 `development` 模式。

`webpack-dev-server` 帮我们解决了这个问题。使用 `webpack-dev-server` 可以不刷新浏览器就看到我们开发的时候修改代码后的结果（这也就是我们常说的热更新），也不会生成文件放到 `dist` 目录下。实际上，生成文件会被放到内存里。

```shell
npm i cross-env@~7.0.3 -D
npm i webpack-dev-server@~3.11.2 -D
npm i webpack-merge@~5.8.0 -D
```

我们还要根据环境来使用不同的构建配置。基于可维护性考虑，我们应该拆分出不同环境的构建配置文件，最终根据环境暴露出对应环境的构建配置。

首先修改 `package.json`。

```json
{
  ...,
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve --config ./config/webpack.config.js --progress",
    "build": "cross-env NODE_ENV=production webpack --config ./config/webpack.config.js"
  },
  ...
}

```

- `cross-env` 可以修改 `process.env.XXX` 的值（在这里，`XXX` 就是 `NODE_ENV`），进而供我们确认环境。
- `webpack serve` 会自动调用 `webpack-dev-server`。

接着，我们把原本 `${PROJECT_DIR}/config/webpack.config.js` 中除 `mode` 之外的内容抽离出来，放到 `${PROJECT_DIR}/config/webpack.base.js` 里。这部分内容作为基础配置，会被所有环境的配置所引用。

再新建两个配置文件，内容列写在下面。

```javascript
// ${PROJECT_DIR}/config/webpack.dev.js
module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    quiet: true,
  },
  devtool: 'eval-cheap-source-map',
};
```

- `devServer.hot = true` 表示开启 `webpack-dev-server` 的热更新。
- `devServer.quiet = true` 表示减少构建输出的信息显示。
- `devtool` 可以确定错误对应的代码，能帮助调试，这里指定为 `source-map`。

```javascript
// ${PROJECT_DIR}/config/webpack.prod.js
module.exports = {
  mode: 'production',
  devtool: 'source-map',
};
```

最后修改 `${PROJECT_DIR}/config/webpack.config.js`，让它在不同环境暴露不同的构建配置。

```javascript
// ${PROJECT_DIR}/config/webpack.config.js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(baseConfig, devConfig);
} else {
  module.exports = merge(baseConfig, prodConfig);
}
```

- 使用 `webpack-merge` 组合基本配置和特定环境配置。

最后分别执行 `npm run dev` 和 `npm run build` 做测试，一切正常。下面是最终项目目录（省略了 `node_modules`）。

```shell
.
├── babel.config.json
├── config
│   ├── webpack.base.js
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist
│   ├── app.js
│   ├── app.js.map
│   ├── favicon.ico
│   ├── fonts
│   ├── index.html
│   └── report.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── assets
    ├── App.jsx
    ├── App.scss
    ├── index.js
    └── index.scss
```

对于`react`，还可以加入`react-hot-loader`进一步提升使用体验。有兴趣可以查阅相关资料学习。

🎉 恭喜，你的第二个 webpack demo 已经完成啦～

参考源代码见 [modyqyw/webpack4-plus-demos/demo02](https://github.com/ModyQyW/webpack4-plus-demos/tree/master/demo02)。
