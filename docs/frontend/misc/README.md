# 杂项

## 说明

这个部分覆盖了项目开发的很多方面，我把它用作速查表。所有内容仅供参考。

## 基本概念

- [六个基本概念](https://www.zhihu.com/question/304757674/answer/546374749)

## 基本文档

- [w3c](https://www.w3.org/)
- [mdn](https://developer.mozilla.org/)
- [ibm developer](https://www.ibm.com/developerworks/cn/index.html)

## 编程用字体

- [Menlo](https://www.cufonfonts.com/font/menlo)
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro/releases)
- [Jetbrains Mono](https://www.jetbrains.com/lp/mono/)
- [Sarasa Mono T SC](https://github.com/be5invis/Sarasa-Gothic/releases)
- [Fira Code](https://github.com/tonsky/FiraCode/releases)

## 浏览器开发者工具

- [chrome](https://developers.google.cn/web/tools/chrome-devtools)
- [firefox](https://developer.mozilla.org/en-US/docs/Tools)
- [edge(chromium)](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium)

## 界面和交互设计

### 设计体系

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
- [Zan Design](https://design.youzan.com/)

### 相关书籍

- [About Face 4: 交互设计精髓](https://book.douban.com/subject/26642302/)
- [Web 界面设计](https://book.douban.com/subject/3821157/)
- [界面设计模式](https://book.douban.com/subject/25716088/)
- [写给大家看的设计书](https://book.douban.com/subject/3323633/)
- [设计心理学](https://book.douban.com/subject/26742341/)
- [Web 表单设计](https://book.douban.com/subject/4886100/)

### 字体

- [70+ Best Free Fonts for Designers – Free for Commercial Use in 2021](https://www.websiteplanet.com/blog/best-free-fonts/)
- [免费可商用字体指南](https://zhuanlan.zhihu.com/p/69175576)
- [免费可商用中文字体合集（较新）](https://www.uisdc.com/2020-free-font)
- [100font](https://www.100font.com)
- [猫啃网](https://www.maoken.com)
- [找字体](https://www.zfont.cn)
- [字魂](https://izihun.com)
- [阿里巴巴普惠体](https://aifont.alicdn.com/AlibabaPuHuiTi/AlibabaPuHuiTiAll.zip)
- [未来荧黑](https://github.com/welai/glow-sans/releases)
- [更纱黑体](https://github.com/be5invis/Sarasa-Gothic/releases)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Source Code Pro](https://github.com/adobe-fonts/source-code-pro/releases)
- [Fira Code](https://github.com/tonsky/FiraCode/releases)

### 图标

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
- [tabler-icons](https://tablericons.com/)
- [simple-icons](https://simpleicons.org/)
- [icon-park](https://iconpark.bytedance.com/)

## 静态网站生成

- [vuepress](https://vuepress.vuejs.org/)
- [dumi](https://d.umijs.org/)
- [hexo](https://hexo.io/)
- [gatsby](https://www.gatsbyjs.com/)
  - [docz](https://www.docz.site/)
- [next](https://nextjs.org/)
- [nuxt](https://nuxtjs.org/)
- [pagic](https://pagic.cn/)

## 开发语言

- [typescript](https://www.typescriptlang.org/)
  - [入门教程](https://ts.xcatliu.com/basics)
  - [官方教程](https://www.typescriptlang.org/docs/home.html)
  - [深入理解 typescript](https://jkchao.github.io/typescript-book-chinese/)
  - [从零开始配置 TypeScript 项目](https://juejin.im/post/6856410900577026061)
- [elm](https://elm-lang.org/) - 观望
- [rescript](https://rescript-lang.org/) - 观望

## 项目基本选型

### 原生

- 桌面端网页，移动端网页
  - ie8 - jquery 1 + bootstrap 3 + bootstrap-table
  - ie11+ - jquery 3 + bootstrap 4 + bootstrap-table
- 移动端应用
  - flutter
  - ionic
  - cordova
  - native-script
- 小程序
  - 各家小程序原生
- 桌面端应用
  - jquery 3 + bootstrap 4 + bootstrap-table + electron

### Vue 系

- 桌面端网页，移动端网页
  - (vue + vue-router + vuex) / nuxt
  - vuetify / element / element-plus
- 移动端网页
  - (vue + vue-router + vuex) / nuxt
  - vuetify / nut-ui / zarm-vue / vant
- 移动端应用，小程序
  - uni-app + vuex
  - uni-ui + uview-ui + @modyqyw/mp-scss
- 桌面端应用
  - (vue + vue-router + vuex) / nuxt
  - vuetify / element / element-plus
  - electron

### React 系

- 桌面端网页
  - (react + react-router) / umi / next
  - constate / (redux + react-redux + redux-toolkit) / unstated-next
  - zent / blueprint / material-ui
- 移动端网页
  - (react + react-router) / umi / next
  - constate / (redux + react-redux + redux-toolkit) / unstated-next
  - yep-react / zarm
- 移动端应用
  - expo / alita
  - react-router / react-navigation
  - constate / (redux + react-redux + redux-toolkit) / unstated-next
  - react-native-elements / react-native-ui-kitten
- 小程序
  - taro / remax
  - constate / (redux + react-redux + redux-toolkit) / unstated-next
  - @modyqyw/mp-scss
- 桌面端应用
  - (react + react-router) / umi / next
  - constate / (redux + react-redux + redux-toolkit) / unstated-next
  - zent / blueprint / material-ui
  - electron

## 项目流程

### 设计

- Axure RP
- 墨刀
- xiaopiu
- Sketch
- Figma
- Draw.io - 思维导图，功能结构图等相关图例
- MS Office - 产品需求文档等相关文档
- WPS Office - 产品需求文档等相关文档

### 管理

- git
  - [pro git](https://git-scm.com/book/en/v2)
- [nvm](https://github.com/nvm-sh/nvm#readme) - 管理 node 版本，windows 版本 [nvm-windows](https://github.com/coreybutler/nvm-windows#readme)
- [npm](https://github.com/npm/cli#readme)
- [yarn](https://classic.yarnpkg.com/zh-Hans)
- [pnpm](https://pnpm.js.org/)
- [@antfu/ni](https://github.com/antfu/ni#readme) - 自动选择 npm/yarn/pnpm
- [lerna](https://github.com/lerna/lerna#readme) - monorepo
- [nx](https://nx.dev/) - monorepo
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates#readme) - 可以结合`yarn upgrade-interactive`使用
- [yeoman](https://yeoman.io/) - 构建脚手架
- [oclif](https://oclif.io/) - 构建脚手架

### 规范校验和格式化

- [EditorConfig](https://editorconfig.org/) - 在不同的编辑器和 IDE 保持一致的风格
- [ls-lint](https://ls-lint.org/) - 目录校验
- [prettier](https://prettier.io/) - 格式化
- [markdownlint](https://github.com/DavidAnson/markdownlint#readme) - markdown 格式化
- [eslint](https://eslint.org/) - 脚本文件校验 + 格式化
- [stylelint](https://stylelint.io/) - 样式文件呢校验 + 格式化
- [commitlint](https://commitlint.js.org/) - 校验提交
- [husky](https://github.com/typicode/husky#readme) - Git 钩子处理
- [lint-staged](https://github.com/okonet/lint-staged#readme) - 校验和格式化暂存区文件
- [commitizen](https://github.com/commitizen/cz-cli#readme) - 引导填写提交信息
- [@modyqyw/fabric](https://github.com/MillCloud/fabric#readme) - 通用配置指引

### 调试

- [LambdaTest](https://www.lambdatest.com/) - 在线执行实时互动和自动的跨浏览器测试
- [jest](https://jestjs.io/) - 单元测试
- [mocha](https://mochajs.org/) - 单元测试
- [testing-library](https://testing-library.com/) - 组件测试
- [cypress](https://docs.cypress.io/) - 端对端测试
- [nightwatch](https://nightwatchjs.org/) - 端对端测试
- [test-cafe](https://devexpress.github.io/testcafe/) - 端对端测试
- [eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md#readme) - 移动端网页调试面板
- [v-console](https://github.com/Tencent/vConsole/blob/dev/README_CN.md#readme) - 移动端网页调试面板
- [whistle](https://github.com/avwo/whistle/blob/master/README-zh_CN.md#readme) - 跨平台代理调试工具
- [light-proxy](https://lightproxy.org/zh-CN) - 跨平台代理调试工具
- [chii](https://github.com/liriliri/chii/blob/master/docs/README_CN.md#readme) - 远程调试工具
- [spy-debugger](https://github.com/wuchangming/spy-debugger#readme) - 一站式页面调试、抓包工具
- [serve](https://github.com/vercel/serve#readme) - 本地测试静态目录

### 构建

- [cross-env](https://github.com/kentcdodds/cross-env#readme) - 设置跨平台环境变量
- [rimraf](https://github.com/isaacs/rimraf#readme) - 跨平台删除文件
- [babel](https://babeljs.io/)
  - [awesome-babel](https://github.com/babel/awesome-babel#readme)
  - [babel 教程](https://www.jiangruitao.com/docs/babel/)
  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
  - [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
  - [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#readme)
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
  - [core-js](https://github.com/zloirock/core-js#readme)
  - [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime#readme)
  - [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/)
- [postcss](https://postcss.org/)
  - [awesome-postcss](https://github.com/jdrgomes/awesome-postcss#readme)
  - [autoprefixer](https://github.com/postcss/autoprefixer#readme)
  - [postcss-preset-env](https://github.com/csstools/postcss-preset-env#readme)
  - [cssnano](https://cssnano.co/)
  - [purgecss](https://purgecss.com/)
- [webpack](https://webpack.js.org/)
  - [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack#readme)
  - [webpack 教程](https://www.jiangruitao.com/webpack/)
  - [前端 - webpack4](../webpack4/README.md)
  - [webpack-merge](https://github.com/survivejs/webpack-merge#readme)
  - [webpack-chain](https://github.com/neutrinojs/webpack-chain#readme)
  - plugins
    - [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin#readme)
    - [webpack-bar](https://github.com/nuxt/webpackbar#readme)
    - [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer#readme)
    - [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin#readme)
    - [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin/#readme) - 代替 uglify-webpack-plugin
    - [esbuild-webpack-plugin](https://github.com/sorrycc/esbuild-webpack-plugin#readme)
    - [dll-plugin](https://webpack.js.org/plugins/dll-plugin/)
    - [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin#readme)
    - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#readme)
    - [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin#readme)
    - [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin#readme)
    - [prerender-webpack-plugin](https://github.com/chrisvfritz/prerender-spa-plugin#readme)
    - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin#readme)
    - [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin#readme)
    - [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin#readme)
    - [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin#readme)
    - [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin#readme)
    - [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#readme)
  - loaders
    - [thread-loader](https://github.com/webpack-contrib/thread-loader#readme) - 代替 happy-pack
    - [cache-loader](https://github.com/webpack-contrib/cache-loader#readme)
    - [raw-loader](https://github.com/webpack-contrib/raw-loader#readme)
    - [url-loader](https://github.com/webpack-contrib/url-loader#readme)
    - [file-loader](https://github.com/webpack-contrib/file-loader#readme)
    - [babel-loader](https://github.com/babel/babel-loader#readme)
    - [ts-loader](https://github.com/TypeStrong/ts-loader#readme)
    - [style-loader](https://github.com/webpack-contrib/style-loader#readme)
    - [css-loader](https://github.com/webpack-contrib/css-loader#readme)
    - [sass-loader](https://github.com/webpack-contrib/sass-loader#readme)
    - [less-loader](https://github.com/webpack-contrib/less-loader#readme)
    - [stylus-loader](https://github.com/webpack-contrib/stylus-loader#readme)
    - [postcss-loader](https://github.com/webpack-contrib/less-loader#readme)
  - [poi](https://poi.js.org/)
  - [modyqyw/webpack-demos](https://github.com/modyqyw/webpack-demos) - webpack 示例项目
- [rollup](https://rollupjs.org/guide/zh/)
  - [awesome-rollup](https://github.com/rollup/awesome#readme)
- [parcel](https://v2.parceljs.org/)
  - [awesome-parcel](https://github.com/parcel-bundler/awesome-parcel#readme)
- [snowpack](https://www.snowpack.dev/)
  - [awesome-snowpack](https://github.com/rajasegar/awesome-snowpack#readme)
- [vite](https://github.com/vitejs/vite#readme)
  - [awesome-vite](https://github.com/vitejs/awesome-vite#readme)
- [wmr](https://github.com/preactjs/wmr#readme)

### 持续集成

- [flow-ci](https://flow.ci/)
- [travis-ci](https://travis-ci.org/)
- [circle-ci](https://circleci.com/)
- [jenkins](https://www.jenkins.io/zh/)
- [github-ci](https://help.github.com/en/actions/building-and-testing-code-with-continuous-integration)

### 发布

- [np](https://github.com/sindresorhus/np#readme)

### 部署

- [vercel](https://vercel.com/)
- [netlify](https://www.netlify.com/)

### 监控

- [sentry](https://sentry.io/)

### 任务管理和 DevOps

- [Microsoft Azure DevOps](https://azure.microsoft.com/zh-cn/overview/what-is-devops/)
- [AWS DevOps](https://aws.amazon.com/cn/devops/what-is-devops/)
- [Jira](https://www.atlassian.com/zh/software/jira)
- [Trello](https://trello.com/home)
- [滴答清单](https://help.dida365.com/tasks)
- [Ledge](https://devops.phodal.com/)
- [阿里云 DevOps](https://develop.aliyun.com/devops)

### 微服务

- [single-spa](https://single-spa.js.org/)
  - [qiankun](https://qiankun.umijs.org/zh)
- [berial](https://github.com/berialjs/berial#readme)
- [emp](https://github.com/efoxTeam/emp#readme)

## 工具集

- [lodash](https://lodash.com/)
- [xe-utils](https://x-extends.gitee.io/xe-utils/)
- [futil-js](https://github.com/smartprocure/futil-js#readme)
- [moment](https://momentjs.com/)
- [dayjs](https://dayjs.gitee.io/zh-CN/)
- [date-fns](https://date-fns.org/)
- [js-joda](https://js-joda.github.io/js-joda/)
- [luxon](https://moment.github.io/luxon/)
- [history](https://github.com/ReactTraining/history)
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
- [qs](https://www.npmjs.com/package/qs)
- [query-string](https://www.npmjs.com/package/query-string)

## 原生及相关生态

- [normalize](https://github.com/necolas/normalize.css) - 重置 css 样式
  - [ress](https://github.com/filipelinhares/ress) - 基于 normalize.css 增强，重置 css 样式
- [css bem](http://getbem.com/)
- [css modules](https://github.com/css-modules/css-modules#readme)
- [oocss](http://oocss.org/)
- [smacss](http://smacss.com/)
- [bootstrap](https://getbootstrap.com/) - ui 库，要适配 ie8 需要使用 v3
  - [bootstrap-table](https://bootstrap-table.com/) - 搭配 bootstrap 使用的表格组件，要搭配 bootstrap v3 要使用旧版
  - [mdbootstrap](https://mdbootstrap.com/) - material design + bootstrap
- [ui-kit](https://getuikit.com/)
- [tailwindcss](https://tailwindcss.com/)
  - [bulma](https://bulma.io/documentation/)
  - [tachyons](https://tachyons.io/)
  - [primer](https://primer.style/css)
- [umi.css](https://www.hua-mi.cn/umi-css/)
- [jquery](https://jquery.com/) - 要适配 ie8 需要使用 v1
  - [zepto](https://zeptojs.com/) - 类 jquery api，针对现代浏览器
- [page.js](http://visionmedia.github.io/page.js/) - 路由
- [format.js](https://formatjs.io/) - 国际化
- [i18next](https://www.i18next.com/) - 国际化
- [axios](https://github.com/axios/axios#readme) - 请求库，用到了 promise
  - [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter#readme)
- [superagent](https://github.com/visionmedia/superagent#readme) - 请求库
- [mock.js](http://mockjs.com/) - 生成随机数据，拦截 ajax 请求
- [faker.js](https://github.com/Marak/faker.js#readme) - 生成随机数据
- [math.js](https://mathjs.org/) - 数学库
- [echarts](https://www.echartsjs.com/zh/index.html) - 图表库
- [chart.js](https://github.com/chartjs/Chart.js) - 图表库
- [leaflet](https://leafletjs.com/) - 地图库
- [howler.js](https://howlerjs.com/) - audio 支持
- [aplayer](https://aplayer.js.org/) - 音频播放器
- [dplayer](https://dplayer.js.org/) - 视频播放器
- [video.js](https://videojs.com/) - 播放器
- [screenfull](https://github.com/sindresorhus/screenfull.js/#readme) - 全屏
- [file-saver](https://github.com/eligrey/FileSaver.js#readme) - 文件保存
- [stream-saver](https://github.com/jimmywarting/StreamSaver.js#readme) - 文件保存
- [simple-crop](https://github.com/newbieYoung/Simple-Crop#readme) - 图片裁剪
- [cropper.js](https://github.com/fengyuanchen/cropperjs#readme) - 图片裁剪
- [recordrtc](https://github.com/muaz-khan/RecordRTC) - webrtc 库
- [popper.js](https://popper.js.org/) - 文字提示和弹出式菜单
- [luckysheet](https://github.com/mengshukeji/Luckysheet#readme) - 在线表格
- [hammer](http://hammerjs.github.io/) - 触摸手势
- [slick](https://kenwheeler.github.io/slick/) - 走马灯
- [markdown-it](https://github.com/markdown-it/markdown-it) - markdown 解析
- [tui-editor](http://ui.toast.com/tui-editor) - 高效、可扩展的 GFM Markdown Wysiwyg 编辑器
- [quill.js](https://quilljs.com/) - 现代所见即所得的富文本编辑器
- [fabric.js](http://fabricjs.com/) - canvas 库，支持 svg 和 canvas 相互解析
- [sprite.js](https://spritejs.org/) - 跨平台高性能图形系统，支持 canvas 和 webgl
- [d3](https://d3js.org/) - 使用 svg，canvas 和 html，基于数据操作文档的库
- [three.js](https://threejs.org/) - 便于使用的轻量的 3d 库，支持 webgl，canvas，svg，css
- [html5-boilerplate](https://github.com/h5bp/html5-boilerplate#readme) - 模板
- [vanilla-web-projects](https://github.com/bradtraversy/vanillawebprojects#readme) - 使用 html5、css 和 js 构建的迷你项目示例

## vue 及相关生态

- [文档](https://vuejs.org/)
- [devtools](https://github.com/vuejs/vue-devtools#readme)
- 路由
  - [vue-router](https://router.vuejs.org/)
- 状态管理
  - [vuex](https://vuex.vuejs.org/)
- ui
  - [vuetify](https://vuetifyjs.com/)
  - [element](https://element.eleme.cn/)
    - [element-plus](https://element-plus.org/)
    - [element3](https://element3-ui.com/)
  - [antd-vue](https://www.antdv.com/)
  - [vant](https://youzan.github.io/vant/)
  - [nut-ui](http://nutui.jd.com/)
  - [zarm-vue](https://vue.zarm.design/)
  - [更多](https://github.com/topics/vue)
- cli
  - [nuxt](https://zh.nuxtjs.org/)
  - [quasar](https://quasar.dev/)
  - [vue-cli](https://cli.vuejs.org/) - 需要手动支持 ssr
  - [ream (WIP)](https://ream.dev/)
- app / 小程序
  - uni-app
    - [文档](https://uniapp.dcloud.io/)
    - 路由
      - [自带路由](https://uniapp.dcloud.io/frame?id=%e8%b7%af%e7%94%b1)
    - 状态管理
      - [vuex](https://vuex.vuejs.org/)
    - ui
      - [uview-ui](https://uviewui.com/)
      - [uni-ui](https://github.com/dcloudio/uni-ui#readme)
      - [@modyqyw/mp-scss](https://millcloud.github.io/mp-scss)
    - 衍生
      - [uni-ajax](https://uniajax.ponjs.com/)
      - [luch-request](https://www.quanzhan.co/luch-request/)
    - 进阶
      - [uni-app 多端构建原理浅析](https://f-loat.github.io/posts/2019/08/03/uni-app-%E5%A4%9A%E7%AB%AF%E6%9E%84%E5%BB%BA%E5%8E%9F%E7%90%86%E6%B5%85%E6%9E%90.html)
  - chameleon
    - [中文文档](https://cml.js.org/)
    - 路由
      - [自带路由](https://cml.js.org/docs/config.html#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)
    - 状态管理
      - [chameleon-store](https://cml.js.org/docs/store.html)
    - ui
      - [cml-ui](https://cml.js.org/components/expand.html)
      - [@modyqyw/mp-scss](https://millcloud.github.io/mp-scss)
- 衍生
  - [vue-cli 4 配置参考](https://github.com/staven630/vue-cli4-config#readme)
  - [用 vue 写 h5 项目的基本结构与依赖整理，封装常用工具，快速开发 h5 的脚手架](https://github.com/yujinpan/h5-vue#readme)
  - [genesis](https://fmfe.github.io/genesis-docs/) - 轻量的 vue ssr
  - [fes.js](https://webank.gitee.io/fes.js/) - 管理台应用解决方案
  - [swrv](https://github.com/Kong/swrv#readme) - 用于数据获取
  - [vue-dollar](https://github.com/antfu/v-dollar#readme) - 简化 vue3 的 api
  - [vue-demi](https://github.com/antfu/vue-demi#readme) - 创建跨版本的库
  - [vue-use](https://vueuse.js.org/) - hooks 包
  - [vue-composable](https://pikax.me/vue-composable/) - hooks 包
  - [vue-hooks](https://vue-hooks.netlify.app/) - hooks 包
  - [@ant-design-vue/use](https://github.com/vueComponent/use) - hooks 包
  - [vxe-table](https://github.com/xuliangzhan/vxe-table) - 表格解决方案，可兼容 element，antdv 和 view-ui
  - [vue-good-table](https://xaksis.github.io/vue-good-table/) - 表格解决方案
  - [vue-formulate](https://vueformulate.com/) - 表单解决方案
  - [portal-vue](https://portal-vue.linusb.org/) - 用于在 DOM 中的任何地方渲染组件模板
  - [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin#readme) - 后台管理系统
  - [d2-admin](https://github.com/d2-projects/d2-admin#readme) - 后台管理系统
  - [vue-ven-admin](https://github.com/anncwb/vue-vben-admin#readme) - 后台管理系统
  - [vue-antd-admin](https://github.com/iczer/vue-antd-admin#readme) - 后台管理系统
  - [ant-design-vue-pro](https://github.com/vueComponent/ant-design-vue-pro) - 后台管理系统
  - [vuetify-material-dashboard](https://github.com/creativetimofficial/vuetify-material-dashboard#readme) - 后台管理系统
  - [vuetify-admin-dashboard](https://github.com/ClintOxx/vuetify-admin-dashboard#readme) - 后台管理系统
  - [vue2-elm](https://github.com/bailicangdu/vue2-elm#readme) - 仿饿了么
- 进阶
  - [vue 渲染器设计](http://hcysun.me/vue-design/zh/)
  - [vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
  - [vue 3 生态技术内幕](https://www.yuque.com/hugsun/vue3)
  - [vue 3 组合式 API 征求意见稿](https://composition-api.vuejs.org/)
  - [一张图理清 Vue 3.0 的响应式系统](https://juejin.im/post/5d9da45af265da5b8072de5d)
  - [vue 2.3 源码分析](https://github.com/answershuto/learnVue)

## react 及相关生态

- 教程
  - [react.js 小书](https://github.com/huzidaha/react-naive-book#readme) - 略有过时，但用来入门非常好
  - [中文文档](https://zh-hans.reactjs.org/docs/getting-started.html)
  - [react for everyone](https://github.com/Asabeneh/React-For-Everyone#readme)
  - [英文文档](https://reactjs.org/docs/getting-started.html)
  - [react-training](https://reacttraining.com/)
  - [road to react](https://www.roadtoreact.com/)
- [devtools](https://github.com/facebook/react/tree/master/packages/react-devtools#readme)
- 路由
  - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
- 状态管理
  - [context](https://reactjs.org/docs/context.html) + [hooks](https://reactjs.org/docs/hooks-intro.html)
    - [constate](https://github.com/diegohaz/constate#readme)
    - [unstated-next](https://github.com/jamiebuilds/unstated-next#readme)
  - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/) + [redux-toolkit](https://redux-toolkit.js.org/) + [redux-saga](https://redux-saga.js.org/)
    - [rematch](https://rematch.netlify.app/)
  - [mobx](https://mobx.js.org/) + mobx-react
    - [mobx-state-tree](https://mobx-state-tree.js.org/intro/philosophy)
  - [recoil](https://recoiljs.org/)
- ui
  - [material-ui](https://material-ui.com/)
  - [zent](https://youzan.github.io/zent/)
  - [blueprint](https://blueprintjs.com/)
  - [react-md](https://react-md.dev/)
  - [antd](https://ant.design/)
  - [react-suite](https://rsuitejs.com/)
  - [shineout](https://shine.wiki/)
  - [yep-react](https://yep-react.jd.com/)
  - [zarm](https://zarm.design/)
  - [antd-mobile](https://mobile.ant.design/)
  - [更多](https://github.com/topics/react)
- cli
  - [next](https://nextjs.org/docs/getting-started)
    - [blitz](https://github.com/blitz-js/blitz) - 基于 next 再封装，全栈框架
  - [umi](https://umijs.org/zh-CN) - 带微前端解决方案
  - [ice](https://ice.work/) - 带微前端解决方案
  - [create-react-app](https://create-react-app.dev/) - 无 ssr 相关说明
  - [gatsby](https://www.gatsbyjs.com/)
  - [after](https://github.com/jaredpalmer/after.js#readme)
- app
  - react-native
    - [文档](https://facebook.github.io/react-native/) - [中文版](https://reactnative.cn/)
    - 路由
      - [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
      - [react-navigation](https://reactnavigation.org/)
    - 状态管理
      - [context](https://reactjs.org/docs/context.html) + [hooks](https://reactjs.org/docs/hooks-intro.html)
        - [constate](https://github.com/diegohaz/constate#readme)
        - [unstated-next](https://github.com/jamiebuilds/unstated-next#readme)
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/) + [redux-toolkit](https://redux-toolkit.js.org/) + [redux-saga](https://redux-saga.js.org/)
        - [rematch](https://rematch.netlify.app/)
      - [mobx](https://mobx.js.org/) + mobx-react
        - [mobx-state-tree](https://mobx-state-tree.js.org/intro/philosophy)
      - [recoil](https://recoiljs.org/)
    - ui
      - [react-native-elements](https://react-native-elements.github.io/react-native-elements/docs/overview.html)
      - [react-native-ui-kitten](https://akveo.github.io/react-native-ui-kitten/)
      - [teaset](https://github.com/rilyu/teaset#readme)
      - [antd-rn](https://rn.mobile.ant.design/)
      - [tailwind-rn](https://github.com/vadimdemedes/tailwind-rn#readme)
      - [mand-mobile-rn](https://didi.github.io/mand-mobile-rn/?path=/story/mand-mobile-rn--%E5%BF%AB%E9%80%9F%E6%8E%A5%E5%85%A5)
      - [react-native-material-ui](https://github.com/xotahal/react-native-material-ui#readme)
      - [react-native-material-kit](https://github.com/xinthink/react-native-material-kit#readme)
      - [react-native-ui-lib](https://wix.github.io/react-native-ui-lib/)
      - [native-base](https://nativebase.io/)
    - cli
      - [expo](https://docs.expo.io/)
  - alita
    - [文档](https://alitajs.com/)
- 小程序
  - taro
    - [文档](https://taro-docs.jd.com/taro/docs/README.html)
    - 路由
      - [自带路由](https://taro-docs.jd.com/taro/docs/router/)
    - 状态管理
      - [context](https://reactjs.org/docs/context.html) + [hooks](https://reactjs.org/docs/hooks-intro.html)
        - [constate](https://github.com/diegohaz/constate#readme)
        - [unstated-next](https://github.com/jamiebuilds/unstated-next#readme)
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/) + [redux-toolkit](https://redux-toolkit.js.org/) + [redux-saga](https://redux-saga.js.org/)
        - [rematch](https://rematch.netlify.app/)
      - [mobx](https://mobx.js.org/) + mobx-react
        - [mobx-state-tree](https://mobx-state-tree.js.org/intro/philosophy)
      - [recoil](https://recoiljs.org/)
    - ui
      - [taro-ui](https://taro-ui.jd.com/#/docs/introduction)
      - [color-ui](https://yinliangdream.github.io/mp-colorui-doc/home/introduce.html#taro)
      - [@tarojsx/ui](https://github.com/tarojsx/ui#readme)
  - remax
    - [文档](https://remaxjs.org/)
    - 路由
      - 自带路由
    - 状态管理
      - [context](https://reactjs.org/docs/context.html) + [hooks](https://reactjs.org/docs/hooks-intro.html)
        - [constate](https://github.com/diegohaz/constate#readme)
        - [unstated-next](https://github.com/jamiebuilds/unstated-next#readme)
      - [redux](https://redux.js.org/) + [react-redux](https://react-redux.js.org/) + [redux-toolkit](https://redux-toolkit.js.org/) + [redux-saga](https://redux-saga.js.org/)
        - [rematch](https://rematch.netlify.app/)
      - [mobx](https://mobx.js.org/) + mobx-react
        - [mobx-state-tree](https://mobx-state-tree.js.org/intro/philosophy)
      - [recoil](https://recoiljs.org/)
    - ui
      - [anna](https://annasearl.github.io/anna-remax-ui/#/)
  - rax
    - [中文文档](https://rax.js.org/)
    - 路由
      - [自带路由](https://rax.js.org/docs/guide/route)
    - 状态管理
      - [自带状态管理](https://rax.js.org/docs/guide/store)
    - ui
      - [官方提供](https://rax.js.org/docs/components/about)一部分
- 衍生
  - [preact](https://preactjs.com/) - 类 react 库
  - [fre](https://github.com/yisar/fre) - 类 react 库
  - [inferno](https://infernojs.org/) - 类 react 库
  - [emotion](https://emotion.sh/) - css-in-js
  - [styled-components](https://styled-components.com/) - css-in-js
  - [react-virtualized](https://github.com/bvaughn/react-virtualized) - 表格解决方案，高效渲染大型列表和表格数据的 react 组件
    - [react-window](https://github.com/bvaughn/react-window) - 简洁的 react-virtualized
  - [formik](https://github.com/jaredpalmer/formik#readme) - 表单解决方案
  - [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme) - 用于创建可重用的 react 库的 cli
  - [swr](https://swr.vercel.app/) - 用于数据获取的 hook
  - [react-query](https://react-query.tanstack.com/) - 获取、缓存和更新异步数据的 hook
  - [react-use](https://github.com/streamich/react-use#readme) - hooks 包
  - [ahooks](https://ahooks.js.org/zh-CN) - hooks 包
  - [ant-design-pro](https://pro.ant.design/index-cn) - 后台管理系统
  - [react-admin](https://github.com/duxianwei520/react#readme) - 后台管理系统
  - [react-material-admin](https://github.com/flatlogic/react-material-admin#readme) - 后台管理系统
  - [ink](https://github.com/vadimdemedes/ink) - 在交互式命令行中使用 react
  - [react-dev-inspector](https://github.com/zthxxx/react-dev-inspector#readme) - 检查 react 租价
  - [react-lifecycle-visualizer](https://github.com/Oblosys/react-lifecycle-visualizer#readme) - react 生命周期方法的实时可视化工具
  - [why-did-you-render](https://github.com/welldone-software/why-did-you-render#readme) - 展示可避免的重复渲染
  - [react-proto](https://github.com/React-Proto/react-proto#readme) - 为开发人员和设计人员提供的 react 应用原型开发工具
  - [react-ui-mode-cc](https://github.com/shenghanqin/react-ui-mode-cc#readme) - 响应式设计与自适应设计结合的方案 react 实现
- 进阶
  - [react 源码通关指南](https://zhuanlan.zhihu.com/p/266748892)
  - [react 技术揭秘](https://react.iamkasong.com/)
  - [react 源码解析](https://yuchengkai.cn/react/)
  - [react fiber 源码分析](https://zhuanlan.zhihu.com/p/179934120)
  - [react 面试题](https://github.com/sudheerj/reactjs-interview-questions)
  - [Dan Abramov's Blog](https://overreacted.io/)
  - [build your own react](https://pomb.us/build-your-own-react/)
  - [Re: 从零开始的 React 再造之旅](https://devrsi0n.com/articles/create-react-from-scratch)
  - [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85)
  - [React Fiber 架构](https://zhuanlan.zhihu.com/p/37095662)
  - [react hooks 完全上手指南](https://zhuanlan.zhihu.com/p/92211533)
  - [useEffect 完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/)
  - [使用 React Hooks 声明 setInterval](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)
  - [精读《useEffect 完整指南》](https://juejin.im/post/5c9827745188250ff85afe50)
  - [构建 react 组件库](https://zhuanlan.zhihu.com/p/196758730) - 大方向上适用于 vue

## Virtual DOM

- [snabbdom](https://github.com/snabbdom/snabbdom)
- [cito.js](https://github.com/joelrich/citojs)

## 服务器端

- [json-rpc](https://www.jsonrpc.org/)
- [restful api](https://restfulapi.net/)
- [graphql](https://graphql.org/)
- [nginx](https://www.nginx.com/)
- [node.js](https://nodejs.org/en/) - 用 js 构建后端服务
  - [使用 Node.js 构建 JavaScript 应用程序](https://docs.microsoft.com/zh-cn/learn/paths/build-javascript-applications-nodejs/)
  - [node.js 技术栈](https://github.com/qufei1993/Nodejs-Roadmap#readme)
  - [node-best-practices](https://github.com/goldbergyoni/nodebestpractices)
  - [koa](https://koajs.com/) - node.js 框架，自由度高
    - [egg](https://eggjs.org/zh-cn/) - 封装 koa 的 node.js 框架，约定大于配置
    - [think.js](https://thinkjs.org/) - 使用完整的 ES6/7 特性开发 node.js 应用
    - [daruk](https://darukjs.com/) - 基于 koa，使用 Typescript 开发的轻量级 web 框架
  - [nest.js](https://nestjs.com/) - 渐进式 node.js 框架
  - [sails.js](https://sailsjs.com/) - node.js 的 MVC 框架
  - [fastify](https://www.fastify.io/) - 快速、低开销的 node.js 框架

## 开源

- [github 开源指南](https://zhuanlan.zhihu.com/p/176839757)

## 参考

- [sorrycc/awesome-f2e-libs](https://github.com/sorrycc/awesome-f2e-libs)

## 致谢

- Moniek - 来邮为我提供了建议，附带了免费可商用字体列表
