# 库/框架/工具集

均用于辅助开发。

## chrome 插件

- [谷歌访问助手](https://github.com/haotian-wang/google-access-helper)
- [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb)
- [Google 翻译](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb)
- [LambdaTest Screenshots](https://chrome.google.com/webstore/detail/lambdatest-screenshots/fjcjehbiabkhkdbpkenkhaahhopildlh)
- [Library Sniffer](chrome://extensions/?id=fhhdlnnepfjhlhilgmeepgkhjmhhhjkh)
- [Mac迅雷下载支持](https://chrome.google.com/webstore/detail/mac%E8%BF%85%E9%9B%B7%E4%B8%8B%E8%BD%BD%E6%94%AF%E6%8C%81/bclmkgofhdgekpoamoialodjdloiilod)
- [Octotree](https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Suspicious Site Reporter](https://chrome.google.com/webstore/detail/suspicious-site-reporter/jknemblkbdhdcpllfgbfekkdciegfboi)
- [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg)
- [Video DownloadHelper](https://chrome.google.com/webstore/detail/video-downloadhelper/lmjnegcaeklhafolokijcfjliaokphfk)
- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [优酷去广告 插件(已支持优酷、土豆、爱奇艺、乐视网、搜狐视频、酷六)](https://www.pullywood.com/publish/archive/pullywood_ad_block_plugin_for_youku_tudou_iqiyi_ku6_etc.html)
- [哔哩哔哩助手：bilibili.com 综合辅助扩展](https://chrome.google.com/webstore/detail/%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E5%8A%A9%E6%89%8B%EF%BC%9Abilibilicom-%E7%BB%BC%E5%90%88%E8%BE%85%E5%8A%A9%E6%89%A9%E5%B1%95/kpbnombpnpcffllnianjibmpadjolanh)

## firefox 插件

- [Adblock Plus](https://addons.mozilla.org/zh-CN/firefox/addon/adblock-plus/)
- [Octotree](https://addons.mozilla.org/zh-CN/firefox/addon/octotree/)
- [React Developer Tools](https://addons.mozilla.org/zh-CN/firefox/addon/react-devtools/)
- [Vue.js devtools](https://addons.mozilla.org/zh-CN/firefox/addon/vue-js-devtools/)

## 语言

- [typescript](https://www.typescriptlang.org/) - 必学，要会用
- [reason](https://reasonml.github.io/) - 观望
- [elm](https://elm-lang.org/) - 观望
- [bucklescript](https://bucklescript.github.io/) - 观望

## 文档

- [vuepress](https://vuepress.vuejs.org/zh/)
- [hexo](https://hexo.io/)

## 设计

- [Ant Design](https://ant-design.gitee.io/docs/spec/introduce-cn)
- [Material Design](https://material.io/)
- [Fluent Design](https://www.microsoft.com/design/fluent/)
- [Primer Design](https://primer.style/)
- [Tea Design](https://tea-design.github.io/)

## 项目体系

- [np](https://github.com/sindresorhus/np) - 更好的 npm publish，自动 push，自动 tag 等
- [nvm](https://github.com/nvm-sh/nvm) - 管理 node 版本，windows 版见 [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [npm](https://github.com/npm/cli)
- [yarn](https://classic.yarnpkg.com/zh-Hans) - 目前来看，用 v1 比较好，v2 坑比较多
- [npm-check](https://github.com/dylang/npm-check) - 检查依赖，建议配合 yarn upgrade-interactive 使用
- [lerna](https://github.com/lerna/lerna) - monorepo 管理
  - [lerna-changelog](https://github.com/lerna/lerna-changelog) - 为 lerna 项目自动生成 changelog
- formatter
  - [prettier](https://prettier.io/) - 检查 html/js/jsx/ts/tsx/css/less/scss/styled-components/styled-jsx/graphql/vue/react 等代码的格式
  - [eslint](https://eslint.org/) - 检查 js/jsx/ts/tsx/vue 代码的语法，可附带检查格式
    - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
    - [eslint-config-standard](https://github.com/standard/eslint-config-standard)
    - [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react)
    - [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
    - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
    - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
    - [@vue/eslint-config-prettier](https://github.com/vuejs/eslint-config-prettier)
    - [@vue/eslint-config-standard](https://github.com/vuejs/eslint-config-standard)
    - [@vue/eslint-config-airbnb](https://github.com/vuejs/eslint-config-airbnb)
    - [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)
    - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
  - [prettyhtml](https://github.com/Prettyhtml/prettyhtml) - 检查 html 代码的格式，针对 html 的 prettier 增强版
  - [stylelint](https://stylelint.io/) - 检查 scss/sass/less 代码的格式与语法
    - [stylelint-order](https://github.com/hudochenkov/stylelint-order)
    - [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) - bootstrap 预设的 scss stylelint 配置
    - [stylelint-formatter-pretty](https://www.npmjs.com/package/stylelint-formatter-pretty)
  - stylus 可参考 [stylus-supremacy](https://thisismanta.github.io/stylus-supremacy/) 和 [stylint](https://github.com/SimenB/stylint)
  - sass 可参考 [sass-formatter](https://github.com/TheRealSyler/sass-formatter)
- [commitlint](https://commitlint.js.org/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://github.com/typicode/husky)
  - [yorkie](https://github.com/yyx990803/yorkie)
- [cross-env](https://github.com/kentcdodds/cross-env) - 跨平台的环境变量声明
- [rimraf](https://github.com/isaacs/rimraf) - 在命令行中删除文件
- git
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
  - [purgecss](https://purgecss.com/) - 移除不用的 css，可以结合小程序使用
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
  - [antd-vue](https://www.antdv.com/)
  - [viewui](https://www.iviewui.com/docs/introduce)
  - [buefy](https://github.com/buefy/buefy/)
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
  - [nuxt](https://zh.nuxtjs.org/guide/installation/)
  - [vue-cli](https://cli.vuejs.org/zh/guide/)
  - [vapper](https://vapperjs.org/zh/)
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
- 核心知识点
  - 初始化流程
  - 事件机制
  - virtual dom
  - diff 算法
  - 异步更新策略
  - 双向绑定原理
  - 响应式原理
  - 模板编译器原理
  - 指令原理
  - 插槽原理
  - vue-router 原理及实现
  - vuex 原理及实现
  - 组件概念，组件化思想和组件化机制
  - 组件通信策略
  - 组件配置，构造函数和实例的关系
  - 渲染函数和挂载方法的本质和应用
  - 递归组件
  - 函数式组件
  - 组件测试
  - 项目配置和规范
  - 权限控制
  - 路由和导航菜单的动态生成
  - 路由懒加载
  - 路由配置模块化
  - 服务、插件封装
  - 模拟请求和请求代理
  - 项目测试
  - SSR 原理
  - SSR 服务端集成 koa/egg
  - SSR 数据预取和状态管理
  - SSR 客户端激活
  - SSR 打包和部署事项
  - nuxt 和 vapper 的使用

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
  - [material-ui](https://material-ui.com/zh/)
  - [react-suite](https://rsuitejs.com/)
  - [antd](https://ant.design/docs/react/introduce-cn)
  - [blueprint](https://blueprintjs.com/docs/)
  - [react-rainbow](https://react-rainbow.io/)
  - [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
  - [semantic-ui-react](https://react.semantic-ui.com/)
  - [fluent-ui-react](https://developer.microsoft.com/en-us/fabric/#/components)
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
  - [next](https://nextjs.org/docs/getting-started)
  - [umi](https://umijs.org/zh-CN)
    - [@umijs/plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun) - 微前端解决方案
  - [create-react-app](https://create-react-app.dev/) 无 ssr 相关说明
  - [gatsby](https://www.gatsbyjs.com/)
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
- 核心知识点
  - createElement，render，Component
  - virtual dom
  - diff 算法
  - fiber 架构，任务调度，渲染与更新
  - suspense
  - lazy
  - 生命周期和 hooks
  - react-router 原理及实现
  - redux 和 redux-react 原理及实现
  - mobx 和 mobx-react 原理及实现
  - 组件概念，组件化思想和组件化机制
  - 高阶组件 HOC
  - 类组件
  - 递归组件
  - 函数式组件
  - 组件通信策略
  - 组件测试
  - 弹窗组件实现
  - 项目配置和规范
  - 权限控制
  - 路由和导航菜单的动态生成
  - 路由懒加载
  - 路由配置模块化
  - 服务、插件封装
  - 模拟请求和请求代理
  - 项目测试
  - SSR 原理
  - SSR 服务端集成 koa/egg
  - SSR 数据预取和状态管理
  - SSR 客户端激活
  - SSR 打包和部署事项
  - umi 和 next 的使用

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
  - 核心知识点
    - 运行与调试 debug/nodemon/jest
    - 流程控制 promise/async+await，事件循环机制
    - 异步 io promisify/buffer/stream
    - 网络编程 socket/http/websocket
    - 鉴权 jwt/oauth/单点登录
    - koa 原理和实现 上下文/getter+setter
    - MVC
    - egg 原理
    - swagger
    - restful api 实现
    - 表单校验
    - 生命周期函数
    - 插件
    - 文件上传功能
    - 代码模板拉取
    - 命令行界面定制
    - 依赖自动安装
    - 服务启动
    - 路由实现
    - http 爬虫工具和无头浏览器爬虫 pupteer
    - mysql，mongodb，sql server
    - redis 数据结构，数据一致性，分布式锁，订阅发布模式，备份与恢复
    - graphql 概念与操作

node.js 一般用来做服务器端的中间层。

## 在线工具

- [国外在线正则](https://regex101.com/)
- [国内在线正则](http://tools.jb51.net/regex/create_reg)
- [逻辑图](https://www.processon.com/)
- [兼容性查询 caniuse](https://caniuse.com/)
- [兼容性查询 css](https://www.campaignmonitor.com/css/)
- [浏览器支持列表](https://browserl.ist/)
- [全网音乐免费下载](https://music.sonimei.cn/)
- [UZER.ME](https://uzer.me/) - 云端超级应用空间
- [nicetool](https://www.nicetool.net/) - 简单易用的工具集合
- [tool](https://tool.lu/) - 程序员工具箱
- [BigJPG](https://bigjpg.com/) - 人工智能图片放大
- [SmallPDF](https://smallpdf.com/cn/) - 在线 PDF 工具
- [Convertio](https://convertio.co/zh/) - 在线格式转换
- [在线格式转换](https://www.alltoall.net/)

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
- [fontbook](https://fontbook.wiki/) - 免费商用字体站

## 参考

- [sorrycc/awesome-f2e-libs](https://github.com/sorrycc/awesome-f2e-libs)
