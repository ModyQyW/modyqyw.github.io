module.exports = {
  title: "ModyQyW's blog",
  description: '只是一个博客罢了',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`,
      },
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#65b687',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/favicon.ico',
        color: '#000000',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '代码基础',
        items: [
          {
            text: '数学基础',
            link: '/coding-basis/math/',
          },
          {
            text: '计算机基础',
            link: '/coding-basis/computer/',
          },
          {
            text: '网络基础',
            link: '/coding-basis/internet/',
          },
          {
            text: 'git 基础',
            link: '/coding-basis/git/',
          },
          {
            text: 'html 基础',
            link: '/coding-basis/html/',
          },
          {
            text: 'css 基础',
            link: '/coding-basis/css/',
          },
          {
            text: 'js 基础',
            link: '/coding-basis/js/',
          },
          {
            text: '数据结构基础',
            link: '/coding-basis/data-structure/',
          },
          {
            text: '算法基础',
            link: '/coding-basis/algorithm/',
          },
          {
            text: '浏览器',
            link: '/coding-basis/browser/',
          },
        ],
      },
      {
        text: '前端',
        items: [
          {
            text: '学习路径',
            link: '/front-end/roadmap/',
          },
          {
            text: '环境',
            link: '/front-end/environment/',
          },
          {
            text: '技术栈',
            link: '/front-end/technology-stack/',
          },
          {
            text: '杂项',
            link: '/front-end/misc/',
          },
          {
            text: 'jquery',
            link: '/front-end/jquery/',
          },
          {
            text: 'bootstrap',
            link: '/front-end/bootstrap/'
          },
          {
            text: 'vue',
            link: '/front-end/vue/',
          },
          {
            text: 'uni-app',
            link: '/front-end/uni-app/',
          },
          {
            text: 'typescript',
            link: '/front-end/typescript/',
          },
          {
            text: 'react',
            link: '/front-end/react/',
          },
          {
            text: 'react-native',
            link: '/front-end/react-native/',
          },
          {
            text: 'taro',
            link: '/front-end/taro/',
          },
          {
            text: 'expo',
            link: '/front-end/expo/',
          },
          {
            text: 'webpack4',
            link: '/front-end/webpack4/',
          },
          {
            text: 'rollup',
            link: '/front-end/rollup/',
          },
          {
            text: 'parcel',
            link: '/front-end/parcel/',
          },
          {
            text: 'vite',
            link: '/front-end/vite',
          },
          {
            text: '音视频',
            link: '/front-end/av/',
          },
          {
            text: '安全',
            link: '/front-end/safety/',
          },
          {
            text: '监控',
            link: '/front-end/monitor/',
          },
          {
            text: '优化',
            link: '/front-end/optimization/',
          },
          {
            text: 'koa 和 egg',
            link: '/front-end/koa-and-egg/',
          },
        ],
      },
      {
        text: '实战',
        items: [
          {
            text: 'koa 打造的简单后端服务 koa-backend',
            link: '/combat/koa-backend/',
          },
          {
            text: 'egg 打造的简单后端服务 egg-backend',
            link: '/combat/egg-backend/',
          },
          {
            text: 'vue 和 element 打造的待办清单 vue-element-todo-list',
            link: '/combat/vue-element-todo-list/',
          },
          {
            text: 'vue 和 vuetify 打造的后台管理系统 vue-vuetify-admin',
            link: '/combat/vue-vuetify-admin/',
          },
          {
            text: 'uni-app 打造的待办清单小程序和 app uni-app-todo-list',
            link: '/combat/uni-app-todo-list/',
          },
          {
            text: 'react 和 material 打造的待办清单 react-material-todo-list',
            link: '/combat/react-material-todo-list/',
          },
          {
            text: 'umi 全家桶打造的后台管理系统 umi-admin',
            link: '/combat/umi-admin/',
          },
          {
            text: 'taro 打造的待办清单小程序 taro-todo-list',
            link: '/combat/taro-todo-list/',
          },
          {
            text: 'expo 打造的待办清单app expo-todo-list',
            link: '/combat/expo-todo-list/',
          },
        ],
      },
      {
        text: '推荐',
        link: '/links/',
      },
      {
        text: '关于',
        link: '/about/',
      },
      {
        text: '赞赏',
        link: '/donate/',
      },
      {
        text: 'Github',
        link: 'https://github.com/ModyQyW',
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    repo: 'ModyQyW/modyqyw.github.io',
    repoLabel: '查看源码',
    docsBranch: 'origin',
    editLinks: true,
    editLinkText: '编辑此页面',
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hour12: false,
        },
      },
    ],
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '新内容可用。',
          buttonText: '刷新',
        },
      },
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://modyqyw.top',
      }
    ],
    "vuepress-plugin-code-copy",
    [
      'helper-live2d',
      {
        live2d: {
          model: 'wanko',
          display: {
            position: 'right',
            width: 135,
            height: 300,
            hOffset: 65,
            vOffset: 0,
          },
        },
      },
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github-v4',
        owner: 'ModyQyW',
        repo: 'modyqyw.github.io',
        clientId: 'ee62eae699b0c63fb4c2',
        clientSecret: '68b0ceecccc462ce8bdd73c2c02e261cb355506e',
        baseURL: 'https://github.com',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4] },
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  evergreen: true,
};
