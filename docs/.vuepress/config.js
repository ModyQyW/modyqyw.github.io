const { config } = require('vuepress-theme-hope');

const mode = process.env.MODE || 'github';
const hostname =
  mode === 'github' ? 'https://modyqyw.top' : 'https://modyqyw.gitee.io';
const repo =
  mode === 'github'
    ? 'https://github.com/ModyQyW/modyqyw.github.io'
    : 'https://gitee.com/ModyQyW/ModyQyW';
const repoLabel = mode === 'github' ? 'Github' : 'Gitee';

module.exports = config({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "ModyQyW's Site",
      description:
        '基于 vuepress 和 vuepress-theme-hope 打造的个人网站，如有问题请尝试强制刷新。',
    },
  },
  themeConfig: {
    // 主题配置 https://vuepress-theme-hope.github.io/config/theme/
    author: 'ModyQyW <wurui7@mail3.sysu.edu.cn>',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路径', link: '/roadmap/' },
      { text: '环境配置', link: '/environment/' },
      { text: '开发', link: '/development/' },
      { text: '优化', link: '/optimization/' },
      { text: '安全', link: '/safety/' },
      { text: 'Webpack4', link: '/webpack4/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: 'auto',
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
    // ['@vssue/vuepress-plugin-vssue', vssuePluginConfig],
  ],
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [2, 3, 4] },
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  evergreen: true,
});
