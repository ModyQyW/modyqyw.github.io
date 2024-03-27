import { defineConfig } from 'vitepress';
import { enUS } from './en-us';
import { shared } from './shared';
import { zhHans } from './zh-hans';

export default defineConfig({
  ...shared,
  // https://vitepress.dev/guide/i18n
  locales: {
    'en-US': enUS,
    root: zhHans,
  },
});
