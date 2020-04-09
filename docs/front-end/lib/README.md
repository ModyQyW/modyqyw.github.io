# 库/框架/工具集

## chrome 插件

- [谷歌访问助手](https://github.com/haotian-wang/google-access-helper)
- Google 翻译
- LambdaTest Screenshots
- Library Sniffer
- Mac迅雷下载支持
- Octotree
- React Developer Tools
- Suspicious Site Reporter
- The Great Suspender
- uBlock Origin
- Video Downloader professional
- Vue.js devtools
- 优酷去广告 插件(已支持优酷、土豆、爱奇艺、乐视网、搜狐视频、酷六)

## firefox 插件

- Octotree
- React Developer Tools
- uBlock Origin
- Vue.js devtools

## 语言

- [typescript](https://www.typescriptlang.org/) - 必学，要会用
- [reason](https://reasonml.github.io/) - 可以观望

## 文档

- [vueperss](https://vuepress.vuejs.org/zh/)
- [hexo](https://hexo.io/)

## 项目体系

- [np](https://github.com/sindresorhus/np) - 更好的 npm publish，自动 push，自动 tag 等
- [nvm](https://github.com/nvm-sh/nvm) - 管理 node 版本，windows 版见 [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [npm](https://github.com/npm/cli)
- [yarn](https://classic.yarnpkg.com/zh-Hans) - 目前来看，用 v1 比较好，v2 坑比较多
- [cgr](https://github.com/daysai/cgr) - 换源
- [npm-check](https://github.com/dylang/npm-check) - 检查依赖，建议配合 yarn upgrade-interactive 使用
- [lerna](https://github.com/lerna/lerna) - monorepo 管理
- [lerna-changelog](https://github.com/lerna/lerna-changelog) - 为 lerna 项目自动生成 changelog
- [eslint](https://eslint.org/) - 检查 js 代码的格式与语法
  - [eslint-config-standard](https://github.com/standard/eslint-config-standard)
  - [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)
  - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
  - [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
  - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - [@vue/eslint-config-standard](https://github.com/vuejs/eslint-config-standard)
  - [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- [prettier](https://prettier.io/) - 检查代码格式
- [stylelint](https://stylelint.io/) - 检查样式代码的格式与语法
  - [stylelint-order](https://github.com/hudochenkov/stylelint-order)
  - [stylelint-config-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) - bootstrap 预设的 scss stylelint 配置
  - [stylelint-formatter-pretty](https://www.npmjs.com/package/stylelint-formatter-pretty)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://github.com/typicode/husky)
- [yorkie](https://github.com/yyx990803/yorkie)
- [cross-env](https://github.com/kentcdodds/cross-env) - 跨平台的环境变量声明
- [rimraf](https://github.com/isaacs/rimraf) - 在命令行中删除文件
- [git](https://atts.w3cschool.cn/attachments/image/20191225/1577243564858376.png)
  - [pro git](https://git-scm.com/book/en/v2)

## 编译打包

- [babel](https://babeljs.io/) - js 转译器，转换浏览器未支持的 js 特性
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
  - [core-js](https://github.com/zloirock/core-js) - js 模块化标准库，包含了大量 polyfill
  - [bluebird](https://github.com/petkaantonov/bluebird) - 支持 ie8 的 promise polyfill
  - [polyfill.io](https://polyfill.io/v3/) - 在线自动引入 polyfill
  - [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) - 用于 async 函数的独立运行时
- [postcss](https://postcss.org/) - css 的 babel
  - [autoprefixer](https://github.com/postcss/autoprefixer) - 自动补全 css 前缀
  - [cssnano](https://cssnano.co/) - 压缩 css
  - [purgecss](https://purgecss.com/) - 移除不用的 css
- [webpack](https://webpack.js.org/) - v4，模块打包器，一般用于打包项目，可参考 [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack)
  - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) - 快速开发
  - [optimization](https://webpack.js.org/configuration/optimization/) - 配置优化，包括 split chunks 等
  - [webpack-merge](https://github.com/survivejs/webpack-merge) - 合并配置
  - [webpack-chain](https://github.com/neutrinojs/webpack-chain) - 链式生成并简化配置的修改操作
  - [webpack-bar](https://github.com/nuxt/webpackbar) - 显示进度条
  - [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - bundle 分析
  - [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin) - 统计 webpack 各阶段耗时
  - [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) - 压缩 js，代替 uglify-webpack-plugin
  - [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) - 指定承载 bundle 的 html 文件
  - [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - 将本身存在的单个文件或整个目录复制到构建目录
  - [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin/) - 压缩 asset
  - [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - 提取 css 为单独文件
  - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin) - 打包时检查样式
  - [thread-loader](https://webpack.js.org/loaders/thread-loader/) - 放置在这个 loader 后面的 loader 会装载到 worker pool 中运行，有一定限制条件，代替 happy-pack
  - [cache-loader](https://webpack.js.org/loaders/cache-loader/) - 类似于 thread-loader，该 loader 适用于性能开销较大的 loader
  - [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin) - 第一次打包正常速度，之后加速 90%，没有维护，建议不要再用了
  - [raw-loader](https://webpack.js.org/loaders/raw-loader/) - 允许引入文件
  - [url-loader](https://webpack.js.org/loaders/url-loader/) - 解析文件引入，允许把文件转换成 base64 编码数据
  - [file-loader](https://webpack.js.org/loaders/file-loader/) - 解析文件引入
  - [babel-loader](https://webpack.js.org/loaders/babel-loader/) - 使用 babel 和 webpack 编译 js 文件
  - [ts-loader](https://github.com/TypeStrong/ts-loader) - 解析 ts
  - [style-loader](https://webpack.js.org/loaders/style-loader/) - 把 css 插入到 DOM 中
  - [css-loader](https://webpack.js.org/loaders/css-loader/) - 解析 css @import 和 url()
  - [less-loader](https://webpack.js.org/loaders/less-loader/) - 解析 less 文件成 css 文件
  - [sass-loader](https://webpack.js.org/loaders/sass-loader/) - 解析 sass/scss 文件成 css 文件
  - [postcss-loader](https://webpack.js.org/loaders/postcss-loader/) - 使用 postcss 处理 css 文件
  - [eslint-loader](https://webpack.js.org/loaders/eslint-loader/) - 代码校验
- [rollup](https://rollupjs.org/guide/zh/) - 模块打包器，一般用于打包库，没接触过，可参考 [awesome-rollup](https://github.com/rollup/awesome)

## 工具集

- [lodash](https://lodash.com/)
- [moment](https://momentjs.com/) - 日期时间处理
- [dayjs](https://dayjs.gitee.io/zh-CN/) - 日期时间处理，moment 的竞品
- [date-fns](https://date-fns.org/) - 日期时间处理
- [history](https://github.com/ReactTraining/history) - 处理访问历史，比较底层的库
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp) - 将路径字符串转换成正则，比较底层的库

一般用 lodash + dayjs 就能解决普遍在开发中遇到的问题，有条件的可以去学一下源码。用 dayjs 不用 moment 的原因是 moment 太大了，不用 date-fns 的原因是它没有中文文档，对国内新手不友好。

## 原生及相关生态

- [jquery](https://jquery.com/) - 要适配 ie8 需要使用 v1
- [axios](https://github.com/axios/axios) - 请求库，用到了 promise
- [echarts](https://www.echartsjs.com/zh/index.html) - 图表库，有
- [bootstrap](https://getbootstrap.com/) - ui 库，要适配 ie8 需要使用 v3
- [bootstrap-table](https://bootstrap-table.com/) - 搭配 bootstrap 使用的表格组件，要搭配 bootstrap v3 要使用[旧版](https://bootstrap-table-docs3.wenzhixin.net.cn/zh-cn/home/)
- [bulma](https://bulma.io/documentation/) - 现代化的 css 框架
- [primer](https://primer.style/css)
- [es6 入门教程](http://es6.ruanyifeng.com/)
- [markdown-it](https://github.com/markdown-it/markdown-it) - markdown 解析
- [qiankun](https://qiankun.umijs.org/zh/) - 微前端解决方案

## typescript

- [入门教程](https://ts.xcatliu.com/basics)
- [官方教程](https://www.typescriptlang.org/docs/home.html)

## vue 及相关生态

- [中文文档](https://cn.vuejs.org/v2/guide/)
- 路由
  - [vue-router](https://router.vuejs.org/zh/)
- 状态管理
  - [vuex](https://vuex.vuejs.org/zh/)
- 插件
  - [qiankun](https://github.com/F-loat/vue-cli-plugin-qiankun) - 微前端解决方案
- ui
  - [vuetify](https://vuetifyjs.com/zh-Hans/)
  - [element](https://element.eleme.cn/#/zh-CN/component/installation)
  - [buefy](https://github.com/buefy/buefy/)
  - [viewui](https://www.iviewui.com/docs/introduce)
  - [antd-vue](https://www.antdv.com/)
  - [bootstrap-vue](https://bootstrap-vue.js.org/docs)
  - [vue-material](https://vuematerial.io/getting-started)
  - [muse-ui](https://muse-ui.org/#/zh-CN/installation)
  - [mint-ui](https://mint-ui.github.io/docs/#/zh-cn2)
  - [cube-ui](https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start)
  - [vant](https://youzan.github.io/vant/#/zh-CN/)
  - [nut-ui](http://nutui.jd.com/#/intro)
  - [zarm](https://zhongantech.github.io/zarm-vue/#/documents/quick-start)
  - [onsen-ui](https://onsen.io/v2/guide/vue/)
  - [prime](https://primefaces.org/primevue/showcase/#/setup)
- cli
  - [nuxt](https://zh.nuxtjs.org/guide/installation/) 支持 ssr
  - [vue-cli](https://cli.vuejs.org/zh/guide/) 配置后支持 ssr
  - [vapper](https://vapperjs.org/zh/) - 支持 ssr
- app/小程序
  - uni-app
    - [中文文档](https://uniapp.dcloud.io/)
    - 路由
      - 自带路由
    - 状态管理
      - 与上方的状态管理一致
    - ui
      - [uni-ui](https://github.com/dcloudio/uni-ui)
      - [color-ui](https://github.com/weilanwl/ColorUI)
      - [grace-ui](https://grace.hcoder.net/) - 收费
- 衍生
  - 待补充

## react 及相关生态

- [英文文档](https://reactjs.org/docs/getting-started.html)
- [中文文档](https://zh-hans.reactjs.org/docs/getting-started.html)
- [react-training](https://reacttraining.com/)
- 路由
  - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
- 状态管理
  - context + hooks
  - [unstated-next](https://github.com/jamiebuilds/unstated-next/blob/master/README-zh-cn.md)
  - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/)
  - [rematch](https://rematch.github.io/rematch/)
  - [mobx](https://mobx.js.org/) + [mobx-react](https://mobx-react.js.org/)
- ui
  - [antd](https://ant.design/docs/react/introduce-cn)
  - [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
  - [material-ui](https://material-ui.com/zh/)
  - [blueprint](https://blueprintjs.com/docs/)
  - [react-rainbow](https://react-rainbow.io/)
  - [semantic-ui-react](https://react.semantic-ui.com/)
  - [fluent-ui-react](https://developer.microsoft.com/en-us/fabric/#/components)
  - [react-suite](https://rsuitejs.com/)
  - [zent](https://youzan.github.io/zent/zh/guides/install)
  - [react-md](https://react-md.dev/v1/)
  - [shineout](https://shine.wiki/)
  - [antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)
  - [zarm](https://zarm.design/#/components/quick-start)
  - [react-desktop](http://reactdesktop.js.org/)
  - [onsen-ui](https://onsen.io/v2/guide/react/)
  - [shards](https://designrevision.com/docs/shards-react/getting-started)
  - [prime](https://primefaces.org/primereact/showcase/#/setup)
  - [chakra](https://chakra-ui.com/)
  - [primer](https://primer.style/components)
- cli
  - [next](https://nextjs.org/docs/getting-started) 支持 ssr
  - [umi](https://umijs.org/zh-CN) 支持 ssr
    - [@umijs/plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun) - 微前端解决方案
  - [create-react-app](https://create-react-app.dev/) 无 ssr 相关说明
  - [gatsby](https://www.gatsbyjs.com/) 支持 ssr
- app
  - react-native
    - [英文文档](https://facebook.github.io/react-native/)
    - [中文文档](https://reactnative.cn/)
    - 路由
      - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
      - [react-navigation](https://reactnavigation.org/)
    - 状态管理
      - 与上方的状态管理一致
    - ui
      - [react-native-elements](https://react-native-elements.github.io/react-native-elements/docs/overview.html)
      - [antd-rn](https://rn.mobile.ant.design/docs/react/introduce-cn)
    - cli
      - [expo](https://docs.expo.io/)
      - [rn-mobx-scaffold](https://github.com/ModyQyW/rn-mobx-scaffold)
      - [rn-unstated-ts-scaffold](https://github.com/ModyQyW/rn-unstated-ts-scaffold)
- 小程序
  - taro
    - [中文文档](https://taro-docs.jd.com/taro/docs/README.html)
    - 路由
      - 自带路由
    - 状态管理
      - context + hooks
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/)，详见[文档](https://taro-docs.jd.com/taro/docs/redux.html)
    - ui
      - [taro-ui](https://taro-ui.jd.com/#/docs/introduction)
      - [color-ui](https://yinliangdream.github.io/mp-colorui-doc/home/introduce.html#taro)
- 衍生
  - [styled-components](https://styled-components.com/)
  - [react-virtualized](https://github.com/bvaughn/react-virtualized) - 高效渲染大型列表和表格数据的 react 组件
  - [preact](https://preactjs.com/) - react 替代品
  - [anu](https://github.com/RubyLouvre/anu) - 能运行到 ie8 的 react，带[脚手架](https://gitee.com/menhal/React_IE8_boilerplate)
  - [fre](https://github.com/yisar/fre) - 原理类似 vue 3 的类 react 库
  - [inferno](https://infernojs.org/)

## Virtual DOM

- [snabbdom](https://github.com/snabbdom/snabbdom)

## 服务器端

- [nginx](https://www.nginx.com/)
- [node.js](https://nodejs.org/en/) - 用 js 构建后端服务
- [koa](https://koajs.com/) - node.js 框架，自由度高
- [egg](https://eggjs.org/zh-cn/) - 封装 koa，约定大于配置，阿里开源的
- [nest.js](https://nestjs.com/) - 渐进式 node.js 框架，学过 Angular 和 Spring 的话建议用这个
- [restful api](https://restfulapi.net/) - 使用最广泛的请求和响应格式
- [graphql](https://graphql.org/) - 新请求格式，旨在改进 restful api 的弊端

node.js 一般用来做服务器端的中间层。

## 在线工具

- [国外在线正则](https://regex101.com/)
- [国内在线正则](http://tools.jb51.net/regex/create_reg)
- [逻辑图](https://www.processon.com/)
- [兼容性查询 caniuse](https://caniuse.com/)
- [兼容性查询 css](https://www.campaignmonitor.com/css/)
- [浏览器支持列表](https://browserl.ist/)

## 图标

- [iconfont](https://www.iconfont.cn/)
- [icomoon](https://icomoon.io/)
- [ionicons](https://ionicons.com/)
- [fontawesome](https://fontawesome.com/)
- [ant-design-icons](https://github.com/ant-design/ant-design-icons)
- [octicons](https://octicons.github.com/)
- [material-icons](https://google.github.io/material-design-icons/)
- [material-design-icons](https://materialdesignicons.com/)
- [flaticon](https://www.flaticon.com/)

## 免费可商用图片

- [pexels](https://www.pexels.com/zh-cn/)
- [unsplash](https://unsplash.com/)
- [stocksnap](https://stocksnap.io/)
- [creative-vix](https://www.pexels.com/@creative-vix)
- [streetwill](http://streetwill.co/)
- [gratisography](https://gratisography.com/)
- [texture](https://www.textures.com/)
- [pixabay](https://pixabay.com/)
- [designdeck](http://designdeck.co.uk/index.html)

## 字体

- Menlo
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro/releases)
- Dank Mono
- [Jetbrains Mono](https://www.jetbrains.com/lp/mono/)
- [Fira Code](https://github.com/tonsky/FiraCode/releases)
- [Sarasa Mono T SC](https://github.com/be5invis/Sarasa-Gothic/releases)
- Monaco

## 参考

- [sorrycc/awesome-f2e-libs](https://github.com/sorrycc/awesome-f2e-libs)
