import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';
import unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';
import {
  getBlogsNav,
  getBlogsSidebar,
  getTutorialsNav,
  getTutorialsSidebar,
} from './helpers';
import {
  getCheatSheetsNav,
  getCheatSheetsSidebar,
} from './helpers/cheat-sheets';

// for sitemap
// see https://github.com/vuejs/vitepress/issues/520
const links: { lastmod?: number; url: string }[] = [];
const hostname = 'https://modyqyw.top';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // https://vitepress.dev/reference/site-config#title
  title: "ModyQyW's Site",
  // https://vitepress.dev/reference/site-config#head
  head: [
    [
      'script',
      {
        async: 'true',
        crossorigin: 'anonymous',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3102250747488251',
      },
    ],
  ],
  // https://vitepress.dev/reference/site-config#lang
  lang: 'zh-CN',
  // https://vitepress.dev/reference/site-config#lastupdated
  lastUpdated: true,
  // https://vitepress.dev/reference/site-config#markdown
  markdown: {
    lineNumbers: true,
    toc: {
      level: [1, 2, 3, 4, 5, 6],
    },
  },
  // https://vitepress.dev/reference/site-config#vite
  vite: {
    plugins: [unocss()],
  },
  // https://vitepress.dev/reference/site-config#buildend
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
    sitemap.pipe(writeStream);
    for (const link of links) sitemap.write(link);
    sitemap.end();
    await new Promise((resolve) => writeStream.on('finish', resolve));
  },
  // https://vitepress.dev/reference/site-config#transformhtml
  transformHtml: (_, id, { pageData }) => {
    // clean urls mode
    // if (!/[\\/]404\.html$/.test(id)) {
    //   links.push({
    //     url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
    //     lastmod: pageData.lastUpdated,
    //   });
    // }
    // not clean urls mode
    if (!/[/\\]404\.html$/.test(id)) {
      links.push({
        lastmod: pageData.lastUpdated,
        url: pageData.relativePath.replace(/\.md$/, '.html'),
      });
    }
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#logo
    logo: '/images/w.svg',
    // https://vitepress.dev/reference/default-theme-config#nav
    nav: [
      getCheatSheetsNav(),
      getTutorialsNav(),
      getBlogsNav(),
      { link: '/about/', text: '关于' },
      { link: 'https://github.com/ModyQyW/sponsors', text: '赞赏' },
    ],
    // https://vitepress.dev/reference/default-theme-config#sidebar
    sidebar: {
      '/blogs': getBlogsSidebar(),
      '/cheat-sheet': getCheatSheetsSidebar(),
      '/tutorials': getTutorialsSidebar(),
    },
    // https://vitepress.dev/reference/default-theme-config#outline
    outline: 'deep',
    // https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ModyQyW/modyqyw.github.io',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/ModyQyW',
      },
    ],
    // https://vitepress.dev/reference/default-theme-config#footer
    footer: {
      copyright: 'Copyright © 2020-present ModyQyW',
      message: 'Released under the MIT License.',
    },
    // https://vitepress.dev/reference/default-theme-config#editlink
    editLink: {
      pattern:
        'https://github.com/ModyQyW/modyqyw.github.io/edit/main/docs/:path',
      text: '编辑页面',
    },
    // https://vitepress.dev/reference/default-theme-config#lastupdated
    lastUpdated: {
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
      },
      text: '最后更新于',
    },
    // https://vitepress.dev/reference/default-theme-config#algolia
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY || '',
      appId: process.env.ALGOLIA_APP_ID || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || '',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonAriaLabel: '搜索文档',
          buttonText: '搜索文档',
        },
        modal: {
          errorScreen: {
            helpText: '你可能需要检查你的网络连接',
            titleText: '无法获取结果',
          },
          footer: {
            closeText: '关闭',
            navigateText: '切换',
            searchByText: '搜索提供者',
            selectText: '选择',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            reportMissingResultsLinkText: '点击反馈',
            reportMissingResultsText: '你认为该查询应该有结果？',
            suggestedQueryText: '你可以尝试查询',
          },
          searchBox: {
            cancelButtonAriaLabel: '取消',
            cancelButtonText: '取消',
            resetButtonAriaLabel: '清除查询条件',
            resetButtonTitle: '清除查询条件',
          },
          startScreen: {
            favoriteSearchesTitle: '收藏',
            noRecentSearchesText: '没有搜索历史',
            recentSearchesTitle: '搜索历史',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            saveRecentSearchButtonTitle: '保存至搜索历史',
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: '外观',
    // https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: '菜单',
    // https://vitepress.dev/reference/default-theme-config#returntotoplabel
    returnToTopLabel: '回到顶部',
    // https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: '改变语言',
  },
});
