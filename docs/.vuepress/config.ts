import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions } from 'vuepress-vite';
import fs from 'fs';
import path from 'path';

const mode = process.env.MODE || 'github';
const hostname = mode === 'github' ? 'https://modyqyw.top' : 'https://modyqyw.gitee.io';
const repo =
  mode === 'github'
    ? 'https://github.com/ModyQyW/modyqyw.github.io'
    : 'https://gitee.com/ModyQyW/ModyQyW';
const repoLabel = mode === 'github' ? 'Github' : 'Gitee';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-Hans',
  title: "ModyQyW's Site",
  description: '基于 vuepress 建设的个人站，如有问题请尝试强制刷新。',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }],
  ],
  themeConfig: {
    hostname,
    navbar: [
      {
        text: '整理归纳',
        children: [
          {
            text: '收集整理',
            children: ['/organize-and-summarize/roadmap/', '/organize-and-summarize/development/'],
          },
          {
            text: '归纳输出',
            children: [
              '/organize-and-summarize/environment/',
              '/organize-and-summarize/safety/',
              '/organize-and-summarize/webpack/',
              '/organize-and-summarize/server/',
              {
                text: 'leetcode',
                link: '/organize-and-summarize/leetcode/0001.two-sum.md',
              },
            ],
          },
        ],
      },
      { text: '关于', link: '/about/' },
    ],
    logo: '/images/w256.png',
    repo,
    repoLabel,
    sidebar: {
      '/organize-and-summarize/': [
        {
          text: '收集整理',
          children: ['/organize-and-summarize/roadmap/', '/organize-and-summarize/development/'],
        },
        {
          text: '归纳输出',
          children: [
            '/organize-and-summarize/environment/',
            '/organize-and-summarize/safety/',
            '/organize-and-summarize/webpack/',
            '/organize-and-summarize/server/',
            {
              text: 'leetcode',
              children: fs.readdirSync(path.resolve('docs', 'organize-and-summarize', 'leetcode')),
            },
          ],
        },
      ],
    },
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
    // ['vuepress-plugin-copy-code2'],
    ['vuepress-plugin-seo2'],
    ['vuepress-plugin-sitemap2'],
  ],
});
