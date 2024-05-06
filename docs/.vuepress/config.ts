import { defineUserConfig, viteBundler } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { searchPlugin } from '@vuepress/plugin-search';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';
import { seoPlugin } from 'vuepress-plugin-seo2';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import fs from 'fs';
import path from 'path';

const hostname = 'https://modyqyw.top';

const getFiles = (dirs: string[]) =>
  fs.readdirSync(path.resolve('docs', ...dirs)).map((item) => `/${dirs.concat(item).join('/')}`);

const getOrganizeFiles = (dirs: string[]) => getFiles(['organize', ...dirs]);

const getSummarizeFiles = (dirs: string[]) => getFiles(['summarize', ...dirs]);

const organizeDevelopmentFiles = getOrganizeFiles(['development']);
const summarizeWebpack5Files = getSummarizeFiles(['webpack5']);
const summarizeWebpack4Files = getSummarizeFiles(['webpack4']);
const summarizeInActionFiles = getSummarizeFiles(['in-action']);

export default defineUserConfig({
  lang: 'zh-Hans',
  title: "ModyQyW's Site",
  description:
    '该站点不再维护，请访问 https://modyqyw.top。基于 vuepress 建设的个人站，如有问题请尝试清理 Service Worker 并强制刷新，也欢迎邮件联系。',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }],
  ],
  locales: {
    '/': {
      lang: 'zh-Hans',
      title: "ModyQyW's Site",
      description:
        '该站点不再维护，请访问 https://modyqyw.top。基于 vuepress 建设的个人站，如有问题请尝试清理 Service Worker 并强制刷新。也欢迎邮件联系。',
      head: [
        [
          'link',
          { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' },
        ],
      ],
    },
  },
  theme: defaultTheme({
    // @ts-ignore
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
          { text: '实际开发', link: summarizeInActionFiles[0] },
        ],
      },
      { text: '关于', link: '/about/' },
    ],
    logo: '/images/w256.png',
    repo: 'https://github.com/ModyQyW/modyqyw.github.io',
    repoLabel: 'GitHub',
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
            { text: '实际开发', link: summarizeInActionFiles[0] },
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
            { text: '实际开发', link: summarizeInActionFiles[0] },
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
            { text: '实际开发', link: summarizeInActionFiles[0] },
          ],
        },
      ],
      '/summarize/in-action/': [
        {
          text: '归纳输出',
          children: [
            '/summarize/what',
            '/summarize/environment/',
            '/summarize/server/',
            { text: 'webpack5', link: summarizeWebpack5Files[0] },
            { text: 'webpack4', link: summarizeWebpack4Files[0] },
            '/summarize/safety/',
            { text: '实际开发', children: summarizeInActionFiles },
          ],
        },
      ],
    },
    sidebarDepth: 3,
  }),
  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          strict: false,
        },
      },
    },
  }),
  // debug: process.env.NODE_ENV === 'development',
  markdown: {
    toc: {
      level: [2, 3, 4],
    },
    headers: {
      level: [2, 3, 4],
    },
  },
  plugins: [
    docsearchPlugin({
      apiKey: 'bc7c3bfb65339c025cdced95c50cb051',
      indexName: 'modyqyw',
      appId: 'Z14RO4ODPO',
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
