import { define, Component } from '@xinix/xin';

import '../../scss/ui-input.scss';
import '../../ui-textfield';
import '../../ui-textarea';
import '../../ui-selectfield';
import '../../ui-form';

import html from './ex-ui-forms.html';

class ExUiForms extends Component {
  get props () {
    return Object.assign({}, super.props, {
      product: {
        type: Object,
        value: () => ({}),
      },

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

  checkValidName (evt) {
    if (this.product.name === 'foo') {
      this.$.productName.errorMessage = '';
    } else {
      this.$.productName.errorMessage = 'Product name is not foo';
    }
  }

  doSubmit () {
    alert(`Submitting ${JSON.stringify(this.product, null, 2)}`);
  }
}

define('ex-ui-forms', ExUiForms);
