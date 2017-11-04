import 'xin-ui/scss/ui-reset.scss';
import 'xin-ui/scss/ui-layout.scss';
import 'xin-ui/scss/ui-padding.scss';
import 'xin-ui/scss/ui-scroll.scss';
import 'xin-ui/scss/ui-panel.scss';
import 'xin-ui/scss/ui-typography.scss';
import 'xin-ui/scss/ui-list.scss';
import 'xin-ui/scss/ui-header.scss';
import 'xin-ui/scss/ui-button.scss';
import 'xin-ui/scss/ui-card.scss';
import 'material-design-icons/iconfont/material-icons.css';
import { bootstrap } from '@xinix/xin';

(async () => {
  bootstrap({
    'view.loaders': [
      {
        test: /^doc-/,
        load (view) {
          return import(`./views/${view.name}`);
        },
      },
    ],
  });

  await import('./components/doc-app');
})();
