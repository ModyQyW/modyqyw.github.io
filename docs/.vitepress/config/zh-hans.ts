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
export const zhHans: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  link?: string;
} = {
  head: [['meta', { content: 'https://modyqyw.top/', property: 'og:url' }]],
  label: '简体中文',
  lang: 'zh-Hans',
  themeConfig: {
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
    // https://vitepress.dev/reference/default-theme-config#editlink
    editLink: {
      pattern:
        'https://github.com/ModyQyW/modyqyw.github.io/edit/main/docs/:path',
      text: '编辑页面',
    },
    // https://vitepress.dev/reference/default-theme-config#lastupdated
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        hourCycle: 'h24',
        timeStyle: 'short',
      },
      text: '最后更新',
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
};

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
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
};
