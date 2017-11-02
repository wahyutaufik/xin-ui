import { Component, define } from '@xinix/xin';
import html from './templates/ui-textarea.html';

import './scss/ui-textarea.scss';

export class UITextarea extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        notify: true,
        value: '',
        observer: 'observeValue(value)',
      },

      label: {
        type: String,
        value: '',
      },

      rows: {
        type: Number,
        value: 1,
      },

      minRows: {
        type: Number,
        value: 1,
      },

      placeholder: {
        type: String,
        value: '',
      },

      maxlength: {
        type: Number,
        value: 0,
      },

      disabled: {
        type: Boolean,
      },

      showCounter: {
        type: Boolean,
      },
    });
  }

  get template () {
    return html;
  }

  created () {
    super.created();

    this.classList.add('ui-textarea');
    this.classList.add('ui-textarea--stacked');
  }

  attached () {
    super.attached();
    this.calcBaseScrollHeight();
  }

  calcBaseScrollHeight () {
    let savedValue = this.$.input.value;

    this.$.input.value = '';
    this.baseScrollHeight = this.$.input.scrollHeight;
    this.$.input.value = '\n';
    this.rowHeight = this.$.input.scrollHeight - this.baseScrollHeight;

    this.$.input.value = savedValue;

    this.observeValue();
  }

  observeValue (evt) {
    if (!this.$.input) {
      return;
    }

    let minRows = this.minRows | 0;
    this.set('rows', minRows);
    let rows = Math.ceil((this.$.input.scrollHeight - this.baseScrollHeight) / this.rowHeight);
    this.set('rows', minRows + rows);
  }
}

define('ui-textarea', UITextarea);
