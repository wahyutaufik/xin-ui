import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';
import html from './doc-page.html';

import 'xin-markdown';

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
      src: {
        type: String,
        value: '',
      },
    });
  }

  focusing (parameters) {
    super.focusing(parameters);

    this.async(async () => {
      let uri = this.__app.getFragment();

      await this.$.pane.render(uri === '/' ? 'docs/index.md' : `docs${uri}.md`);

      this.set('title', this.$.pane.meta.title);
    });
  }
}

define('doc-page', DocPage);
