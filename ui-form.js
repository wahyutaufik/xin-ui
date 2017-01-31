import xin from 'xin';

import './scss/ui-form.scss';

class UIForm extends xin.Component {
  created () {
    super.created();

    this.classList.add('ui-form');
  }
}

xin.define('ui-form', UIForm);

export default UIForm;
