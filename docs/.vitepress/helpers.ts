import { readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import type { SidebarGroup, NavItem } from './types';

const cwd = process.cwd();

const getMarkdownTitle = (filePath: string) => {
  const content = readFileSync(filePath, 'utf-8');
  const titles = content.match(/^\# .+/g);
  return titles?.[0]?.slice(2);
};

const getFileBirthtime = (file: string) => statSync(file).birthtimeMs;

const numberFilter = (item: string | number) => !Number.isNaN(Number.parseInt(item.toString(), 10));

const markdownFilter = (item: string) => item.endsWith('.md');

const descSorter = (a: string | number, b: string | number) => {
  const na = Number.parseInt(a.toString(), 10);
  const nb = Number.parseInt(b.toString(), 10);
  return nb - na;
};

export const getBlogsSidebar = () => {
  const docsDirPath = resolve(cwd, 'docs');
  const blogsDirPath = resolve(docsDirPath, 'blogs');
  const yearDirs = readdirSync(blogsDirPath).filter(numberFilter).sort(descSorter);
  return yearDirs
    .map((yearDir) => {
      const yearDirPath = resolve(blogsDirPath, yearDir);
      const monthDirs = readdirSync(yearDirPath).filter(numberFilter).sort(descSorter);
      return {
        text: `Y ${yearDir}`,
        collapsible: true,
        items: monthDirs
          .map((monthDir) => {
            const monthDirPath = resolve(yearDirPath, monthDir);
            return {
              text: `M ${monthDir}`,
              items: readdirSync(monthDirPath)
                .filter(markdownFilter)
                .map((fileName) => {
                  const filePath = resolve(monthDirPath, fileName);
                  const title = getMarkdownTitle(filePath);
                  return {
                    text: title,
                    link: filePath.slice(docsDirPath.length),
                  };
                })
                .sort((a, b) =>
                  descSorter(
                    getFileBirthtime(join(docsDirPath, a.link)),
                    getFileBirthtime(join(docsDirPath, b.link)),
                  ),
                ),
            };
          })
          .filter(({ items }) => items.length > 0),
      };
    })
    .filter(({ items }) => items.length > 0) as SidebarGroup[];
};

export const getBlogsNav = () => {
  const blogsSidebar = getBlogsSidebar();
  return {
    text: '博客',
    link: blogsSidebar[0].items[0].items[0].link ?? blogsSidebar[0].items[0].link,
  } as NavItem;
};
