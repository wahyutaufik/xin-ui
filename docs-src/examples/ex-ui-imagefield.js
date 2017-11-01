import { define, Component } from '@xinix/xin';

import '../../ui-imagefield';

import html from './ex-ui-imagefield.html';

class ExUiImagefield extends Component {
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

define('ex-ui-imagefield', ExUiImagefield);
