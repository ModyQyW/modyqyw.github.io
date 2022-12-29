import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';
import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

// for sitemap
// see https://github.com/vuejs/vitepress/issues/520
const links: { url: string; lastmod?: number }[] = [];
const hostname = 'https://modyqyw.top';

export default withMermaid(
  defineConfig({
    // app configs
    lang: 'zh-Hans',
    lastUpdated: true,
    markdown: {
      lineNumbers: true,
      theme: 'github-dark',
    },
    title: "ModyQyW's Site",
    // theme configs
    themeConfig: {
      nav: [
        { text: '速查表', link: '/cheat-sheets/', activeMatch: '/cheat-sheets/' },
        { text: '教程', link: '/tutorials/', activeMatch: '/tutorials/' },
        { text: '博客', link: '/blogs/', activeMatch: '/blogs/' },
        { text: '关于', link: '/about/' },
        { text: '赞赏', link: 'https://github.com/ModyQyW/sponsors' },
      ],
      sidebar: {
        '/cheat-sheet': [],
        '/tutorials': [],
        '/blogs': [],
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
        appId: process.env.ALGOLIA_APP_ID!,
        apiKey: process.env.ALGOLIA_API_KEY!,
        indexName: process.env.ALGOLIA_INDEX_NAME!,
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
      if (!/[\\/]404\.html$/.test(id)) {
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
      links.forEach((link) => sitemap.write(link));
      sitemap.end();
      await new Promise((r) => writeStream.on('finish', r));
    },
  }),
);
