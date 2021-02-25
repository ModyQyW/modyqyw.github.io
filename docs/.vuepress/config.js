const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: "ModyQyW's Site",
  description: '基于 vuepress 和 vuepress-theme-hope 打造的个人网站',
  themeConfig: {
    // 主题配置 https://vuepress-theme-hope.github.io/zh/config/theme/
    baseLang: 'zh-CN',
    author: 'ModyQyW <wurui7@mail3.sysu.edu.cn>',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '代码基础',
        prefix: '/coding-basis/',
        items: [
          { text: '数学', link: 'math/' },
          { text: '计算机组成', link: 'computer-organization/' },
          { text: '网络', link: 'internet/' },
          { text: 'git', link: 'git/' },
          { text: 'html', link: 'html/' },
          { text: 'css', link: 'css/' },
          { text: 'js', link: 'js/' },
          { text: '数据结构', link: 'data-structure/' },
          { text: '算法', link: 'algorithm/' },
          { text: '浏览器', link: 'browser/' },
        ],
      },
      {
        text: '前端',
        prefix: '/frontend/',
        items: [
          { text: '学习路径', link: 'roadmap/' },
          { text: '环境配置', link: 'environment/' },
          { text: '杂项', link: 'misc/' },
          { text: '测试', link: 'test/' },
          { text: '持续集成 CI', link: 'ci/' },
          { text: 'webpack4', link: 'webpack4/' },
          { text: '安全', link: 'safety/' },
          { text: '监控', link: 'monitor/' },
          { text: '优化', link: 'optimization/' },
        ],
      },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      '/coding-basis/': [
        'math/',
        'computer-organization/',
        'internet/',
        'git/',
        'html/',
        'css/',
        'js/',
        'data-structure/',
        'algorithm/',
        'browser/',
      ],
      '/frontend/': [
        'roadmap/',
        'environment/',
        'misc/',
        'test/',
        'ci/',
        'webpack4/',
        'safety/',
        'monitor/',
        'optimization/',
      ],
      '/': [''],
    },
    hostname: 'https://modyqyw.github.io',
    // 默认主题配置 https://vuepress-theme-hope.github.io/zh/config/theme/default/
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    repo: 'ModyQyW/modyqyw.github.io',
    docsBranch: 'origin',
    editLinks: true,
    editLinkText: '编辑此页面',
    // 主题功能配置 https://vuepress-theme-hope.github.io/zh/config/theme/feature/
    blog: false,
    pageInfo: false,
    // 主题插件配置 https://vuepress-theme-hope.github.io/zh/config/theme/plugin/
    mdEnhance: {
      lineNumbers: true,
    },
    comment: false,
    copyright: false,
    pwa: {
      favicon: '/favicon.ico',
      manifest: {
        icons: [
          { src: 'icons/w48.png', sizes: '48x48', type: 'image/png' },
          { src: 'icons/w72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icons/w96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icons/w144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icons/w168.png', sizes: '168x168', type: 'image/png' },
          { src: 'icons/w192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/w256.png', sizes: '256x256', type: 'image/png' },
        ],
      },
    },
    feed: false,
  },
  plugins: [
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
        platform: 'github',
        owner: 'ModyQyW',
        repo: 'modyqyw.github.io',
        clientId: 'ee62eae699b0c63fb4c2',
        clientSecret: '68b0ceecccc462ce8bdd73c2c02e261cb355506e',
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4] },
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  evergreen: true,
});
