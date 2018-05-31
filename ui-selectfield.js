import { define } from '@xinix/xin';
import { UIFormItem } from './ui-form-item';
import html from './templates/ui-selectfield.html';

import './scss/ui-textfield.scss';

export class UISelectfield extends UIFormItem {
  get template () {
    return html;
  }

  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        notify: true,
        observer: 'valueChanged(value)',
      },

      options: {
        type: Array,
        value: () => ([]),
        observer: 'optionsChanged(options)',
      },

      labelKey: {
        type: String,
        value: 'label',
      },

      valueKey: {
        type: String,
        value: 'value',
      },

      avoidEmpty: {
        type: Boolean,
      },
    });
  }

  created () {
    super.created();

    this.classList.add('ui-textfield');
    this.classList.add('ui-textfield--stacked');
  }

  ready () {
    super.ready();

    this.optionsChanged(this.options);
  }

  valueChanged (value) {
    this.fire('change');
  }

  optionsChanged (options = []) {
    if (!this.$.input) {
      return;
    }

    this.debounce('optionsChanged', () => {
      options = options || [];

      const fragment = document.createDocumentFragment();

      if (options.length > 0 && options[0][this.valueKey]) {
        let optEl = document.createElement('option');
        fragment.appendChild(optEl);
      }

      options.forEach(opt => {
        const optEl = document.createElement('option');
        optEl.value = opt[this.valueKey];
        optEl.innerHTML = opt[this.labelKey];
        fragment.appendChild(optEl);
      });

      this.$.input.innerHTML = '';
      this.$.input.appendChild(fragment);

      this.$.input.value = this.value || '';
    });
  }
}

define('ui-selectfield', UISelectfield);
