import xin from '@xinix/xin';
import View from '@xinix/xin/components/view';
import marked from 'marked';
import Prism from 'prismjs';
import html from './doc-page.html';
import markdownParse from '../lib/markdown-parse';

import 'prismjs/themes/prism.css';

marked.setOptions({
  gfm: true,
  tables: true,
  highlight (code, language) {
    if (Prism.languages[language]) {
      return Prism.highlight(code, Prism.languages[language]);
    }
    return code;
  },
});

class DocPage extends View {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      title: {
        type: String,
        value: '',
      },
    });
  }

  focusing (parameters) {
    super.focusing(parameters);

    (async () => {
      let uri = this.__app.getFragment();
      let response;
      if (uri === '/') {
        response = await window.fetch('pages/index.md');
      } else {
        response = await window.fetch(`pages${uri}.md`);
      }

      if (response.ok) {
        let { content, meta: { title = 'XIN UI' } } = markdownParse(await response.text());
        this.set('title', title);
        this.$.content.innerHTML = `${marked(content)}`;
      } else {
        this.set('title', 'XIN-UI');
      }
    })();
  }
}
xin.define('doc-page', DocPage);
