import { readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import {
  docsDirFullPath,
  descSorter,
  getMarkdownTitle,
  getFileBirthtime,
  type NavItem,
} from './common';

export const getBlogsSidebar = () => {
  const blogsDirFullPath = resolve(docsDirFullPath, 'blogs');
  return readdirSync(blogsDirFullPath)
    .sort(descSorter)
    .map((yearDir) => {
      const yearDirFullPath = resolve(blogsDirFullPath, yearDir);
      return {
        text: yearDir,
        collapsed: true,
        items: readdirSync(yearDirFullPath)
          .sort(descSorter)
          .map((monthDir) => {
            const monthDirFullPath = resolve(yearDirFullPath, monthDir);
            return {
              text: monthDir,
              collapsed: true,
              items: readdirSync(monthDirFullPath)
                .map((blogPath) => {
                  const blogFullPath = resolve(monthDirFullPath, blogPath);
                  return {
                    text: getMarkdownTitle(blogFullPath),
                    link: blogFullPath.slice(docsDirFullPath.length),
                  };
                })
                .sort((a, b) =>
                  descSorter(
                    getFileBirthtime(join(docsDirFullPath, a.link)),
                    getFileBirthtime(join(docsDirFullPath, b.link)),
                  ),
                ),
            };
          })
          .filter(({ items }) => items.length > 0),
      };
    })
    .filter(({ items }) => items.length > 0);
};
// console.log('getBlogsSidebar()', getBlogsSidebar());

export const getBlogsNav = (): NavItem => {
  const blogsSidebar = getBlogsSidebar();
  return {
    text: '博客',
    link: blogsSidebar[0].items[0].items[0].link,
    activeMatch: 'blogs/',
  };
};
// console.log('getBlogsNav()', getBlogsNav());
