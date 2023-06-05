import { resolve } from 'node:path';
import { generateSidebarItems, docsDirFullPath, type SidebarItem, type NavItem } from './common';

export const getBlogsSidebar = () =>
  generateSidebarItems(resolve(docsDirFullPath, 'blogs'), 'desc') as SidebarItem[];
// console.log('getBlogsSidebar()', getBlogsSidebar());

export const getBlogsNav = (): NavItem => {
  const blogsSidebar = getBlogsSidebar();
  return {
    text: '博客',
    link:
      blogsSidebar[0]?.link ??
      blogsSidebar?.[0]?.items?.[0]?.link ??
      blogsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    activeMatch: 'blogs/',
  };
};
// console.log('getBlogsNav()', getBlogsNav());
