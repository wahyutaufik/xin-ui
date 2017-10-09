import { define, Component } from '@xinix/xin';

import { UISnackbar } from '../../ui-snackbar';
import '../../ui-textfield';

import html from './ex-ui-snackbar.html';

class ExUiSnackbar extends Component {
  get props () {
    return Object.assign({}, super.props, {
      message: {
        type: String,
        value: 'Hello world!',
      },
    });
  }

  get template () {
    return html;
  }

  formSubmitted (evt) {
    evt.preventDefault();

    UISnackbar.show({ message: this.message });
  }
}

define('ex-ui-snackbar', ExUiSnackbar);
