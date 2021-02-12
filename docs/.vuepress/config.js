module.exports = {
  title: "ModyQyW's blog",
  description: '一个前端博客',
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
            text: '数学',
            link: '/coding-basis/math/',
          },
          {
            text: '计算机组成',
            link: '/coding-basis/computer-organization/',
          },
          {
            text: '网络',
            link: '/coding-basis/internet/',
          },
          {
            text: 'git',
            link: '/coding-basis/git/',
          },
          {
            text: 'html',
            link: '/coding-basis/html/',
          },
          {
            text: 'css',
            link: '/coding-basis/css/',
          },
          {
            text: 'js',
            link: '/coding-basis/js/',
          },
          {
            text: '数据结构',
            link: '/coding-basis/data-structure/',
          },
          {
            text: '算法',
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
            text: '环境配置',
            link: '/front-end/environment/',
          },
          {
            text: '杂项',
            link: '/front-end/misc/',
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
            text: 'express',
            link: '/front-end/express/',
          },
          {
            text: 'egg',
            link: '/front-end/egg/',
          },
        ],
      },
      {
        text: '关于',
        link: '/about/',
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
        updatePopup: true,
      },
    ],
    '@vuepress/search',
    [
      'sitemap',
      {
        hostname: 'https://modyqyw.top',
      },
    ],
    'vuepress-plugin-code-copy',
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
        clientSecret: '68b0ceecccc462ce8bdd73c2c02e261cb355506e'
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
