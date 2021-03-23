const { config } = require('vuepress-theme-hope');

const mode = process.env.MODE || 'github';
const hostname =
  mode === 'github' ? 'https://modyqyw.top' : 'https://modyqyw.gitee.io';
const repo =
  mode === 'github'
    ? 'https://github.com/ModyQyW/modyqyw.github.io'
    : 'https://gitee.com/ModyQyW/ModyQyW';
const repoLabel = mode === 'github' ? 'Github' : 'Gitee';
const vssuePluginConfig =
  mode === 'github'
    ? {
        platform: 'github',
        owner: 'ModyQyW',
        repo: 'modyqyw.github.io',
        clientId: 'ee62eae699b0c63fb4c2',
        clientSecret: '68b0ceecccc462ce8bdd73c2c02e261cb355506e',
      }
    : {
        platform: 'gitee',
        owner: 'ModyQyW',
        repo: 'ModyQyW',
        clientId:
          '14b93a1f132bd0477d62e8feb82b71936926916e756d31d4476b422d6291cadb',
        clientSecret:
          '0c256d3d67fcc006911aa9619e35c83747a22fbaad6a4447dc9450fa6627d626',
      };

module.exports = config({
  title: "ModyQyW's Site",
  description:
    '基于 vuepress 和 vuepress-theme-hope 打造的个人网站，如有问题请尝试强制刷新。',
  locales: {
    '/en/': {
      title: "ModyQyW's Site",
      description:
        'English version is on progress. Personal website based on vuepress and vuepress-theme-hope. Please try to force a refresh if you have any problems.',
    },
  },
  themeConfig: {
    // 主题配置 https://vuepress-theme-hope.github.io/config/theme/
    baseLang: 'zh-CN',
    author: 'ModyQyW <wurui7@mail3.sysu.edu.cn>',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '代码基础',
        items: [
          { text: '数学', link: '/coding-basis/math/' },
          {
            text: '计算机组成',
            link: '/coding-basis/computer-organization/',
          },
          { text: '网络', link: '/coding-basis/internet/' },
          { text: 'Git', link: '/coding-basis/git/' },
          { text: '浏览器', link: '/coding-basis/browser/' },
          { text: 'HTML', link: '/coding-basis/html/' },
          { text: 'CSS', link: '/coding-basis/css/' },
          { text: 'JavaScript', link: '/coding-basis/javascript/' },
          {
            text: '数据结构和算法',
            link: '/coding-basis/data-structure-and-algorithm/',
          },
        ],
      },
      {
        text: '前端',
        items: [
          { text: '学习路径', link: '/frontend/roadmap/' },
          { text: '环境配置', link: '/frontend/environment/' },
          { text: '杂项', link: '/frontend/misc/' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' },
          { text: '测试', link: '/frontend/test/' },
          { text: 'Webpack4', link: '/frontend/webpack4/' },
          { text: '安全', link: '/frontend/safety/' },
          { text: '优化', link: '/frontend/optimization/' },
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
        'browser/',
        'html/',
        'css/',
        'javascript/',
        'data-structure-and-algorithm/',
      ],
      '/frontend/': [
        'roadmap/',
        'environment/',
        'misc/',
        'test/',
        'webpack4/',
        'safety/',
        'optimization/',
      ],
      '/': [''],
    },
    locales: {
      '/en/': {
        nav: [
          { text: 'Index', link: '/en/' },
          {
            text: 'Coding Basis',
            items: [
              { text: 'Math', link: '/en/coding-basis/math/' },
              {
                text: 'Computer Organization',
                link: '/en/coding-basis/computer-organization/',
              },
              { text: 'Internet', link: '/en/coding-basis/internet/' },
              { text: 'Git', link: '/en/coding-basis/git/' },
              { text: 'Browser', link: '/en/coding-basis/browser/' },
              { text: 'HTML', link: '/en/coding-basis/html/' },
              { text: 'CSS', link: '/en/coding-basis/css/' },
              { text: 'JavaScript', link: '/en/coding-basis/javascript/' },
              {
                text: 'Data Structure and Algorithm',
                link: '/en/coding-basis/data-structure-and-algorithm/',
              },
            ],
          },
          {
            text: 'Frontend',
            items: [
              { text: 'Roadmap', link: '/en/frontend/roadmap/' },
              { text: 'Environment', link: '/en/frontend/environment/' },
              { text: 'Misc', link: '/en/frontend/misc/' },
              { text: 'Vue', link: '/en/frontend/vue/' },
              { text: 'React', link: '/en/frontend/react/' },
              { text: 'Test', link: '/en/frontend/test/' },
              { text: 'Webpack4', link: '/en/frontend/webpack4/' },
              { text: 'Safety', link: '/en/frontend/safety/' },
              { text: 'Optimization', link: '/en/frontend/optimization/' },
            ],
          },
          { text: 'About', link: '/en/about/' },
        ],
        sidebar: {
          '/en/coding-basis/': [
            'math/',
            'computer-organization/',
            'internet/',
            'git/',
            'browser/',
            'html/',
            'css/',
            'javascript/',
            'data-structure-and-algorithm/',
          ],
          '/en/frontend/': [
            'roadmap/',
            'environment/',
            'misc/',
            'test/',
            'webpack4/',
            'safety/',
            'optimization/',
          ],
          '/en/': [''],
        },
      },
    },
    hostname,
    // 默认主题配置 https://vuepress-theme-hope.github.io/config/theme/default/
    sidebarDepth: 3,
    repo,
    repoLabel,
    docsBranch: 'origin',
    editLinks: true,
    editLinkText: '编辑此页面',
    // 主题功能配置 https://vuepress-theme-hope.github.io/config/theme/feature/
    blog: false,
    pageInfo: false,
    // 主题插件配置 https://vuepress-theme-hope.github.io/config/theme/plugin/
    mdEnhance: {
      lineNumbers: true,
    },
    comment: false,
    copyright: false,
    pwa: {
      favicon: '/favicon.ico',
      manifest: {
        icons: [
          { src: '/icons/w48.png', sizes: '48x48', type: 'image/png' },
          { src: '/icons/w72.png', sizes: '72x72', type: 'image/png' },
          { src: '/icons/w96.png', sizes: '96x96', type: 'image/png' },
          { src: '/icons/w144.png', sizes: '144x144', type: 'image/png' },
          { src: '/icons/w168.png', sizes: '168x168', type: 'image/png' },
          { src: '/icons/w192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/w256.png', sizes: '256x256', type: 'image/png' },
        ],
      },
    },
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
    ['@vssue/vuepress-plugin-vssue', vssuePluginConfig],
  ],
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4] },
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  evergreen: true,
});
