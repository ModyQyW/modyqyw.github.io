import type { DefaultTheme } from 'vitepress';

export type SidebarNestedItem = { text: string; link: string };

export type SidebarItem = { text: string; link?: string; items: SidebarNestedItem[] };

export interface SidebarGroup extends DefaultTheme.SidebarGroup {
  items: SidebarItem[];
}

export type NavItem = DefaultTheme.NavItem;
