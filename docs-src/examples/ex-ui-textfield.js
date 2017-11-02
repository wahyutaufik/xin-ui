import { define, Component } from '@xinix/xin';

import '../../ui-textfield';

import html from './ex-ui-textfield.html';

class ExUiTextfield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        value: 'foo',
      },
    });
  }

  get template () {
    return html;
  }
}

define('ex-ui-textfield', ExUiTextfield);
