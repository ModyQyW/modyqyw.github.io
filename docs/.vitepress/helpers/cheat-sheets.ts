import { resolve } from 'node:path';
import { docsDirFullPath, type NavItem, generateSidebarItems, type SidebarItem } from './common';

export const getCheatSheetsSidebar = () =>
  generateSidebarItems(resolve(docsDirFullPath, 'cheat-sheets')) as SidebarItem[];
// console.log('getCheatSheetsSidebar()', getCheatSheetsSidebar());

export const getCheatSheetsNav = (): NavItem => {
  const cheatSheetsSidebar = getCheatSheetsSidebar();
  return {
    text: '速查',
    link:
      cheatSheetsSidebar[0]?.link ??
      cheatSheetsSidebar?.[0]?.items?.[0]?.link ??
      cheatSheetsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    activeMatch: 'cheat-sheets/',
  };
};
// console.log('getCheatSheetsNav()', getCheatSheetsNav());
