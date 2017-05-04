import { Component, define } from '@xinix/xin';
import html from './templates/ui-textfield.html';

import './scss/ui-textfield.scss';

export class UITextfield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        notify: true,
        value: '',
      },

      label: {
        type: String,
        value: '',
      },

      type: {
        type: String,
        value: 'text',
      },

      disabled: {
        type: Boolean,
      },
    });
  }

  get template () {
    return html;
  }

  created () {
    super.created();

    this.classList.add('ui-textfield');
    this.classList.add('ui-textfield--stacked');
  }
}

define('ui-textfield', UITextfield);
