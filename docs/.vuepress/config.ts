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
        text: '整理归纳',
        children: [
          {
            text: '收集整理',
            children: [
              '/organize-and-summarize/conduct/',
              '/organize-and-summarize/roadmap/',
              '/organize-and-summarize/development/',
            ],
          },
          {
            text: '归纳输出',
            children: [
              '/organize-and-summarize/environment/',
              '/organize-and-summarize/server/',
              {
                text: 'webpack',
                link: '/organize-and-summarize/webpack/introduction.md',
              },
              '/organize-and-summarize/safety/',
            ],
          },
        ],
      },
      { text: 'leetcode', link: '/leetcode/0001.two-sum.md' },
      { text: '关于', link: '/about/' },
    ],
    logo: '/images/w256.png',
    repo,
    repoLabel,
    sidebar: {
      '/organize-and-summarize/conduct/': [
        {
          text: '收集整理',
          children: [
            '/organize-and-summarize/conduct/',
            '/organize-and-summarize/roadmap/',
            '/organize-and-summarize/development/',
          ],
        },
      ],
      '/organize-and-summarize/roadmap/': [
        {
          text: '收集整理',
          children: [
            '/organize-and-summarize/conduct/',
            '/organize-and-summarize/roadmap/',
            '/organize-and-summarize/development/',
          ],
        },
      ],
      '/organize-and-summarize/development/': [
        {
          text: '收集整理',
          children: [
            '/organize-and-summarize/conduct/',
            '/organize-and-summarize/roadmap/',
            '/organize-and-summarize/development/',
          ],
        },
      ],
      '/organize-and-summarize/environment/': [
        {
          text: '归纳输出',
          children: [
            '/organize-and-summarize/environment/',
            '/organize-and-summarize/server/',
            { text: 'webpack', link: '/organize-and-summarize/webpack/introduction.md' },
            '/organize-and-summarize/safety/',
          ],
        },
      ],
      '/organize-and-summarize/server/': [
        {
          text: '归纳输出',
          children: [
            '/organize-and-summarize/environment/',
            '/organize-and-summarize/server/',
            { text: 'webpack', link: '/organize-and-summarize/webpack/introduction.md' },
            '/organize-and-summarize/safety/',
          ],
        },
      ],
      '/organize-and-summarize/webpack/': [
        {
          text: '归纳输出',
          children: [
            '/organize-and-summarize/environment/',
            '/organize-and-summarize/server/',
            {
              text: 'webpack',
              children: [
                '/organize-and-summarize/webpack/introduction.md',
                '/organize-and-summarize/webpack/why.md',
                '/organize-and-summarize/webpack/what.md',
                '/organize-and-summarize/webpack/basic-concepts.md',
                '/organize-and-summarize/webpack/demo01.md',
                '/organize-and-summarize/webpack/demo02.md',
                '/organize-and-summarize/webpack/demo03.md',
                '/organize-and-summarize/webpack/demo04.md',
                '/organize-and-summarize/webpack/expansion.md',
                '/organize-and-summarize/webpack/end.md',
                '/organize-and-summarize/webpack/reference.md',
                '/organize-and-summarize/webpack/acknowledgement.md',
              ],
            },
            '/organize-and-summarize/safety/',
          ],
        },
      ],
      '/organize-and-summarize/safety/': [
        {
          text: '归纳输出',
          children: [
            '/organize-and-summarize/environment/',
            '/organize-and-summarize/server/',
            { text: 'webpack', link: '/organize-and-summarize/webpack/introduction.md' },
            '/organize-and-summarize/safety/',
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
