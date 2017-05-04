import { Component, define } from '@xinix/xin';

import './scss/ui-form.scss';

export class UIForm extends Component {
  created () {
    super.created();

    this.classList.add('ui-form');
  }
}

define('ui-form', UIForm);
