import xin from 'xin';
import html from './templates/ui-textfield.html';

import './scss/ui-textfield.scss';

class UITextfield extends xin.Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        notify: true,
        value: '',
      },

      label: {
        type: String,
      },

      type: {
        type: String,
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

xin.define('ui-textfield', UITextfield);

export default UITextfield;
