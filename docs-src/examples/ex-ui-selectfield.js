import { define, Component } from '@xinix/xin';

import '../../ui-selectfield';

import html from './ex-ui-selectfield.html';

class ExUiSelectfield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: Number,
        value: 2,
      },
    });
  }
  get template () {
    return html;
  }
}

define('ex-ui-selectfield', ExUiSelectfield);
