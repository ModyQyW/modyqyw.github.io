import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';
import { defineConfig } from 'vitepress';
import { getBlogsNav, getBlogsSidebar } from './helpers';

// for sitemap
// see https://github.com/vuejs/vitepress/issues/520
const links: { url: string; lastmod?: number }[] = [];
const hostname = 'https://modyqyw.top';

export default defineConfig({
  head: [
    // remove serviceWorker
    [
      'script',
      {},
      `
navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (const r of registrations) {
    if (r.scope.includes('modyqyw.top') || r.scope.includes('modyqyw.github.io')) {
      r.unregister();
    }
  }
});
        `,
    ],
    // add LXGW Wenkai font
    [
      'link',
      {
        href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont/style.min.css',
        rel: 'stylesheet',
      },
    ],
    // set LXGW Wenkai font
    [
      'style',
      {},
      `
:root {
  --vp-font-family-base: 'LXGW Wenkai', 'Inter var', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --vp-font-family-mono: 'LXGW WenKai Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}
      `,
    ],
  ],
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
  },
  title: "ModyQyW's Site",
  themeConfig: {
    nav: [
      { text: '速查表', link: '/cheat-sheets/' },
      { text: '教程', link: '/tutorials/' },
      getBlogsNav(),
      { text: '关于', link: '/about/' },
      { text: '赞赏', link: 'https://github.com/ModyQyW/sponsors' },
    ],
    sidebar: {
      '/cheat-sheet': [],
      '/tutorials': [],
      '/blogs': getBlogsSidebar(),
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ModyQyW/modyqyw.github.io',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present ModyQyW',
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || '',
      apiKey: process.env.ALGOLIA_API_KEY || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || '',
    },
  },
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
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
    sitemap.pipe(writeStream);
    for (const link of links) sitemap.write(link);
    sitemap.end();
    await new Promise((resolve) => writeStream.on('finish', resolve));
  },
});
