import { join, resolve } from 'node:path';
import {
  type NavItem,
  type SidebarItem,
  docsDirFullPath,
  generateSidebarItems,
  langDirPathMapping,
} from './common';

export const getBlogsSidebar = (lang: 'en-US' | 'zh-Hans' = 'zh-Hans') =>
  generateSidebarItems(
    resolve(docsDirFullPath, langDirPathMapping[lang], 'blogs'),
    'desc',
  ) as SidebarItem[];
// console.log('getBlogsSidebar()', getBlogsSidebar());

export const getBlogsNav = (lang: 'en-US' | 'zh-Hans' = 'zh-Hans'): NavItem => {
  const blogsSidebar = getBlogsSidebar(lang);
  return {
    activeMatch: join(langDirPathMapping[lang], 'blogs/'),
    link:
      blogsSidebar[0]?.link ??
      blogsSidebar?.[0]?.items?.[0]?.link ??
      blogsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    text: lang === 'zh-Hans' ? '博客' : 'Blogs',
  };
};
// console.log('getBlogsNav()', getBlogsNav());
