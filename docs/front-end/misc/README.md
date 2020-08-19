# 杂项

这个部分覆盖了很多方面，建议把这个部分当成速查表来使用。

## 基本概念

- [六个基本概念](https://www.zhihu.com/question/304757674/answer/546374749)

## 浏览器开发者工具

- [chrome](https://developers.google.cn/web/tools/chrome-devtools)
- [firefox](https://developer.mozilla.org/en-US/docs/Tools)
- [edge(chromium)](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium)

## 文档搭建

- [vuepress](https://vuepress.vuejs.org/zh/) - 静态网站生成器
- [dumi](https://d.umijs.org/) - 为组件开发场景而生的文档工具
- [hexo](https://hexo.io/) - 快速、简洁且高效的博客框架

## 开发语言

- [typescript](https://www.typescriptlang.org/)
- [reason](https://reasonml.github.io/)
- [elm](https://elm-lang.org/)
- [bucklescript](https://bucklescript.github.io/)

## 设计

- [Fiori Design](https://experience.sap.com/fiori-design-web/)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Lightning Design System](https://lightningdesignsystem.com/getting-started/)
- [Material Design](https://material.io/)
- [Atomic Design](https://atomicdesign.bradfrost.com/)
  - [中文总结](https://www.uisdc.com/atomic-design-theory)
- [Ant Design](https://ant-design.gitee.io/docs/spec/introduce-cn)
- [Fluent Design](https://www.microsoft.com/design/fluent/)
- [DevUI Design](https://devui.design/)
- [Primer Design](https://primer.style/)
- [Eva Design](https://eva.design/)
- [About Face 4: 交互设计精髓](https://book.douban.com/subject/26642302/)
- [Web 界面设计](https://book.douban.com/subject/3821157/)
- [界面设计模式](https://book.douban.com/subject/25716088/)
- [写给大家看的设计书](https://book.douban.com/subject/3323633/)
- [设计心理学](https://book.douban.com/subject/26742341/)
- [Web 表单设计](https://book.douban.com/subject/4886100/)

## 编程用字体

- [Menlo](https://www.cufonfonts.com/font/menlo)
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro/releases)
- [Jetbrains Mono](https://www.jetbrains.com/lp/mono/)
- [Sarasa Mono T SC](https://github.com/be5invis/Sarasa-Gothic/releases)
- [Fira Code](https://github.com/tonsky/FiraCode/releases)

## 免费可商用字体

- [70+ Best Free Fonts for Designers – Free for Commercial Use in 2020](https://www.websiteplanet.com/blog/best-free-fonts/)
- [Alibaba fonts](https://aifont.alicdn.com/AlibabaPuHuiTi/AlibabaPuHuiTiAll.zip)
- [免费可商用字体指南](https://zhuanlan.zhihu.com/p/69175576)
- [免费可商用中文字体合集（较新）](https://www.uisdc.com/2020-free-font)
- [免费可商用中文字体合集](https://www.uisdc.com/200-models-free-commercial-fonts)

## 开源图标

- [icones](https://github.com/antfu/icones#readme)
- [iconfont](https://www.iconfont.cn/)
- [bootstrap-icons](https://icons.getbootstrap.com/)
- [material-design-icons](https://materialdesignicons.com/)
- [material-icons](https://google.github.io/material-design-icons/)
- [remix-icons](https://remixicon.com/)
- [ionicons](https://ionicons.com/)
- [octicons](https://primer.style/octicons/)
- [flaticon](https://www.flaticon.com/)
- [fontawesome](https://fontawesome.com/)
- [ant-design-icons](https://github.com/ant-design/ant-design-icons)
- [coreui-icons](https://icons.coreui.io/icons/)

## 项目体系

- [yeoman](https://yeoman.io/) - 构筑专属的 cli，也可以考虑 [oclif](https://oclif.io/)
- [np](https://github.com/sindresorhus/np#readme) - 更好的 npm publish，自动 push，自动 tag 等
- [release](https://github.com/zeit/release#readme) - 自动生成 changelog
- [nvm](https://github.com/nvm-sh/nvm#readme) - 管理 node 版本，windows 版见 [nvm-windows](https://github.com/coreybutler/nvm-windows#readme)
- [npm](https://github.com/npm/cli#readme) - npm（复读）
  - [yarn](https://classic.yarnpkg.com/zh-Hans) - 包管理器，目前用 v1 比较好
  - [pnpm](https://pnpm.js.org/) - 包管理器
- [cross-env](https://github.com/kentcdodds/cross-env#readme) - 跨平台的环境变量声明
- [rimraf](https://github.com/isaacs/rimraf#readme) - 跨平台在命令行中删除文件
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates#readme) - 检查、升级依赖，也可以考虑`yarn upgrade-interactive`和 [npm-check](https://github.com/dylang/npm-check#readme)
- [lerna](https://github.com/lerna/lerna#readme) - monorepo 管理
  - [lerna-changelog](https://github.com/lerna/lerna-changelog#readme) - 为 lerna 项目自动生成 changelog
- formatter & linter
  - [prettier](https://prettier.io/) - 检查大量代码格式，建议用于 stylelint、eslint 等工具之前
    - [@modyqyw/prettier-config](https://github.com/MillCloud/prettier-config#readme)
  - [eslint](https://eslint.org/) - 检查 js/jsx/ts/tsx/vue 代码的语法，可附带检查格式，建议用于 prettier 之后
    - prettier
      - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
      - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)
    - airbnb
      - [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#readme)
      - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#readme)
      - [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript#readme)
    - standard
      - [eslint-config-standard](https://github.com/standard/eslint-config-standard#readme)
      - [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript#readme)
      - [eslint-config-standard-react](https://github.com/standard/eslint-config-standard-react#readme)
    - typescript-eslint
      - [typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#readme)
    - alloy
      - [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy#readme)
    - react
      - [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app#readme)
    - vue
      - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue#readme)
      - [@vue/eslint-config-standard](https://github.com/vuejs/eslint-config-standard#readme)
      - [@vue/eslint-config-airbnb](https://github.com/vuejs/eslint-config-airbnb#readme)
      - [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript#readme)
    - @modyqyw
      - [@modyqyw/eslint-config](https://github.com/MillCloud/eslint-config#readme)
      - [@modyqyw/eslint-config-vue](https://github.com/MillCloud/eslint-config-vue#readme)
      - [@modyqyw/eslint-config-vue-ts](https://github.com/MillCloud/eslint-config-vue-ts#readme)
      - [@modyqyw/eslint-config-react](https://github.com/MillCloud/eslint-config-react#readme)
  - [prettyhtml](https://github.com/Prettyhtml/prettyhtml#readme) - 检查 html 代码的格式，针对 html 的 prettier 增强版，建议用于 prettier 之后，专门处理 html 文件，vue 文件中的`<template></template>`部分直接用 eslint-plugin-vue 的 recommended 配置检查
  - [stylelint](https://stylelint.io/) - 检查 css/less/scss 代码的格式与语法，建议用于 prettier 之后
    - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard#readme)
    - [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended#readme)
    - [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss#readme)
    - [stylelint-order](https://github.com/hudochenkov/stylelint-order#readme)
    - [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap#readme) - bootstrap 预设的 scss stylelint 配置
    - [stylelint-formatter-pretty](https://github.com/Dreamseer/stylelint-formatter-pretty#readme)
    - [stylelint-prettier](https://github.com/prettier/stylelint-prettier#readme)
    - @modyqyw
      - [@modyqyw/stylelint-config-css](https://github.com/MillCloud/stylelint-config-css#readme)
      - [@modyqyw/stylelint-config-less](https://github.com/MillCloud/stylelint-config-less#readme)
      - [@modyqyw/stylelint-config-scss](https://github.com/MillCloud/stylelint-config-scss#readme)
  - [sass-formatter](https://github.com/TheRealSyler/sass-formatter#readme) - 检查 sass 代码
  - [stylus-supremacy](https://thisismanta.github.io/stylus-supremacy/) - 检查 stylus 代码，也可以考虑 [stylint](https://github.com/SimenB/stylint#readme)
  - [commitlint](https://commitlint.js.org/) - 检查提交格式
    - [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint#readme)
- [commitizen](https://github.com/commitizen/cz-cli#readme) - 常与 commitlint 配合使用，自动生成提交内容
- [lint-staged](https://github.com/okonet/lint-staged#readme) - 自动跑校验，如 prettier 和 eslint
- [husky](https://github.com/typicode/husky#readme) - 简单地使用 git 钩子
  - [yorkie](https://github.com/yyx990803/yorkie#readme) - husky 简化版
- ci/cd
  - [flow-ci](https://flow.ci/)
  - [travis-ci](https://travis-ci.org/)
  - [circle-ci](https://circleci.com/)
  - [jenkins](https://www.jenkins.io/zh/)
  - [github-ci](https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration)
  - [gitlab-ci](https://docs.gitlab.com/ee/ci/)
- [LambdaTest](https://www.lambdatest.com/) - 在线测试工具，在 2000+ 浏览器和操作系统上进行实时互动和自动跨浏览器在线测试
- [eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md#readme) - 为手机网页设计的调试面板
- [vConsole](https://github.com/Tencent/vConsole) - 移动端网页开发者工具
- git
  - [pro git](https://git-scm.com/book/en/v2)

## 编译打包

- [babel](https://babeljs.io/) - js 转译器，转换浏览器未支持的 js 特性，搭配 webpack 使用时用 babel-loader 做转译
  - [babel 教程](https://www.jiangruitao.com/docs/babel/)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
  - [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - 常与 @babel/preset-env 搭配使用
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
  - [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#readme)
  - [core-js](https://github.com/zloirock/core-js) - js 模块化标准库，包含了大量 polyfill，常与 @babel/preset-env 搭配使用
  - [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime) - 用于 async 函数的独立运行时，常与 @babel/preset-env 搭配使用
- [bluebird](https://github.com/petkaantonov/bluebird) - 支持 ie8 的 promise polyfill
- [postcss](https://postcss.org/) - css 的 babel
  - [autoprefixer](https://github.com/postcss/autoprefixer#readme) - 自动补全 css 前缀
  - [postcss-preset-env](https://github.com/csstools/postcss-preset-env#readme) - 转换 css，添加 polyfill
  - [cssnano](https://cssnano.co/) - 压缩 css
  - [purgecss](https://purgecss.com/) - 移除不用的 css
- [webpack](https://webpack.js.org/) - v4，模块打包器，一般用于打包项目，可参考 [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack)
  - [dev-server](https://webpack.js.org/configuration/dev-server/) - 快速开发
  - [optimization](https://webpack.js.org/configuration/optimization/) - 配置优化，包括 split chunks 等
  - [webpack-merge](https://github.com/survivejs/webpack-merge#readme) - 合并配置，也可以考虑 [webpack-chain](https://github.com/neutrinojs/webpack-chain#readme)
  - plugins
    - [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin) - 显示更友好的提示信息
    - [webpack-bar](https://github.com/nuxt/webpackbar) - 显示进度条
    - [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - bundle 分析
    - [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin) - 统计 webpack 各阶段耗时
    - [terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/) - 使用 [terser](https://github.com/terser/terser) 压缩 js，代替 uglify-webpack-plugin
    - [esbuild-webpack-plugin](https://github.com/sorrycc/esbuild-webpack-plugin) - 使用 [esbuild](https://github.com/evanw/esbuild#readme) 压缩 js
    - [dll-plugin](https://webpack.js.org/plugins/dll-plugin/) - webpack 内置
    - [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) - 构建开始前移除上一次的构建产物
    - [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/) - 指定承载 bundle 的 html 文件
      - [inline-chunk-html-plugin](https://github.com/pikadun/InlineChunkHtmlPlugin#readme) - [html-inline-css-webpack-plugin](https://github.com/DustinJackson/html-webpack-inline-source-plugin#readme) 的替代品，html-webpack-plugin 的扩展插件，允许内联 js 代码
    - [copy-webpack-plugin](https://webpack.js.org/plugins/copy-webpack-plugin/) - 将本身存在的单个文件或整个目录复制到构建目录
    - [compression-webpack-plugin](https://webpack.js.org/plugins/compression-webpack-plugin/) - 压缩 asset
    - [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) - 分离 css 文件，适用于生产模式
    - [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin#readme) - 压缩 css
    - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin) - 打包时检查样式
    - [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin) - 第一次打包正常速度，之后加速 90%，没有维护，建议不要再用了
    - [commons-chunk-plugin](https://webpack.js.org/plugins/commons-chunk-plugin/) - 打包 MPA 时抽离公共 js 文件，webpack 4 建议使用`optimization.splitChunks`作为代替，建议不要再用了
  - loaders
    - [thread-loader](https://webpack.js.org/loaders/thread-loader/) - 放置在这个 loader 后面的 loader 会装载到 worker pool 中运行，有一定限制条件，代替 happy-pack
    - [cache-loader](https://webpack.js.org/loaders/cache-loader/) - 类似于 thread-loader，该 loader 适用于性能开销较大的 loader
    - [raw-loader](https://webpack.js.org/loaders/raw-loader/) - 允许文件以字符串形式引入
    - [url-loader](https://webpack.js.org/loaders/url-loader/) - 进行图片字体等文件的打包，允许转换成 base64 编码数据
    - [file-loader](https://webpack.js.org/loaders/file-loader/) - 进行图片字体等文件的打包
    - [babel-loader](https://webpack.js.org/loaders/babel-loader/) - 使用 babel 和 webpack 编译 js 文件
    - [ts-loader](https://github.com/TypeStrong/ts-loader) - 解析 ts
    - [style-loader](https://webpack.js.org/loaders/style-loader/) - 把 css 插入到 dom 中，适用于开发模式
    - [css-loader](https://webpack.js.org/loaders/css-loader/) - 解析 css `@import`和`url()`，可以启用 css module
    - [less-loader](https://webpack.js.org/loaders/less-loader/) - 解析 less 文件成 css 文件
    - [sass-loader](https://webpack.js.org/loaders/sass-loader/) - 解析 sass/scss 文件成 css 文件
    - [postcss-loader](https://webpack.js.org/loaders/postcss-loader/) - 使用 postcss 处理 css 文件
    - [raw-loader](https://github.com/webpack-contrib/raw-loader#readme) - 允许以字符串形式导入文件
    - [eslint-loader](https://webpack.js.org/loaders/eslint-loader/) - 代码校验
- [snowpack](https://www.snowpack.dev/) - 使用原生 es module 的构建工具，可参考 [awesome-snowpack](https://github.com/rajasegar/awesome-snowpack)
- [vite](https://github.com/vitejs/vite#readme) - 使用原生 es module 的开发构建工具
- [rollup](https://rollupjs.org/guide/zh/) - 模块构建器，一般用于打包库，可参考 [awesome-rollup](https://github.com/rollup/awesome)
- [parcel](https://v2.parceljs.org/) - 速度快，配置少的构建工具，可参考 [awesome-parcel](https://github.com/parcel-bundler/awesome-parcel)

## 工具集

- [lodash](https://lodash.com/)
- [xe-utils](https://x-extends.gitee.io/xe-utils/)
- [futil-js](https://github.com/smartprocure/futil-js#readme)
- [moment](https://momentjs.com/) - 日期时间处理
- [dayjs](https://dayjs.gitee.io/zh-CN/) - 日期时间处理
- [date-fns](https://date-fns.org/) - 日期时间处理
- [history](https://github.com/ReactTraining/history) - 处理访问历史，比较底层的库
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp) - 将路径字符串转换成正则，比较底层的库
- [qs](https://www.npmjs.com/package/qs) - 增加了安全性的查询字符串解析和字符串化库
- [query-string](https://www.npmjs.com/package/query-string) - 解析和串联 URL 查询字符串

一般用 lodash + dayjs 就能解决普遍在开发中遇到的问题，有条件的可以去学一下源码。不用 moment 的原因是 moment 默认引入太大了，需要手动压缩体积。不用 date-fns 的原因是它没有中文文档，对国内新手不友好。

## 原生及相关生态

- ui
  - [normalize](https://github.com/necolas/normalize.css) - 重置 css 样式
    - [ress](https://github.com/filipelinhares/ress) - 基于 normalize.css 增强，重置 css 样式
  - [masonry](https://masonry.desandro.com/) - 层叠网格布局插件
  - [bootstrap](https://getbootstrap.com/) - ui 库，要适配 ie8 需要使用 v3
    - [mdbootstrap](https://mdbootstrap.com/) - material design + bootstrap
    - [bootstrap-table](https://bootstrap-table.com/) - 搭配 bootstrap 使用的表格组件，要搭配 bootstrap v3 要使用[旧版](https://bootstrap-table-docs3.wenzhixin.net.cn/zh-cn/home/)
  - [tailwindcss](https://tailwindcss.com/)
  - [bulma](https://bulma.io/documentation/)
  - [tachyons](https://tachyons.io/)
  - [primer](https://primer.style/css)
  - [uikit](https://getuikit.com/)
- 衍生
  - [polyfill.io](https://polyfill.io/v3/) - 在线自动引入 polyfill
  - [jquery](https://jquery.com/) - 要适配 ie8 需要使用 v1
  - [bluebird](http://bluebirdjs.com/docs/getting-started.html) - promise polyfill
  - [axios](https://github.com/axios/axios#readme) - 请求库，用到了 promise
  - [superagent](https://github.com/visionmedia/superagent#readme) - 请求库
  - [echarts](https://www.echartsjs.com/zh/index.html) - 图表库
  - [leaflet](https://leafletjs.com/) - 地图库
  - [aplayer](https://aplayer.js.org/) - h5 音频播放器
  - [dplayer](https://dplayer.js.org/) - h5 视频播放器
  - [screenfull](https://github.com/sindresorhus/screenfull.js/#readme) - 全屏
  - [file-saver](https://github.com/eligrey/FileSaver.js#readme) - 文件保存
  - [stream-saver](https://github.com/jimmywarting/StreamSaver.js#readme) - 文件保存
  - [hammer](http://hammerjs.github.io/) - 触摸手势
  - [slick](https://kenwheeler.github.io/slick/) - 走马灯
  - [markdown-it](https://github.com/markdown-it/markdown-it) - markdown 解析
  - [qiankun](https://qiankun.umijs.org/zh/) - 微前端解决方案
  - [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) - 模板
  - [vanilla-web-projects](https://github.com/bradtraversy/vanillawebprojects) - 使用 html5、css 和 js 构建的迷你项目示例

## typescript

- 教程
  - [入门教程](https://ts.xcatliu.com/basics)
  - [官方教程](https://www.typescriptlang.org/docs/home.html)
  - [深入理解 typescript](https://jkchao.github.io/typescript-book-chinese/)
  - [从零开始配置 TypeScript 项目](https://juejin.im/post/6856410900577026061)

## vue 及相关生态

- 教程
  - [中文文档](https://cn.vuejs.org/v2/guide/)
  - [英文文档](https://vuejs.org/v2/guide/)
- [devtools](https://github.com/vuejs/vue-devtools)
- 路由
  - [vue-router](https://router.vuejs.org/zh/)
- 状态管理
  - [vuex](https://vuex.vuejs.org/zh/)
- 插件
  - [qiankun](https://github.com/F-loat/vue-cli-plugin-qiankun) - 微前端解决方案
- ui
  - [vuetify](https://vuetifyjs.com/zh-Hans/)
  - [element](https://element.eleme.cn/#/zh-CN/component/installation) - 已经没有维护人员，慎重考虑
    - [umy-ui](https://github.com/u-leo/umy-ui) - el-table 增强版
    - [kkbjs-element](https://github.com/kkbjs/element3#readme) - 对应 vue 3 版本的 element，开课吧 fork 修改
  - [antd-vue](https://www.antdv.com/)
  - [hey-ui](https://www.heyui.top/)
  - [bootstrap-vue](https://bootstrap-vue.js.org/docs)
  - [viewui](https://www.iviewui.com/docs/introduce)
  - [buefy](https://github.com/buefy/buefy/)
  - [vant](https://youzan.github.io/vant/#/zh-CN/)
  - [mand-mobile](https://didi.github.io/mand-mobile/)
  - [nut-ui](http://nutui.jd.com/#/intro)
  - [zarm-vue](https://zhongantech.github.io/zarm-vue/#/documents/quick-start)
  - [更多](https://github.com/topics/vue)
- cli
  - [nuxt](https://zh.nuxtjs.org/guide/installation/)
  - [vue-cli](https://cli.vuejs.org/zh/guide/) - 需要手动支持 ssr
  - [vapper](https://vapperjs.org/zh/)
- app
  - uni-app
    - [中文文档](https://uniapp.dcloud.io/)
    - 路由
      - [自带路由](https://uniapp.dcloud.io/frame?id=%e8%b7%af%e7%94%b1)
    - 状态管理
      - [vuex](https://vuex.vuejs.org/zh/)
    - ui
      - [uview-ui](https://uviewui.com/)
      - [thor-ui](https://thorui.cn/)
      - [uni-ui](https://github.com/dcloudio/uni-ui#readme)
      - [color-ui](https://github.com/weilanwl/ColorUI#reamd)
      - [grace-ui](https://grace.hcoder.net/) - 收费
  - chameleon
    - [中文文档](https://cml.js.org/)
    - 路由
      - [自带路由](https://cml.js.org/docs/config.html#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)
    - 状态管理
      - [chameleon-store](https://cml.js.org/docs/store.html)
    - ui
      - [cml-ui](https://cml.js.org/components/expand.html)
  - weex
    - [中文文档](https://weex.apache.org/zh/)
  - native-script
    - [英文文档](https://nativescript.org/)
  - ionic
    - [英文文档](https://ionicframework.com/docs)
- 小程序
  - uni-app
    - [中文文档](https://uniapp.dcloud.io/)
    - 路由
      - [自带路由](https://uniapp.dcloud.io/frame?id=%e8%b7%af%e7%94%b1)
    - 状态管理
      - [vuex](https://vuex.vuejs.org/zh/)
    - ui
      - [uview-ui](https://uviewui.com/)
      - [thor-ui](https://thorui.cn/)
      - [uni-ui](https://github.com/dcloudio/uni-ui#readme)
      - [color-ui](https://github.com/weilanwl/ColorUI#reamd)
      - [grace-ui](https://grace.hcoder.net/) - 收费
  - chameleon
    - [中文文档](https://cml.js.org/)
    - 路由
      - [自带路由](https://cml.js.org/docs/config.html#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)
    - 状态管理
      - [chameleon-store](https://cml.js.org/docs/store.html)
    - ui
      - [cml-ui](https://cml.js.org/components/expand.html)
- 衍生
  - [用 vue 写 h5 项目的基本结构与依赖整理，封装常用工具，快速开发 h5 的脚手架](https://github.com/yujinpan/h5-vue#readme)
  - [vxe-table](https://github.com/xuliangzhan/vxe-table) - 表格解决方案
  - [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) - 后台管理系统
  - [d2-admin](https://github.com/d2-projects/d2-admin) - 后台管理系统
  - [vue-admin-beautiful](https://github.com/chuzhixin/vue-admin-beautiful) - 后台管理系统
  - [vuetify-material-dashboard](https://github.com/creativetimofficial/vuetify-material-dashboard) - 后台管理系统
  - [vuetify-admin-dashboard](https://github.com/ClintOxx/vuetify-admin-dashboard) - 后台管理系统
  - [vue2-elm](https://github.com/bailicangdu/vue2-elm) - 仿饿了么
  - [quasar](https://quasar.dev/) - 终极解决方案
  - [swrv](https://github.com/Kong/swrv) - 用于数据获取
- 进阶
  - [vue 3 组合式 API 征求意见稿](https://composition-api.vuejs.org/zh/)
  - [一张图理清 Vue 3.0 的响应式系统](https://juejin.im/post/5d9da45af265da5b8072de5d)
  - [vue 2.3 源码分析](https://github.com/answershuto/learnVue)
  - [vue 2.5 源码分析](https://github.com/ustbhuangyi/vue-analysis)
  - [vue 3 生态技术内幕](https://www.yuque.com/woniuppp/vue3)
  - [vue-cli 4 配置参考](https://github.com/staven630/vue-cli4-config)
  - 模板编译器 vue-template-compiler 原理
  - 响应式 reactive 系统原理，尤其是双向绑定
  - virtual dom，diff 算法和异步更新策略
  - 事件机制
  - 指令原理
  - 插槽原理
  - 渲染函数和挂载方法的本质和应用
  - vue-router 原理及实现
  - vuex 原理及实现
  - 组件概念，组件化思想，组件化机制，组件通信策略
  - 组件配置，构造函数和实例的关系
  - 函数式组件
  - 递归组件
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

- 教程
  - [react.js 小书](https://github.com/huzidaha/react-naive-book)
  - [中文文档](https://zh-hans.reactjs.org/docs/getting-started.html)
  - [react for everyone](https://github.com/Asabeneh/React-For-Everyone)
  - [英文文档](https://reactjs.org/docs/getting-started.html)
  - [react-training](https://reacttraining.com/)
  - [road to react](https://www.roadtoreact.com/)
- [devtools](https://github.com/facebook/react/tree/master/packages/react-devtools)
- 路由
  - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
- 状态管理
  - [context](https://zh-hans.reactjs.org/docs/context.html) + [hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
  - [unstated-next](https://github.com/jamiebuilds/unstated-next/blob/master/README-zh-cn.md)
  - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/)
  - [rematch](https://rematch.github.io/rematch/)
  - [mobx](https://mobx.js.org/) + [mobx-react](https://mobx-react.js.org/)
- ui
  - [zent](https://youzan.github.io/zent/zh/guides/install)
  - [blueprint](https://blueprintjs.com/docs/)
  - [react-suite](https://rsuitejs.com/)
  - [antd](https://ant.design/docs/react/introduce-cn) - 小心圣诞彩蛋
  - [material-ui](https://material-ui.com/zh/)
  - [react-rainbow](https://react-rainbow.io/)
  - [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
  - [semantic-ui-react](https://react.semantic-ui.com/)
  - [fluent-ui-react](https://developer.microsoft.com/en-us/fabric/#/components)
  - [react-md](https://react-md.dev/v1/)
  - [shineout](https://shine.wiki/)
  - [zhui](https://zhui-team.github.io/zhui/)
  - [antd-mobile](https://mobile.ant.design/docs/react/introduce-cn)
  - [zarm](https://zarm.design/#/components/quick-start)
  - [react-desktop](http://reactdesktop.js.org/)
  - [shards](https://designrevision.com/docs/shards-react/getting-started)
  - [prime](https://primefaces.org/primereact/showcase/#/setup)
  - [chakra-ui](https://chakra-ui.com/)
  - [react-spectrum](https://react-spectrum.adobe.com/)
  - [更多](https://github.com/topics/react)
- cli
  - [next](https://nextjs.org/docs/getting-started)
    - [blitz](https://github.com/blitz-js/blitz) - 基于 next 再封装，全栈框架
  - [umi](https://umijs.org/zh-CN) - 带微前端解决方案
  - [ice](https://ice.work/) - 带微前端解决方案
  - [create-react-app](https://create-react-app.dev/) - 无 ssr 相关说明
  - [gatsby](https://www.gatsbyjs.com/)
- app
  - react-native
    - [英文文档](https://facebook.github.io/react-native/)
    - [中文文档](https://reactnative.cn/)
    - 路由
      - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
      - [react-navigation](https://reactnavigation.org/)
    - 状态管理
      - [context](https://zh-hans.reactjs.org/docs/context.html) + [hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
      - [unstated-next](https://github.com/jamiebuilds/unstated-next/blob/master/README-zh-cn.md)
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/)
      - [rematch](https://rematch.github.io/rematch/)
      - [mobx](https://mobx.js.org/) + [mobx-react](https://mobx-react.js.org/)
    - ui
      - [react-native-elements](https://react-native-elements.github.io/react-native-elements/docs/overview.html)
      - [react-native-ui-kitten](https://akveo.github.io/react-native-ui-kitten/)
      - [teaset](https://github.com/rilyu/teaset#readme)
      - [antd-rn](https://rn.mobile.ant.design/docs/react/introduce-cn)
      - [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn#readme)
      - [mand-mobile-rn](https://didi.github.io/mand-mobile-rn/?path=/story/mand-mobile-rn--%E5%BF%AB%E9%80%9F%E6%8E%A5%E5%85%A5)
      - [react-native-material-ui](https://github.com/xotahal/react-native-material-ui#readme)
      - [react-native-material-kit](https://github.com/xinthink/react-native-material-kit#readme)
      - [react-native-ui-lib](https://wix.github.io/react-native-ui-lib/)
      - [native-base](https://nativebase.io/)
    - cli
      - [expo](https://docs.expo.io/)
  - ionic
    - [英文文档](https://ionicframework.com/docs)
- 小程序
  - taro
    - [中文文档](https://taro-docs.jd.com/taro/docs/README.html)
    - 路由
      - [自带路由](https://taro-docs.jd.com/taro/docs/router/)
    - 状态管理
      - [context](https://zh-hans.reactjs.org/docs/context.html) + [hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/)，详见[文档](https://taro-docs.jd.com/taro/docs/redux.html)
    - ui
      - [taro-ui](https://taro-ui.jd.com/#/docs/introduction)
      - [color-ui](https://yinliangdream.github.io/mp-colorui-doc/home/introduce.html#taro)
      - [@tarojsx/ui](https://github.com/tarojsx/ui#readme)
  - remax
    - [中文文档](https://remaxjs.org/)
    - 路由
      - 自带路由
    - 状态管理
      - [context](https://zh-hans.reactjs.org/docs/context.html) + [hooks](https://zh-hans.reactjs.org/docs/hooks-intro.html)
      - [unstated-next](https://github.com/jamiebuilds/unstated-next/blob/master/README-zh-cn.md)
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/)
      - [rematch](https://rematch.github.io/rematch/)
    - ui
      - [anna](https://annasearl.github.io/anna-remax-ui/#/)
  - rax
    - [中文文档](https://rax.js.org/)
    - 路由
      - [自带路由](https://rax.js.org/docs/guide/routes)
    - 状态管理
      - [rax-redux](https://github.com/alibaba/rax/tree/master/packages/rax-redux#readme)
    - ui
      - [官方提供](https://rax.js.org/docs/components/introduce)
- 衍生
  - [ant-design-pro](https://pro.ant.design/index-cn) - 后台管理系统
  - [react-admin](https://github.com/duxianwei520/react) - 后台管理系统
  - [react-material-admin](https://github.com/flatlogic/react-material-admin) - 后台管理系统
  - [emotion](https://emotion.sh/) - css-in-js
  - [styled-components](https://styled-components.com/) - css-in-js
  - [react-virtualized](https://github.com/bvaughn/react-virtualized) - 高效渲染大型列表和表格数据的 react 组件
  - [preact](https://preactjs.com/) - 类 react 库
  - [anu](https://github.com/RubyLouvre/anu) - 能运行到 ie8 的 react，带[脚手架](https://gitee.com/menhal/React_IE8_boilerplate)
  - [fre](https://github.com/yisar/fre) - 原理类似 vue 3 的类 react 库
  - [inferno](https://infernojs.org/) - 类 react 库
  - [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme) - 用于创建可重用的 react 库的 cli
  - [formik](https://github.com/jaredpalmer/formik#readme) - 表格解决方案
  - [swr](https://swr.vercel.app/) - 用于数据获取的 hook
  - [react-query](https://react-query.tanstack.com/) - 获取、缓存和更新异步数据的 hook
  - [react-use](https://github.com/streamich/react-use#readme) - hooks 包
    - [bixi-hooks](https://github.com/olivewind/bixi-hooks)
    - [ahooks](https://ahooks.js.org/zh-CN)
  - [ink](https://github.com/vadimdemedes/ink) - 在交互式命令行中使用 react
  - [react-lifecycle-visualizer](https://github.com/Oblosys/react-lifecycle-visualizer#readme) - react 生命周期方法的实时可视化工具
  - [why-did-you-render](https://github.com/welldone-software/why-did-you-render#readme) - 展示可避免的重复渲染
  - [react-proto](https://github.com/React-Proto/react-proto#readme) - 为开发人员和设计人员提供的 react 应用原型开发工具
  - [react-ui-mode-cc](https://github.com/shenghanqin/react-ui-mode-cc#readme) - 响应式设计与自适应设计结合的方案 react 实现
- 进阶
  - [react 技术揭秘](https://react.iamkasong.com/)
  - [react 源码解析](https://github.com/KieSun/react-interpretation)
  - [react 相关库源码分析](https://github.com/BUPTlhuanyu/ReactNote)
  - [react fiber 源码分析](https://zhuanlan.zhihu.com/p/179934120)
  - [react 面试题](https://github.com/sudheerj/reactjs-interview-questions)
  - [Dan Abramov's Blog](https://overreacted.io/)
  - [build your own react](https://pomb.us/build-your-own-react/)
  - [Re: 从零开始的 React 再造之旅](https://devrsi0n.com/articles/create-react-from-scratch)
  - createElement，render，Component 三个重要的 api
  - virtual dom 和 diff 算法
  - fiber 架构，任务调度，渲染与更新
    - [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85)
    - [React Fiber 架构](https://zhuanlan.zhihu.com/p/37095662)
  - React.lazy
  - 生命周期原理
  - react-router 原理及实现
  - redux 和 redux-react 原理及实现
  - mobx 和 mobx-react 原理及实现
  - unstated-next 原理及实现
  - 组件概念，组件化思想，组件化机制，高阶组件 HOC，组件通信策略
  - 类组件，函数式组件和 hooks
    - [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
    - [使用 React Hooks 声明 setInterval](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)
    - [精读《useEffect 完整指南》](https://juejin.im/post/5c9827745188250ff85afe50)
  - 组件测试
  - Portal 和弹窗组件实现
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

## Angular 及相关生态

- 教程
  - [英文文档](https://angular.io/)
  - [中文文档](https://angular.cn/)
- [devtools](https://augury.rangle.io/)
- 路由
  - 自带路由
- 状态管理
  - [ngrx](https://ngrx.io/)
  - [ngxs](https://www.ngxs.io/)
  - [akita](https://netbasal.gitbook.io/akita/)
- ui
  - [angular-material](https://material.angular.cn/)
  - [ng-zorro](https://ng.ant.design/docs/introduce/zh)
  - [nebular](https://akveo.github.io/nebular/docs/getting-started/w)
  - [dev-ui](https://devui.design/)
  - [tanbo-ui](https://www.tanboui.com/)
  - [ng-zorro-mobile](https://ng.mobile.ant.design/#/docs/introduce/zh)
- cli
  - [angular-cli](https://angular.cn/cli)
- app
  - native-script
    - [英文文档](https://nativescript.org/)
  - ionic
    - [英文文档](https://ionicframework.com/docs)
- 小程序
  - 无
- 衍生
  - [rxjs](https://rxjs-dev.firebaseapp.com/)
  - [ng-nest](https://github.com/NG-NEST/ng-nest)

## Virtual DOM

- [snabbdom](https://github.com/snabbdom/snabbdom)
- [cito.js](https://github.com/joelrich/citojs)

## 服务器端

- [restful api](https://restfulapi.net/) - 使用最广泛的请求和响应格式
- [graphql](https://graphql.org/) - 新请求格式，旨在改进 restful api
- [nginx](https://www.nginx.com/)
- [node.js](https://nodejs.org/en/) - 用 js 构建后端服务
  - [node-best-practices](https://github.com/goldbergyoni/nodebestpractices)
  - [koa](https://koajs.com/) - node.js 框架，自由度高
    - [egg](https://eggjs.org/zh-cn/) - 封装 koa 的 node.js 框架，约定大于配置
    - [think.js](https://thinkjs.org/) - 使用完整的 ES6/7 特性开发 node.js 应用
  - [nest.js](https://nestjs.com/) - 渐进式 node.js 框架
  - [sails.js](https://sailsjs.com/) - node.js 的 MVC 框架
  - [fastify](https://www.fastify.io/) - 快速、低开销的 node.js 框架
  - restful api 的弊端
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

## 开源

- [github 开源指南](https://zhuanlan.zhihu.com/p/176839757)

## 参考

- [sorrycc/awesome-f2e-libs](https://github.com/sorrycc/awesome-f2e-libs)

## 致谢

- Moniek - 来邮为我提供了建议，附带了免费可商用字体列表
