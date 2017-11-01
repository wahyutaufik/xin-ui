import { define, Component } from '@xinix/xin';

import '../../ui-textfield';
import { UILoading } from '../../ui-loading';

import html from './ex-ui-loading.html';

class ExUiLoading extends Component {
  get props () {
    return Object.assign({}, super.props, {
      message: {
        type: String,
        value: '',
      },
    });
  }

  get template () {
    return html;
  }

  async formSubmitted (evt) {
    evt.preventDefault();

    let loading = await UILoading.show({ message: this.message, content: 'foo bar' });
    await new Promise(resolve => setTimeout(resolve, 5000));
    await loading.hide();
  }
}

define('ex-ui-loading', ExUiLoading);
