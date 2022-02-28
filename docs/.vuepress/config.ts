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

const getFiles = (dirs: string[]) =>
  fs.readdirSync(path.resolve('docs', ...dirs)).map((item) => `/${dirs.concat(item).join('/')}`);

const getOrganizeFiles = (dirs: string[]) => getFiles(['organize', ...dirs]);

const getSummarizeFiles = (dirs: string[]) => getFiles(['summarize', ...dirs]);

const organizeDevelopmentFiles = getOrganizeFiles(['development']);
const summarizeWebpack5Files = getSummarizeFiles(['webpack5']);
const summarizeWebpack4Files = getSummarizeFiles(['webpack4']);
const summarizeLeetcodeFiles = getSummarizeFiles(['leetcode']);
const summarizeVue3Files = getSummarizeFiles(['vue3']);

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-Hans',
  title: "ModyQyW's Site",
  description: '基于 vuepress 建设的个人站，如有问题请尝试强制刷新或邮件联系。',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }],
  ],
  locales: {
    '/': {
      lang: 'zh-Hans',
      title: "ModyQyW's Site",
      description: '基于 vuepress 建设的个人站，如有问题请尝试强制刷新或邮件联系。',
      head: [
        [
          'link',
          { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' },
        ],
      ],
    },
  },
  themeConfig: {
    hostname,
    navbar: [
      {
        text: '收集整理',
        children: [
          '/organize/what',
          '/organize/conduct/',
          '/organize/roadmap/',
          { text: '开发相关', link: organizeDevelopmentFiles[0] },
        ],
      },
      {
        text: '归纳输出',
        children: [
          '/summarize/what',
          '/summarize/environment/',
          '/summarize/server/',
          { text: 'webpack5', link: summarizeWebpack5Files[0] },
          { text: 'webpack4', link: summarizeWebpack4Files[0] },
          '/summarize/safety/',
          { text: 'leetcode', link: summarizeLeetcodeFiles[0] },
          { text: 'vue3', link: summarizeVue3Files[0] },
        ],
      },
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
            { text: '开发相关', link: organizeDevelopmentFiles[0] },
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
            { text: '开发相关', children: organizeDevelopmentFiles },
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
            { text: 'webpack5', link: summarizeWebpack5Files[0] },
            { text: 'webpack4', link: summarizeWebpack4Files[0] },
            '/summarize/safety/',
            { text: 'leetcode', link: summarizeLeetcodeFiles[0] },
            { text: 'vue3', link: summarizeVue3Files[0] },
          ],
        },
      ],
      '/summarize/webpack5/': [
        {
          text: '归纳输出',
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { text: 'webpack5', children: summarizeWebpack5Files },
            { text: 'webpack4', link: summarizeWebpack4Files[0] },
            '/summarize/safety/',
            { text: 'leetcode', link: summarizeLeetcodeFiles[0] },
            { text: 'vue3', link: summarizeVue3Files[0] },
          ],
        },
      ],
      '/summarize/webpack4/': [
        {
          text: '归纳输出',
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { text: 'webpack5', link: summarizeWebpack5Files[0] },
            { text: 'webpack4', children: summarizeWebpack4Files },
            '/summarize/safety/',
            { text: 'leetcode', link: summarizeLeetcodeFiles[0] },
            { text: 'vue3', link: summarizeVue3Files[0] },
          ],
        },
      ],
      '/summarize/leetcode/': [
        {
          text: '归纳输出',
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { text: 'webpack5', link: summarizeWebpack5Files[0] },
            { text: 'webpack4', link: summarizeWebpack4Files[0] },
            '/summarize/safety/',
            { text: 'leetcode', children: summarizeLeetcodeFiles },
            { text: 'vue3', link: summarizeVue3Files[0] },
          ],
        },
      ],
      '/summarize/vue3': [
        {
          text: '归纳输出',
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { text: 'webpack5', link: summarizeWebpack5Files[0] },
            { text: 'webpack4', link: summarizeWebpack4Files[0] },
            '/summarize/safety/',
            { text: 'leetcode', link: summarizeLeetcodeFiles[0] },
            { text: 'vue3', children: summarizeVue3Files },
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
    ['vuepress-plugin-copy-code2'],
    ['vuepress-plugin-seo2', { hostname }],
    ['vuepress-plugin-sitemap2', { hostname }],
  ],
});
