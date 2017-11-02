import { define, Component } from '@xinix/xin';

import '../../ui-imagefield';

import html from './ex-ui-imagefield.html';
import data from './ex-ui-imagefield-data.js';

class ExUiImagefield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: Array,
        value: () => data,
      },
    });
  }

  get template () {
    return html;
  }
}

define('ex-ui-imagefield', ExUiImagefield);
