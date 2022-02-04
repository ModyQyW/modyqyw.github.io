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
              children: [
                '/organize/development/01.introduction.md',
                '/organize/development/02.technique.md',
                '/organize/development/03.computer-basics.md',
                '/organize/development/04.coding-fonts.md',
                '/organize/development/05.frontend-basics.md',
                '/organize/development/06.static-website-generation.md',
                '/organize/development/07.ui-and-ux.md',
                '/organize/development/08.specification.md',
                '/organize/development/09.cdn.md',
                '/organize/development/10.build.md',
                '/organize/development/11.debug.md',
                '/organize/development/12.test.md',
                '/organize/development/13.release-and-deploy.md',
                '/organize/development/14.ci-and-cd.md',
                '/organize/development/15.monitor.md',
                '/organize/development/16.devsecops.md',
                '/organize/development/17.vanilla.md',
                '/organize/development/18.react.md',
                '/organize/development/19.vue.md',
                '/organize/development/20.micro-frontend.md',
                '/organize/development/21.virtual-dom.md',
                '/organize/development/22.interview.md',
                '/organize/development/23.cli.md',
                '/organize/development/24.server.md',
                '/organize/development/25.continuous-growth.md',
                '/organize/development/26.we-media.md',
                '/organize/development/27.open-source.md',
                '/organize/development/28.independent-developer.md',
                '/organize/development/29.reference.md',
                '/organize/development/30.acknowledge.md',
              ],
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
              children: [
                '/summarize/webpack/01.introduction.md',
                '/summarize/webpack/02.why.md',
                '/summarize/webpack/03.what.md',
                '/summarize/webpack/04.basic-concepts.md',
                '/summarize/webpack/05.demo01.md',
                '/summarize/webpack/06.demo02.md',
                '/summarize/webpack/07.demo03.md',
                '/summarize/webpack/08.demo04.md',
                '/summarize/webpack/09.end.md',
                '/summarize/webpack/10.expansion.md',
                '/summarize/webpack/11.reference.md',
                '/summarize/webpack/12.acknowledgement.md',
              ],
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
