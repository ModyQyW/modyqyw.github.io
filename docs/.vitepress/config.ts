import { defineConfig } from 'vitepress';

const mode = process.env.MODE || 'github';
const algoliaAppId = mode === 'github' ? 'Z14RO4ODPO' : 'giteeAppId';
const algoliaApiKey = mode === 'github' ? 'bc7c3bfb65339c025cdced95c50cb051' : 'giteeApiKey';
const algoliaIndexName = mode === 'github' ? 'modyqyw' : 'giteeIndexName';

export default defineConfig({
  // app configs
  description: '基于 Vitepress 建设的个人站。',
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
      { text: '生活', link: '/life/health', activeMatch: '/life/' },
      { text: '工作', link: '/work/', activeMatch: '/work/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      '/life': [
        {
          text: '生活',
          items: [
            { text: '健康', link: '/life/health' },
            { text: '规划', link: '/life/plan' },
            { text: '沟通', link: '/life/communication' },
          ],
        },
      ],
      '/work': [],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ModyQyW/modyqyw.github.io',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--simple-icons"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"></path></svg>`,
        },
        link: 'https://gitee.com/ModyQyW/ModyQyW',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present ModyQyW',
    },
    algolia: {
      appId: algoliaAppId,
      apiKey: algoliaApiKey,
      indexName: algoliaIndexName,
    },
  },
});
