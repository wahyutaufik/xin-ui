import { define, Component } from '@xinix/xin';
import { sprintf } from 'sprintf-js';

let instance;

export class UILang extends Component {
  static get instance () {
    if (!instance) {
      console.warn('ui-lang instance is not define yet, use default ui-lang');

      instance = document.createElement('ui-lang');
      document.body.appendChild(instance);
    }

    return instance;
  }

  get props () {
    return Object.assign({}, super.props, {
      messages: {
        type: Object,
        value: () => ({}),
      },
    });
  }

  created () {
    super.created();

    instance = this;

    this.messages = {};
  }

  attached () {
    super.attached();

    if (!this.__app) {
      return;
    }

    if (this.__app.__lang) {
      throw new Error('ui-lang already defined');
    }

    this.__app.set('__lang', this);
  }

  detached () {
    super.detached();

    if (this.__app) {
      this.__app.set('__lang', null);
    }
  }

  extend (messages, avoidOverride = false) {
    for (let k in messages) {
      if (avoidOverride && k in messages) {
        continue;
      }

      this.messages[k] = messages[k];
    }
  }

  t (message, ...args) {
    let translated = this.messages[message];
    if (!translated) {
      return sprintf(message, ...args);
    }

    return sprintf(translated, ...args);
  }
}

define('ui-lang', UILang);
