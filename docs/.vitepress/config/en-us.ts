import {
  getBlogsNav,
  getBlogsSidebar,
  getCheatSheetsNav,
  getCheatSheetsSidebar,
  getTutorialsNav,
  getTutorialsSidebar,
} from '../helpers';
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';

// https://vitepress.dev/guide/i18n
export const enUS: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
} = {
  head: [
    ['meta', { content: 'https://modyqyw.top/en-US', property: 'og:url' }],
  ],
  label: 'English',
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#nav
    nav: [
      getCheatSheetsNav('en-US'),
      getTutorialsNav('en-US'),
      getBlogsNav('en-US'),
      { link: '/en-US/about/', text: 'About' },
      { link: 'https://github.com/ModyQyW/sponsors', text: 'Sponsor' },
    ],
    // https://vitepress.dev/reference/default-theme-config#sidebar
    sidebar: {
      '/en-US/blogs': getBlogsSidebar('en-US'),
      '/en-US/cheat-sheet': getCheatSheetsSidebar('en-US'),
      '/en-US/tutorials': getTutorialsSidebar('en-US'),
    },
    // https://vitepress.dev/reference/default-theme-config#editlink
    editLink: {
      pattern:
        'https://github.com/ModyQyW/modyqyw.github.io/edit/main/docs/:path',
      text: 'Edit this page',
    },
    // https://vitepress.dev/reference/default-theme-config#lastupdated
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        hourCycle: 'h24',
        timeStyle: 'short',
      },
      text: 'Last updated',
    },
  },
};
