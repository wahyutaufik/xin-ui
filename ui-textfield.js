import { define } from '@xinix/xin';
import { UIFormItem } from './ui-form-item';
import html from './templates/ui-textfield.html';

import './scss/ui-textfield.scss';

export class UITextfield extends UIFormItem {
  get props () {
    return Object.assign({}, super.props, {
      type: {
        type: String,
        value: 'text',
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
