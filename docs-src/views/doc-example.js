import { define } from '@xinix/xin';
import { View } from '@xinix/xin/components/view';
import html from './doc-example.html';

class DocExample extends View {
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

  async focusing ({ name }) {
    await super.focusing({ name });

    this.set('title', `ex: ${name}`);

    await import('../examples/ex-' + name);
    this.$.content.innerHTML = `<ex-${name}></ex-${name}>`;
  }
}

define('doc-example', DocExample);
