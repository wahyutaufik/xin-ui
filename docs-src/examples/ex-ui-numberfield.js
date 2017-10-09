import { define, Component } from '@xinix/xin';

import '../../ui-numberfield';
import '../../ui-textfield';
import '../../scss/ui-input.scss';

import html from './ex-ui-numberfield.html';

class ExUiNumberfield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: Number,
        value: 10,
      },
    });
  }
  get template () {
    return html;
  }
}

define('ex-ui-numberfield', ExUiNumberfield);
