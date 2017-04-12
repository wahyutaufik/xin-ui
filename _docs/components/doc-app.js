import xin from 'xin';
import App from 'xin/components/app';
import html from './doc-app.html';

import 'xin/middlewares/lazy-view';
import 'xin/components/pager';
import 'xin-ui/ui-drawer';

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
xin.define('doc-app', DocApp);