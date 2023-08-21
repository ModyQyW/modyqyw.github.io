import { readdirSync, readFileSync, statSync, lstatSync } from 'node:fs';
import { resolve } from 'node:path';
import * as shelljs from 'shelljs';
import dayjs from 'dayjs';
import type { DefaultTheme } from 'vitepress';

// @ts-expect-error Property 'default' does not exist on type 'shelljs'
const exec: shelljs.ExecFunction = shelljs?.default?.exec ?? shelljs?.exec;

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

export const sorterMapping = {
  asc: ascSorter,
  desc: descSorter,
};

export type NavItem = DefaultTheme.NavItem;

export type SidebarItem = DefaultTheme.SidebarItem;

export const generateSidebarItem = (dirFullPath: string, sorter: 'asc' | 'desc' = 'asc') => {
  // 读取目录下内容并排序，默认为升序排列
  const dirContents = readdirSync(dirFullPath).sort(sorterMapping[sorter]);
  const sidebarItem: SidebarItem = {};
  // 如果有 index.md，使用 index.md 作为 text 和 link
  // 否则使用文件夹名称
  if (dirContents.includes('index.md')) {
    sidebarItem.text = getMarkdownTitle(resolve(dirFullPath, 'index.md'));
    sidebarItem.link = resolve(dirFullPath, 'index.md').slice(docsDirFullPath.length);
  } else {
    sidebarItem.text = dirFullPath.split('/').at(-1);
  }
  // 默认折叠
  sidebarItem.collapsed = true;
  // 设置子项
  sidebarItem.items = [
    // 非 index.md 的 md 文件
    ...dirContents
      .filter(
        (content) =>
          content !== 'index.md' &&
          content.endsWith('.md') &&
          fileFilter(resolve(dirFullPath, content)),
      )
      // 以数字和 . 开头，本身有序
      // 否则根据文件时间降序排列
      .sort((filePathA, filePathB) => {
        const regexp = /^\d+\./;
        if (regexp.test(filePathA) && regexp.test(filePathB)) return 0;
        return descSorter(
          getFileBirthtime(resolve(dirFullPath, filePathA)),
          getFileBirthtime(resolve(dirFullPath, filePathB)),
        );
      })
      // 映射成对应的数据格式
      .map((filePath) => {
        const fileFullPath = resolve(dirFullPath, filePath);
        return {
          text: getMarkdownTitle(fileFullPath),
          link: fileFullPath.slice(docsDirFullPath.length),
        };
      }),
    // 递归处理文件夹
    ...dirContents
      .filter((content) => dirFilter(resolve(dirFullPath, content)))
      .map((dirPath) => generateSidebarItem(resolve(dirFullPath, dirPath), sorter)),
  ];
  if (sidebarItem.items?.length === 0) {
    sidebarItem.items = undefined;
    sidebarItem.collapsed = undefined;
  }
  return sidebarItem;
};

export const generateSidebarItems = (docsDirFullPath: string, sorter: 'asc' | 'desc' = 'asc') =>
  generateSidebarItem(docsDirFullPath, sorter).items;
