import { join, resolve } from 'node:path';
import {
  type NavItem,
  type SidebarItem,
  docsDirFullPath,
  generateSidebarItems,
  langDirPathMapping,
} from './common';

export const getTutorialsSidebar = (lang: 'en-US' | 'zh-Hans' = 'zh-Hans') =>
  generateSidebarItems(
    resolve(docsDirFullPath, langDirPathMapping[lang], 'tutorials'),
  ) as SidebarItem[];
// console.log('getTutorialsSidebar()', getTutorialsSidebar());
// console.log(`getTutorialsSidebar('en-US')`, getTutorialsSidebar('en-US'));

export const getTutorialsNav = (
  lang: 'en-US' | 'zh-Hans' = 'zh-Hans',
): NavItem => {
  const tutorialsSidebar = getTutorialsSidebar(lang);
  return {
    activeMatch: join(langDirPathMapping[lang], 'tutorials/'),
    link:
      tutorialsSidebar[0]?.link ??
      tutorialsSidebar?.[0]?.items?.[0]?.link ??
      tutorialsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    text: lang === 'zh-Hans' ? '教程' : 'Tutorials',
  };
};
// console.log('getTutorialsNav()', getTutorialsNav());
// console.log(`getTutorialsNav('en-US')`, getTutorialsNav('en-US'));
