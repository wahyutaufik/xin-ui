import { define } from '@xinix/xin';
import App from '@xinix/xin/components/app';
import html from './doc-app.html';

import '@xinix/xin/middlewares/lazy-view';
import '@xinix/xin/components/pager';
import 'xin-ui/ui-drawer';
import 'xin-ui/ui-lang';

class DocApp extends App {
  get props () {
    return Object.assign({}, super.props, {
      manifest: {
        type: Object,
        observer: 'manifestChanged(manifest)',
      },
    });
  }

  get template () {
    return html;
  }

  ready () {
    super.ready();

    (async () => {
      let response = await window.fetch('./manifest.json');
      this.set('manifest', await response.json());
    })();
  }

  manifestChanged (manifest) {
    let { css, components } = manifest;

    this.appendSeparator('Components');

    components.forEach(component => {
      this.appendMenu(component);
    });

    this.appendSeparator('CSS');

    css.forEach(c => {
      this.appendMenu(c);
    });
  }

  appendMenu (row) {
    let a = document.createElement('a');
    a.classList.add('ui-list__item');
    a.href = `#!${row.uri}`;
    a.innerHTML = row.title;
    this.$.menuList.appendChild(a);
  }

  appendSeparator (title = '') {
    let sep = document.createElement('span');
    sep.classList.add('ui-list__separator');
    sep.innerHTML = title;
    this.$.menuList.appendChild(sep);
  }
}

define('doc-app', DocApp);
