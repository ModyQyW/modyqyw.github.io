import { resolve } from 'node:path';
import {
  type NavItem,
  type SidebarItem,
  docsDirFullPath,
  generateSidebarItems,
} from './common';

export const getCheatSheetsSidebar = () =>
  generateSidebarItems(
    resolve(docsDirFullPath, 'cheat-sheets'),
  ) as SidebarItem[];
// console.log('getCheatSheetsSidebar()', getCheatSheetsSidebar());

export const getCheatSheetsNav = (): NavItem => {
  const cheatSheetsSidebar = getCheatSheetsSidebar();
  return {
    activeMatch: 'cheat-sheets/',
    link:
      cheatSheetsSidebar[0]?.link ??
      cheatSheetsSidebar?.[0]?.items?.[0]?.link ??
      cheatSheetsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    text: '速查',
  };
};
// console.log('getCheatSheetsNav()', getCheatSheetsNav());
