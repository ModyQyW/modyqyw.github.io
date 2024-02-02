import { resolve } from 'node:path';
import {
  type NavItem,
  type SidebarItem,
  docsDirFullPath,
  generateSidebarItems,
} from './common';

export const getTutorialsSidebar = () =>
  generateSidebarItems(resolve(docsDirFullPath, 'tutorials')) as SidebarItem[];
// console.log('getTutorialsSidebar()', getTutorialsSidebar());

export const getTutorialsNav = (): NavItem => {
  const tutorialsSidebar = getTutorialsSidebar();
  return {
    activeMatch: 'tutorials/',
    link:
      tutorialsSidebar[0]?.link ??
      tutorialsSidebar?.[0]?.items?.[0]?.link ??
      tutorialsSidebar?.[0]?.items?.[0]?.items?.[0]?.link ??
      '',
    text: '教程',
  };
};
// console.log('getTutorialsNav()', getTutorialsNav());
