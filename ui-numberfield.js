import { define, Component } from '@xinix/xin';

import html from './templates/ui-numberfield.html';

import './scss/ui-numberfield.scss';
import './scss/ui-button.scss';

export class UINumberField extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: Number,
      },
    });
  }

  inc () {
    this.set('value', Number(this.value || 0) + 1);
  }

  dec () {
    this.set('value', Number(this.value || 0) - 1);
  }
}

define('ui-numberfield', UINumberField);
