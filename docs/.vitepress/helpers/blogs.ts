import { resolve } from 'node:path';
import {
  type NavItem,
  type SidebarItem,
  docsDirFullPath,
  generateSidebarItems,
} from './common';

export const getBlogsSidebar = () =>
  generateSidebarItems(
    resolve(docsDirFullPath, 'blogs'),
    'desc',
  ) as SidebarItem[];
// console.log('getBlogsSidebar()', getBlogsSidebar());

export const getBlogsNav = (): NavItem => {
  const blogsSidebar = getBlogsSidebar();
  return {
    activeMatch: 'blogs/',
    link:
      blogsSidebar[0]?.link ??
      blogsSidebar?.[0]?.items?.[0]?.link ??
      blogsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    text: '博客',
  };
};
// console.log('getBlogsNav()', getBlogsNav());
