import { Component, define } from '@xinix/xin';

import html from './templates/ui-reveal.html';
import './scss/ui-reveal.scss';

export class UIReveal extends Component {
  get props () {
    return Object.assign({}, super.props, {
      type: {
        type: String,
        observer: 'observeType(type)',
      },
    });
  }

  get template () {
    return html;
  }

  get input () {
    if (!this._input) {
      this._input = this.querySelector('input');
    }

    return this._input;
  }

  observeType (type) {
    this.$.icon.innerHTML = type === 'password' ? 'visibility' : 'visibility_off';
    this.input.type = type;
  }

  attached () {
    super.attached();

    this.async(() => {
      this.set('type', this.input.type);
    });
  }

  toggleReveal (evt) {
    evt.preventDefault();

    this.set('type', this.type === 'password' ? 'text' : 'password');
  }
}
define('ui-reveal', UIReveal);
