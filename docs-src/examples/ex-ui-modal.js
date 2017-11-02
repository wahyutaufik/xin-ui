import { define, Component } from '@xinix/xin';

import '../../ui-modal';
import '../../scss/ui-button.scss';

import html from './ex-ui-modal.html';

class ExUiModal extends Component {
  get template () {
    return html;
  }
}

define('ex-ui-modal', ExUiModal);
