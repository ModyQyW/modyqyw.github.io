import { type EnhanceAppContext, useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import imageViewer from 'vitepress-plugin-image-viewer';
import VEmbed from './VEmbed.vue';
import './remove-service-worker';

import 'uno.css';
import 'viewerjs/dist/viewer.min.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component('VEmbed', VEmbed);
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    giscusTalk(
      {
        category: 'General',
        categoryId: 'DIC_kwDOCC_xwc4CAj2Q',
        emitMetadata: '1',
        inputPosition: 'top',
        lang: 'zh-CN',
        loading: 'lazy',
        mapping: 'pathname',
        reactionsEnabled: '1',
        repo: 'ModyQyW/modyqyw.github.io',
        repoId: 'MDEwOlJlcG9zaXRvcnkxMzczNTk4MDk=',
        strict: '1',
        theme: 'preferred_color_scheme',
      },
      {
        frontmatter,
        route,
      },
    );
    imageViewer(route);
  },
};
