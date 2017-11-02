import { define, Component } from '@xinix/xin';

import '../../scss/ui-input.scss';
import '../../ui-textfield';
import '../../ui-textarea';

import html from './ex-ui-forms.html';

class ExUiForms extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        value: 'foo',
      },
      longValue: {
        type: String,
        value: 'foo\nbar',
      },
    });
  }

  get template () {
    return html;
  }
}

define('ex-ui-forms', ExUiForms);
