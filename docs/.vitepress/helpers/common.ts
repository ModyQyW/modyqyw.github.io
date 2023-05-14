import { readdirSync, readFileSync, statSync, lstatSync } from 'node:fs';
import { resolve } from 'node:path';
import { exec } from 'shelljs';
import dayjs from 'dayjs';
import type { DefaultTheme } from 'vitepress';

export const cwd = process.cwd();

export const docsDirFullPath = resolve(cwd, 'docs');

export const getMarkdownTitle = (fileFullPath: string) => {
  const content = readFileSync(fileFullPath, 'utf8');
  const titles = content.match(/# .+/g);
  return titles?.[0]?.slice(2);
};

export const getFileBirthtime = (fileFullPath: string) => {
  const { code, stdout } = exec(
    `git log --follow --format=%ad --date iso-strict ${fileFullPath} | tail -1`,
    { silent: true },
  );
  const iso = stdout.trim();
  const localBirthtimeMs = statSync(fileFullPath).birthtimeMs;
  const result = code === 0 ? dayjs(iso).valueOf() : localBirthtimeMs;
  return Number.isNaN(result) ? localBirthtimeMs : result;
};
export const fileFilter = (fullPath: string) => lstatSync(fullPath).isFile();

export const dirFilter = (fullPath: string) => lstatSync(fullPath).isDirectory();

export const numberFilter = (item: string | number) =>
  !Number.isNaN(Number.parseFloat(item.toString()));

export type Sorter = (a: string | number, b: string | number) => number;

export const ascSorter: Sorter = (a, b) => {
  const na = Number.parseFloat(a.toString());
  const nb = Number.parseFloat(b.toString());
  return na - nb;
};

export const descSorter: Sorter = (a, b) => -ascSorter(a, b);

export type NavItem = DefaultTheme.NavItem;

export type SidebarItem = DefaultTheme.SidebarItem;

export const generateSidebarItem = (dirFullPath: string, sorter?: Sorter) => {
  const dirContents = readdirSync(dirFullPath).sort(sorter ?? ascSorter);
  const sidebarItem: SidebarItem = {};
  if (dirContents.includes('index.md')) {
    sidebarItem.text = getMarkdownTitle(resolve(dirFullPath, 'index.md'));
  }
  if (dirContents.length === 1) {
    sidebarItem.link = resolve(dirFullPath, dirContents[0]).slice(docsDirFullPath.length);
  } else {
    sidebarItem.collapsed = false;
    sidebarItem.items = [
      ...dirContents
        .filter(
          (content) =>
            content !== 'index.md' &&
            content.endsWith('.md') &&
            fileFilter(resolve(dirFullPath, content)),
        )
        .map((filePath) => {
          const fileFullPath = resolve(dirFullPath, filePath);
          return {
            text: getMarkdownTitle(fileFullPath),
            link: fileFullPath.slice(docsDirFullPath.length),
          };
        }),
      ...dirContents
        .filter((content) => dirFilter(resolve(dirFullPath, content)))
        .map((dirPath) => generateSidebarItem(resolve(dirFullPath, dirPath))),
    ];
  }
  return sidebarItem;
};

export const generateSidebarItems = (docsDirFullPath: string, sorter?: Sorter) =>
  generateSidebarItem(docsDirFullPath, sorter).items;
