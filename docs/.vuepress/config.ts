import fs from 'node:fs';
import path from 'node:path';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { searchPlugin } from '@vuepress/plugin-search';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig, viteBundler } from 'vuepress';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';
import { seoPlugin } from 'vuepress-plugin-seo2';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';

const hostname = 'https://modyqyw.top';

const getFiles = (dirs: string[]) =>
  fs
    .readdirSync(path.resolve('docs', ...dirs))
    .map((item) => `/${[...dirs, ...item].join('/')}`);

const getOrganizeFiles = (dirs: string[]) => getFiles(['organize', ...dirs]);

const getSummarizeFiles = (dirs: string[]) => getFiles(['summarize', ...dirs]);

const organizeDevelopmentFiles = getOrganizeFiles(['development']);
const summarizeWebpack5Files = getSummarizeFiles(['webpack5']);
const summarizeWebpack4Files = getSummarizeFiles(['webpack4']);
const summarizeInActionFiles = getSummarizeFiles(['in-action']);

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          strict: false,
        },
      },
    },
  }),
  description:
    '基于 vuepress 建设的个人站，如有问题请尝试清理 Service Worker 并强制刷新，也欢迎邮件联系。最近正在筹划改版。',
  head: [
    [
      'link',
      {
        crossorigin: 'use-credentials',
        href: '/manifest.webmanifest',
        rel: 'manifest',
      },
    ],
  ],
  lang: 'zh-Hans',
  locales: {
    '/': {
      description:
        '基于 vuepress 建设的个人站，如有问题请尝试清理 Service Worker 并强制刷新。也欢迎邮件联系。',
      head: [
        [
          'link',
          {
            crossorigin: 'use-credentials',
            href: '/manifest.webmanifest',
            rel: 'manifest',
          },
        ],
      ],
      lang: 'zh-Hans',
      title: "ModyQyW's Site",
    },
  },
  theme: defaultTheme({
    hostname,
    logo: '/images/w.svg',
    navbar: [
      {
        children: [
          '/organize/what',
          '/organize/conduct/',
          '/organize/roadmap/',
          { link: organizeDevelopmentFiles[0], text: '开发相关' },
        ],
        text: '收集整理',
      },
      {
        children: [
          '/summarize/what',
          '/summarize/environment/',
          '/summarize/server/',
          { link: summarizeWebpack5Files[0], text: 'webpack5' },
          { link: summarizeWebpack4Files[0], text: 'webpack4' },
          '/summarize/safety/',
          { link: summarizeInActionFiles[0], text: '实际开发' },
        ],
        text: '归纳输出',
      },
      { link: '/about/', text: '关于' },
    ],
    repo: 'https://github.com/ModyQyW/modyqyw.github.io',
    repoLabel: 'GitHub',
    sidebar: {
      '/organize/': [
        {
          children: [
            '/organize/what',
            '/organize/conduct/',
            '/organize/roadmap/',
            { link: organizeDevelopmentFiles[0], text: '开发相关' },
          ],
          text: '收集整理',
        },
      ],
      '/organize/development/': [
        {
          children: [
            '/organize/what',
            '/organize/conduct/',
            '/organize/roadmap/',
            { children: organizeDevelopmentFiles, text: '开发相关' },
          ],
          text: '收集整理',
        },
      ],
      '/summarize/': [
        {
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { link: summarizeWebpack5Files[0], text: 'webpack5' },
            { link: summarizeWebpack4Files[0], text: 'webpack4' },
            '/summarize/safety/',
            { link: summarizeInActionFiles[0], text: '实际开发' },
          ],
          text: '归纳输出',
        },
      ],
      '/summarize/in-action/': [
        {
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { link: summarizeWebpack5Files[0], text: 'webpack5' },
            { link: summarizeWebpack4Files[0], text: 'webpack4' },
            '/summarize/safety/',
            { children: summarizeInActionFiles, text: '实际开发' },
          ],
          text: '归纳输出',
        },
      ],
      '/summarize/webpack4/': [
        {
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { link: summarizeWebpack5Files[0], text: 'webpack5' },
            { children: summarizeWebpack4Files, text: 'webpack4' },
            '/summarize/safety/',
            { link: summarizeInActionFiles[0], text: '实际开发' },
          ],
          text: '归纳输出',
        },
      ],
      '/summarize/webpack5/': [
        {
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { children: summarizeWebpack5Files, text: 'webpack5' },
            { link: summarizeWebpack4Files[0], text: 'webpack4' },
            '/summarize/safety/',
            { link: summarizeInActionFiles[0], text: '实际开发' },
          ],
          text: '归纳输出',
        },
      ],
    },
    sidebarDepth: 3,
  }),
  title: "ModyQyW's Site",
  // debug: process.env.NODE_ENV === 'development',
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
    toc: {
      level: [2, 3, 4],
    },
  },
  plugins: [
    docsearchPlugin({
      apiKey: 'bc7c3bfb65339c025cdced95c50cb051',
      appId: 'Z14RO4ODPO',
      indexName: 'modyqyw',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
    shikiPlugin({
      theme: 'github-dark',
    }),
    copyCodePlugin({
      locales: {
        '/': {
          copy: '复制成功',
          hint: '复制',
        },
      },
    }),
    seoPlugin({
      hostname,
    }),
    sitemapPlugin({
      hostname,
    }),
  ],
});
