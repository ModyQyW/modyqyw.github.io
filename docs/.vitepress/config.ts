import { createWriteStream, readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { SitemapStream } from 'sitemap';
import { defineConfig } from 'vitepress';
import type { DefaultTheme } from 'vitepress';

const cwd = process.cwd();

// for sitemap
// see https://github.com/vuejs/vitepress/issues/520
const links: { url: string; lastmod?: number }[] = [];
const hostname = 'https://modyqyw.top';

const getMarkdownTitle = (filePath: string) => {
  const content = readFileSync(filePath, 'utf-8');
  const titles = content.match(/^\# .+/g);
  return titles?.[0]?.slice(2);
};

const getBlogsSidebar = () => {
  const docsDirPath = resolve(cwd, 'docs');
  const blogsDirPath = resolve(docsDirPath, 'blogs');
  const yearDirs = readdirSync(blogsDirPath).sort((a, b) => parseInt(b) - parseInt(a));
  return yearDirs
    .map((yearDir) => {
      const yearDirPath = resolve(blogsDirPath, yearDir);
      return {
        text: yearDir,
        items: readdirSync(yearDirPath)
          .map((fileName) => {
            const filePath = resolve(yearDirPath, fileName);
            const title = getMarkdownTitle(filePath);
            return {
              text: title,
              link: filePath.slice(docsDirPath.length),
            };
          })
          .sort((fileA, fileB) => {
            const fileACreatedAt = statSync(join(docsDirPath, fileA.link)).birthtimeMs;
            const fileBCreatedAt = statSync(join(docsDirPath, fileB.link)).birthtimeMs;
            return fileBCreatedAt - fileACreatedAt;
          }),
      };
    })
    .filter((yearDir) => (yearDir.items?.length ?? 0) !== 0) as DefaultTheme.SidebarGroup[];
};
const getBlogsNav = () => {
  const blogsSidebar = getBlogsSidebar();
  return {
    text: '博客',
    link: blogsSidebar[0].items[0].link,
  } as DefaultTheme.NavItem;
};

export default defineConfig({
  // app configs
  head: [
    [
      'script',
      {},
      `
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let r of registrations)
            r.unregister()
        })
        `,
    ],
  ],
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
});
