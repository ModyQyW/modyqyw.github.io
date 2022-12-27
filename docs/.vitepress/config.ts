import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

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
        appId: 'Z14RO4ODPO',
        apiKey: 'bc7c3bfb65339c025cdced95c50cb051',
        indexName: 'modyqyw',
      },
    },
  }),
);
