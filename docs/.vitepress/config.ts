import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';
import { defineConfig } from 'vitepress';
import unocss from 'unocss/vite';
import { getTutorialsNav, getBlogsNav, getTutorialsSidebar, getBlogsSidebar } from './helpers';

// for sitemap
// see https://github.com/vuejs/vitepress/issues/520
const links: { url: string; lastmod?: number }[] = [];
const hostname = 'https://modyqyw.top';

export default defineConfig({
  // https://vitepress.vuejs.org/config/app-configs#lang
  lang: 'zh-CN',
  // https://vitepress.vuejs.org/config/app-configs#lastupdated
  lastUpdated: true,
  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    toc: {
      level: [1, 2, 3],
    },
  },
  // https://vitepress.vuejs.org/config/app-configs#title
  title: "ModyQyW's Site",
  // vite config
  vite: {
    plugins: [unocss()],
  },
  // https://vitepress.vuejs.org/config/app-configs#transformhtml
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
        url: pageData.relativePath.replace(/\.md$/, '.html'),
        lastmod: pageData.lastUpdated,
      });
    }
  },
  // https://vitepress.vuejs.org/config/app-configs#buildend
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
    sitemap.pipe(writeStream);
    for (const link of links) sitemap.write(link);
    sitemap.end();
    await new Promise((resolve) => writeStream.on('finish', resolve));
  },
  // https://vitepress.vuejs.org/config/theme-configs
  themeConfig: {
    // https://vitepress.vuejs.org/config/theme-configs#logo
    logo: '/images/w.svg',
    // https://vitepress.vuejs.org/config/theme-configs#nav
    nav: [
      { text: '速查表', link: '/cheat-sheets/' },
      getTutorialsNav(),
      getBlogsNav(),
      { text: '关于', link: '/about/' },
      { text: '赞赏', link: 'https://github.com/ModyQyW/sponsors' },
    ],
    // https://vitepress.vuejs.org/config/theme-configs#sidebar
    sidebar: {
      '/cheat-sheet': [],
      '/tutorials': getTutorialsSidebar(),
      '/blogs': getBlogsSidebar(),
    },
    // https://vitepress.vuejs.org/config/theme-configs#outline
    outline: 'deep',
    // https://vitepress.vuejs.org/config/theme-configs#sociallinks
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ModyQyW/modyqyw.github.io',
      },
    ],
    // https://vitepress.vuejs.org/config/theme-configs#footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present ModyQyW',
    },
    // https://vitepress.vuejs.org/config/theme-configs#editlink
    editLink: {
      pattern: 'https://github.com/ModyQyW/modyqyw.github.io/edit/main/docs/:path',
      text: '编辑页面',
    },
    // https://vitepress.vuejs.org/config/theme-configs#lastupdatedtext
    lastUpdatedText: '最后更新于',
    // https://vitepress.vuejs.org/config/theme-configs#algolia
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || '',
      apiKey: process.env.ALGOLIA_API_KEY || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || '',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: '选择',
            navigateText: '切换',
            navigateUpKeyAriaLabel: '上一个',
            navigateDownKeyAriaLabel: '下一个',
            closeText: '关闭',
            closeKeyAriaLabel: '关闭',
            searchByText: '搜索提供者',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接',
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈',
          },
        },
      },
    },
    // https://vitepress.vuejs.org/config/theme-configs#darkmodeswitchlabel
    darkModeSwitchLabel: '外观',
    // https://vitepress.vuejs.org/config/theme-configs#sidebarmenulabel
    sidebarMenuLabel: '菜单',
    // https://vitepress.vuejs.org/config/theme-configs#returntotoplabel
    returnToTopLabel: '回到顶部',
  },
});
