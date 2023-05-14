import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';

import 'lxgw-wenkai-webfont/style.css';
import './custom.css';
import './removeServiceWorker';
import 'uno.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();

    giscusTalk(
      {
        repo: 'ModyQyW/modyqyw.github.io',
        repoId: 'MDEwOlJlcG9zaXRvcnkxMzczNTk4MDk=',
        category: 'General',
        categoryId: 'DIC_kwDOCC_xwc4CAj2Q',
        mapping: 'pathname',
        strict: '1',
        reactionsEnabled: '1',
        emitMetadata: '1',
        inputPosition: 'top',
        theme: 'preferred_color_scheme',
        lang: 'zh-CN',
        loading: 'lazy',
      },
      {
        frontmatter,
        route,
      },
    );
    imageViewer(route);
  },
};
