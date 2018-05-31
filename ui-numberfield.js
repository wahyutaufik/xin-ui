import { define, Component } from '@xinix/xin';

import html from './templates/ui-numberfield.html';

import './scss/ui-input.scss';
import './scss/ui-button.scss';
import './scss/ui-numberfield.scss';

export class UINumberField extends Component {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: Number,
        notify: true,
        observer: 'observeValueChanged(value)',
      },

      min: {
        type: Number,
      },

      max: {
        type: Number,
      },
    });
  }

  inc () {
    let value = Number(this.value || 0) + 1;

    if (typeof this.max !== 'undefined' && value > this.max) {
      return;
    }

    if (typeof this.min !== 'undefined' && value < this.min) {
      value = this.min;
    }
    this.set('value', value);
  }

  dec () {
    let value = Number(this.value || 0) - 1;

    if (typeof this.min !== 'undefined' && value < this.min) {
      return;
    }

    if (typeof this.max !== 'undefined' && value > this.max) {
      value = this.max;
    }
    this.set('value', value);
  }

  observeValueChanged (value) {
    this.fire('change', value);
  }
}

define('ui-numberfield', UINumberField);
