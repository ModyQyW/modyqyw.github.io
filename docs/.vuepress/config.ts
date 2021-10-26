import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions } from 'vuepress-vite';

const mode = process.env.MODE || 'github';
const hostname =
  mode === 'github' ? 'https://modyqyw.top' : 'https://modyqyw.gitee.io';
const repo =
  mode === 'github'
    ? 'https://github.com/ModyQyW/modyqyw.github.io'
    : 'https://gitee.com/ModyQyW/ModyQyW';
const repoLabel = mode === 'github' ? 'Github' : 'Gitee';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-Hans',
  title: "ModyQyW's Site",
  description: '基于 vuepress 建设的个人站，如有问题请尝试强制刷新。',
  head: [['link', { rel: 'manifest', href: '/manifest.webmanifest' }]],
  themeConfig: {
    hostname,
    navbar: [
      { text: '学习路径', link: '/roadmap/' },
      { text: '环境配置', link: '/environment/' },
      { text: '开发', link: '/development/' },
      { text: '安全', link: '/safety/' },
      { text: 'Webpack', link: '/webpack/' },
      { text: '关于', link: '/about/' },
    ],
    logo: '/images/w256.png',
    repo,
    repoLabel,
    sidebar: 'auto',
    sidebarDepth: 3,
  },
  markdown: {
    toc: {
      level: [2, 3, 4],
    },
    extractHeaders: {
      level: [2, 3, 4],
    },
  },
  plugins: [
    ['@vuepress/plugin-search'],
    ['@vuepress/pwa'],
    ['@vuepress/plugin-pwa-popup'],
    [
      '@vuepress/plugin-shiki',
      {
        theme: 'github-dark',
      },
    ],
    ['@vuepress/plugin-debug'],
    [
      '@snippetors/vuepress-plugin-code-copy',
      {
        backgroundTransition: false,
      },
    ],
    ['vuepress-plugin-sitemap2'],
  ],
});
