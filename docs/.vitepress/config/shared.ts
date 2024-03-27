import unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';
import { search as zhHansSearch } from './zh-hans';

export const shared = defineConfig({
  // https://vitepress.dev/reference/site-config#title
  title: "ModyQyW's Site",

  // https://vitepress.dev/reference/site-config#head
  head: [
    // icon
    ['link', { href: '/images/w.svg', rel: 'icon', type: 'image/svg+xml' }],
    ['link', { href: '/images/w256.png', rel: 'icon', type: 'image/png' }],
    // Open Graph
    ['meta', { content: 'website', property: 'og:type' }],
    ['meta', { content: "ModyQyW's Site", property: 'og:title' }],
    ['meta', { content: "ModyQyW's Site", property: 'og:site_name' }],
    // Google Analytics
    [
      'script',
      {
        async: '',
        src: `https://www.googletagmanager.com/gtag/js?id=G-8TCYQ7S61C`,
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8TCYQ7S61C');`,
    ],
    // Google AdSense
    [
      'script',
      {
        async: '',
        crossorigin: 'anonymous',
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3102250747488251`,
      },
    ],
  ],

  // https://vitepress.dev/reference/site-config#cleanurls
  cleanUrls: true,

  // https://vitepress.dev/reference/site-config#metachunk
  metaChunk: true,

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

  // https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: 'https://modyqyw.top',
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#logo
    logo: '/images/w.svg',

    // https://vitepress.dev/reference/default-theme-config#outline
    outline: 'deep',

    // https://vitepress.dev/reference/default-theme-config#footer
    footer: {
      copyright: 'Copyright © 2020-present ModyQyW',
      message: 'Released under the MIT License.',
    },

    // https://vitepress.dev/reference/default-theme-config#sociallinks
    socialLinks: [
      {
        ariaLabel: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ModyQyW/modyqyw.github.io',
      },
      {
        ariaLabel: 'Twitter',
        icon: 'x',
        link: 'https://twitter.com/ModyQyW',
      },
      {
        ariaLabel: '掘金',
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.316l7.454-5.88l-2.022-1.625L12 11.1l-.004.003l-5.432-4.288l-2.02 1.624l7.452 5.88Zm0-7.247l2.89-2.298L12 2.453l-.004-.005l-2.884 2.318l2.884 2.3Zm0 11.266l-.005.002l-9.975-7.87L0 12.088l.194.156l11.803 9.308l7.463-5.885L24 12.085l-2.023-1.624Z"/></svg>`,
        },
        link: 'https://juejin.cn/user/676954894513319',
      },
      // {
      //   icon: {
      //     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574c1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76c1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373c.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373c.347 0 .662.151.929.4c.267.249.391.551.391.907c0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773c-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893c.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773c.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894c-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373c.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96c-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947c.258-.257.574-.386.947-.386m8 0c.373 0 .684.124.933.373c.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96c-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96c.249-.249.56-.373.933-.373"/></svg>`,
      //   },
      //   link: 'https://space.bilibili.com/37047834',
      //   ariaLabel: '哔哩哔哩 bilibili',
      // },
      {
        ariaLabel: 'medium',
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12m7.42 0c0 3.54-1.51 6.42-3.38 6.42c-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42s3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75c-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12"/></svg>`,
        },
        link: 'https://medium.com/@ModyQyW',
      },
    ],

    // https://vitepress.dev/reference/default-theme-search
    search: {
      options: {
        apiKey: process.env.ALGOLIA_API_KEY || '',
        appId: process.env.ALGOLIA_APP_ID || '',
        indexName: process.env.ALGOLIA_INDEX_NAME || '',
        locales: { ...zhHansSearch },
      },
      provider: 'algolia',
    },
  },
});
