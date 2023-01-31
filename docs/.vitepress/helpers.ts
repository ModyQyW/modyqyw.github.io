import { readdirSync, readFileSync, statSync, lstatSync } from 'node:fs';
import { resolve, join } from 'node:path';

const cwd = process.cwd();

const getMarkdownTitle = (filePath: string) => {
  const content = readFileSync(filePath, 'utf8');
  const titles = content.match(/^# .+/g);
  return titles?.[0]?.slice(2);
};

const getFileBirthtime = (path: string) => statSync(path).birthtimeMs;

const dirFilter = (path: string) => lstatSync(path).isDirectory();

const numberFilter = (item: string | number) => !Number.isNaN(Number.parseInt(item.toString(), 10));

const releasedMarkdownFilter = (item: string) =>
  item.endsWith('.md') && !item.endsWith('.draft.md');

const descSorter = (a: string | number, b: string | number) => {
  const na = Number.parseInt(a.toString(), 10);
  const nb = Number.parseInt(b.toString(), 10);
  return nb - na;
};

export const getBlogsSidebar = () => {
  const docsDirPath = resolve(cwd, 'docs');
  const blogsDirPath = resolve(docsDirPath, 'blogs');
  const yearDirs = readdirSync(blogsDirPath)
    .filter((year) => numberFilter(year))
    .filter((yearDir) => dirFilter(resolve(blogsDirPath, yearDir)))
    .sort(descSorter);
  return yearDirs
    .map((yearDir) => {
      const yearDirPath = resolve(blogsDirPath, yearDir);
      const monthDirs = readdirSync(yearDirPath)
        .filter((month) => numberFilter(month))
        .filter((monthDir) => dirFilter(resolve(yearDirPath, monthDir)))
        .sort(descSorter);
      return {
        text: `Y ${yearDir}`,
        collapsible: true,
        items: monthDirs
          .map((monthDir) => {
            const monthDirPath = resolve(yearDirPath, monthDir);
            return {
              text: `M ${monthDir}`,
              items: readdirSync(monthDirPath)
                .filter((fileName) => releasedMarkdownFilter(fileName))
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
    .filter(({ items }) => items.length > 0);
};

export const getBlogsNav = () => {
  const blogsSidebar = getBlogsSidebar();
  return {
    text: '博客',
    link: blogsSidebar[0].items[0].items[0].link,
    activeMatch: 'blogs/',
  };
};
