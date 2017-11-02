import { define, Component } from '@xinix/xin';

import '../../ui-textarea';

import html from './ex-ui-textarea.html';

class ExUiTextarea extends Component {
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

define('ex-ui-textarea', ExUiTextarea);
