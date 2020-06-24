# 技术栈

基于个人喜好推荐的技术栈。

eslint + stylelint + prettier + commitlint + commitizen 这套校验组合拳就不再重复说了。

移动端应用 app 建议优先原生，其次 uni-app，最次 taro / rn。

小程序建议优先 taro，其次 uni-app，再次原生。

## 原生

- PC 端 / 移动端网页
  - jquery 1 + bootstrap 3 + bootstrap-table
- 移动端应用
  - cordova
  - flutter
  - java
  - swift
  - kotlin
- 小程序
  - 各家小程序原生
- 桌面应用
  - jquery 3 + bootstrap 4 + bootstrap-table + electron

点评：

- 国内现状驱动 - 目前国内使用 IE 内核的人数还比较多，在政府部门、高校中尤为多见，为了满足该部分用户需求，不得不使用 jq 1 + bs 3 的组合进行适配，更痛苦的是微软都已经不支持 IE11- 了，还在用
- 开发效率低
- 为了提高开发效率，又会转去使用模版，不利于塑造知识结构，更负上了模板的技术栈
- 扩展性/移植性低 - 平台不同，技术栈也要做相应改动

## Vue 系

vue 全家桶 = vue + vue-router + vuex + tailwindcss(vuetify 不需要)

- less - antd-vue(pc) / vant(mobile)
- scss - vuetify(pc & mobile) / element-ui(pc) / nut-ui(mobile) / zarm-vue(mobile)

- PC 端网页
  - vue 全家桶，使用 PC 端组件库
- 移动端网页
  - vue 全家桶，使用移动端组件库
- 移动端应用
  - uni-app + vuex + @modyqyw/mp-scss + uview-ui
- 小程序
  - uni-app + vuex + @modyqyw/mp-scss + uview-ui
- 桌面应用
  - PC 端网页选型 + electron

点评：

- 学习曲线和缓，心智负担低，适合新手
- typescript 不友好，类型推断不够强大，不建议用 typescript
- 官方生态支持良好
- uni-app 文档和研发流程比较差，但它是目前最好的 vue 系跨端开发框架

## React 系

react 全家桶 = umi(带 router) + unstated-next / hooks / @umijs/plugin-model / redux + tailwindcss +

- less - antd(pc) / react-suite(pc) / blueprint(pc) / antd-mobile(mobile)
- scss - zent(pc) / zarm(mobile)

- PC 端网页
  - react 全家桶，使用 PC 端组件库
- 移动端网页
  - react 全家桶，使用移动端组件库
- 移动端应用
  - expo + react-router / react-navigation + unstated-next + react-native-elements + antd-rn
- 小程序
  - taro + redux / unstated-next + @modyqyw/mp-scss + taro-ui
- 桌面应用
  - PC 端网页选型 + electron

点评：

- 学习曲线陡峭，心智负担高，灵活度高，适合有一定水平的人
- typescript 友好，非常建议使用 typescript
- 生态丰富，新手难以选择
- expo(rn) 对国内生态不太友好，不建议用 react 系框架来开发 app

<Vssue />
