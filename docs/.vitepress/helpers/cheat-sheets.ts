import { join, resolve } from 'node:path';
import {
  type NavItem,
  type SidebarItem,
  docsDirFullPath,
  generateSidebarItems,
  langDirPathMapping,
} from './common';

export const getCheatSheetsSidebar = (lang: 'en-US' | 'zh-Hans' = 'zh-Hans') =>
  generateSidebarItems(
    resolve(docsDirFullPath, langDirPathMapping[lang], 'cheat-sheets'),
  ) as SidebarItem[];
// console.log('getCheatSheetsSidebar()', getCheatSheetsSidebar());

export const getCheatSheetsNav = (
  lang: 'en-US' | 'zh-Hans' = 'zh-Hans',
): NavItem => {
  const cheatSheetsSidebar = getCheatSheetsSidebar(lang);
  return {
    activeMatch: join(langDirPathMapping[lang], 'cheat-sheets/'),
    link:
      cheatSheetsSidebar[0]?.link ??
      cheatSheetsSidebar?.[0]?.items?.[0]?.link ??
      cheatSheetsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    text: lang === 'zh-Hans' ? '速查' : 'Cheat Sheets',
  };
};
// console.log('getCheatSheetsNav()', getCheatSheetsNav());
