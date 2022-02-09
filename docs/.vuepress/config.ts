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
const apiKey = mode === 'github' ? 'githubApiKey' : 'giteeApiKey';
const indexName = mode === 'github' ? 'githubIndexName' : 'giteeIndexName';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-Hans',
  title: "ModyQyW's Site",
  description: '基于 vuepress 建设的个人站，如有问题请尝试强制刷新或邮件联系。',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }],
  ],
  themeConfig: {
    hostname,
    navbar: [
      {
        text: '收集整理',
        children: [
          '/organize/what',
          '/organize/conduct/',
          '/organize/roadmap/',
          { text: '开发相关', link: '/organize/development/01.introduction.md' },
        ],
      },
      {
        text: '归纳输出',
        children: [
          '/summarize/what',
          '/summarize/environment/',
          '/summarize/server/',
          { text: 'webpack', link: '/summarize/webpack/01.introduction.md' },
          '/summarize/safety/',
        ],
      },
      { text: 'leetcode', link: '/leetcode/0001.two-sum.md' },
      { text: '关于', link: '/about/' },
    ],
    logo: '/images/w256.png',
    repo,
    repoLabel,
    sidebar: {
      '/organize/': [
        {
          text: '收集整理',
          children: [
            '/organize/what',
            '/organize/conduct/',
            '/organize/roadmap/',
            { text: '开发相关', link: '/organize/development/01.introduction.md' },
          ],
        },
      ],
      '/organize/development/': [
        {
          text: '收集整理',
          children: [
            '/organize/what',
            '/organize/conduct/',
            '/organize/roadmap/',
            {
              text: '开发相关',
              children: fs
                .readdirSync(path.resolve('docs', 'organize', 'development'))
                .map((item) => `/organize/development/${item}`),
            },
          ],
        },
      ],
      '/summarize/': [
        {
          text: '归纳输出',
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { text: 'webpack', link: '/summarize/webpack/01.introduction.md' },
            '/summarize/safety/',
          ],
        },
      ],
      '/summarize/webpack/': [
        {
          text: '归纳输出',
          children: [
            '/summarize/environment/',
            '/summarize/server/',
            {
              text: 'webpack',
              children: fs
                .readdirSync(path.resolve('docs', 'summarize', 'webpack'))
                .map((item) => `/summarize/webpack/${item}`),
            },
            '/summarize/safety/',
          ],
        },
      ],
      '/leetcode/': [
        {
          text: 'leetcode',
          children: fs
            .readdirSync(path.resolve('docs', 'leetcode'))
            .map((item) => `/leetcode/${item}`),
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
    // [
    //   '@vuepress/plugin-docsearch',
    //   {
    //     apiKey,
    //     indexName,
    //   },
    // ],
    ['@vuepress/plugin-search'],
    ['@vuepress/plugin-pwa'],
    ['@vuepress/plugin-pwa-popup'],
    [
      '@vuepress/plugin-shiki',
      {
        theme: 'github-dark',
      },
    ],
    // ['vuepress-plugin-copy-code2'],
    ['vuepress-plugin-seo2', { hostname }],
    ['vuepress-plugin-sitemap2', { hostname }],
  ],
});
