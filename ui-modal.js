import { Component, define } from '@xinix/xin';
import html from './templates/ui-modal.html';

import './scss/ui-modal.scss';

export class UIModal extends Component {
  get props () {
    return Object.assign({}, super.props, {
      full: {
        type: Boolean,
      },
    });
  }

  get template () {
    return html;
  }

  get listeners () {
    return {
      'click': 'clicked(evt)',
    };
  }

  open (evt) {
    this.originEvent = evt;
    this.classList.add('ui-modal--active');
  }

  close () {
    this.classList.remove('ui-modal--active');
  }

  clicked (evt) {
    if (evt.target === this) {
      evt.stopImmediatePropagation();
      this.close();
    }
  }
}

define('ui-modal', UIModal);
