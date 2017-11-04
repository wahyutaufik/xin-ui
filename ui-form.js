import { Component, define } from '@xinix/xin';
import html from './templates/ui-form.html';

import './scss/ui-form.scss';

export class UIForm extends Component {
  get template () {
    return html;
  }

  async submitted (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (await this.validate()) {
      this.fire('submit');
    }
  }

  async validate () {
    let result = await Promise.all(Array.from(this.querySelectorAll('.ui-form__item')).map(item => item.validate()));
    for (let val of result) {
      if (!val) return false;
    }

    return true;
  }
}

define('ui-form', UIForm);
