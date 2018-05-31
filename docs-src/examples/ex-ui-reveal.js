import { define, Component } from '@xinix/xin';

import '../../ui-reveal';
import '../../ui-textfield';

import html from './ex-ui-reveal.html';

class ExUiReveal extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        value: '',
      },
    });
  }
  get template () {
    return html;
  }
}

define('ex-ui-reveal', ExUiReveal);
