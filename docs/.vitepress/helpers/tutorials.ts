import { resolve } from 'node:path';
import { docsDirFullPath, type NavItem, generateSidebarItems, type SidebarItem } from './common';

export const getTutorialsSidebar = () =>
  generateSidebarItems(resolve(docsDirFullPath, 'tutorials')) as SidebarItem[];
// console.log('getTutorialsSidebar()', getTutorialsSidebar());

export const getTutorialsNav = (): NavItem => {
  const tutorialsSidebar = getTutorialsSidebar();
  return {
    text: '教程',
    link: tutorialsSidebar[0]?.link ?? tutorialsSidebar?.[0]?.items?.[0]?.link ?? '',
    activeMatch: 'tutorials/',
  };
};
// console.log('getTutorialsNav()', getTutorialsNav());
