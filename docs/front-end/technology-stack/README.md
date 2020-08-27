# 技术栈

基于个人喜好推荐的技术栈，更多内容参考[前端 -> 杂项](../misc/README.md)。

## 校验

- prettier - 格式化 js，css，less，scss，格式化 js，jsx，ts 和 tsx 时放在 eslint 前面，格式化 css，less，scss 时放在 stylelint 前面
  - @modyqyw/prettier-config
- eslint - 格式化、校验 js/jsx/ts/tsx/vue 代码
  - @modyqyw/eslint-config
  - @modyqyw/eslint-config-vue
  - @modyqyw/eslint-config-vue-ts
  - @modyqyw/eslint-config-react
- stylelint - 格式化、校验 css/less/scss 代码
  - @modyqyw/stylelint-config-css
  - @modyqyw/stylelint-config-less
  - @modyqyw/stylelint-config-scss
- commitizen - 便捷生成提交信息
- commitlint - 校验提交信息
  - @commitlint/config-conventional
- lint-staged - 提交前使用 prettier，eslint 和 stylelint 格式化和校验
- yorkie - 便捷指定 git hook 对应的操作，也可以用 husky

## 原生

- 电脑端 / 移动端网页
  - ie8 - jquery 1 + bootstrap 3 + bootstrap-table
  - ie11+ - jquery 3 + bootstrap 4 + bootstrap-table
- 移动端客户端
  - flutter
  - ionic
  - cordova
  - native-script
- 小程序
  - 各家小程序原生
- 桌面客户端
  - jquery 3 + bootstrap 4 + bootstrap-table + electron

## Vue 系

- 电脑端网页
  - vue + vue-router + vuex + vuetify
  - vue + vue-router + vuex + element-ui / bootstrap-vue + tailwindcss / bulma
  - nuxt + vuetify
  - nuxt + element-ui / bootstrap-vue + tailwindcss / bulma
- 移动端网页
  - vue + vue-router + vuex + vuetify
  - vue + vue-router + vuex + nut-ui / zarm-vue / bootstrap-vue + tailwindcss / bulma
  - nuxt + vuetify
  - nuxt + nut-ui / zarm-vue / bootstrap-vue + tailwindcss / bulma
- 移动端客户端
  - uni-app + vuex + uview-ui + @modyqyw/mp-scss
- 小程序
  - uni-app + vuex + uview-ui + @modyqyw/mp-scss
- 桌面客户端
  - vue + vue-router + vuex + vuetify + electron
  - vue + vue-router + vuex + element-ui / bootstrap-vue + tailwindcss / bulma + electron
  - nuxt + vuetify + electron
  - nuxt + element-ui / bootstrap-vue + tailwindcss / bulma + electron

## React 系

- 电脑端网页
  - umi / next + unstated-next + material-ui
  - umi / next + unstated-next + zent / blueprint / react-bootstrap + tailwindcss / bulma
- 移动端网页
  - umi / next + unstated-next + material-ui
  - umi / next + unstated-next + zarm / react-bootstrap + tailwindcss / bulma
- 移动端客户端
  - expo + react-router + unstated-next + react-native-elements / ui-kitten
- 小程序
  - taro + unstated-next + taro-ui + @modyqyw/mp-scss
- 桌面客户端
  - umi / next + unstated-next + material-ui + electron
  - umi / next + unstated-next + zent / blueprint / react-bootstrap + tailwindcss / bulma + electron

<Vssue />
