import { Component, define, event } from '@xinix/xin';
import html from './templates/ui-textfield.html';

import './scss/ui-textfield.scss';

import { UILang } from './ui-lang';

UILang.instance.extend({
  'error:valueMissing': '%s is required',
  'error:typeMismatch': 'Type mismatch',
  'error:patternMismatch': 'Pattern mismatch',
  'error:tooLong': '%s is too long',
  'error:tooShort': '%s is too short',
  'error:rangeUnderflow': '%s is lower than expected',
  'error:rangeOverflow': '%s is higher than expected',
  'error:stepMismatch': 'Step mismatch',
  'error:badInput': 'Bad input',
});

export class UITextfield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      value: {
        type: String,
        notify: true,
        value: '',
      },

      label: {
        type: String,
        value: '',
      },

      type: {
        type: String,
        value: 'text',
      },

      placeholder: {
        type: String,
        value: '',
      },

      disabled: {
        type: Boolean,
      },

      trigger: {
        type: String,
        value: '',
      },

      min: {
        type: Number,
      },

      max: {
        type: Number,
      },

      minlength: {
        type: Number,
      },

      maxlength: {
        type: Number,
      },

      _errorMessage: {
        type: String,
        value: '',
      },
    });
  }

  get template () {
    return html;
  }

  created () {
    super.created();

    this.classList.add('ui-textfield');
    this.classList.add('ui-textfield--stacked');
  }

  attached () {
    super.attached();

    if (this.trigger) {
      event(this.$.input).on(this.trigger, this._validate.bind(this));
    }
  }

  detached () {
    super.detached();

    event(this.$.input).off('input');
    event(this.$.input).off('change');
  }

  _validate (evt) {
    let input = evt.target;

    if (input.checkValidity()) {
      this.set('_errorMessage', '');
      this.classList.remove('ui-invalid');
      return;
    }

    this.set('_errorMessage', this.errorMessage);

    this.classList.add('ui-invalid');
  }

  get errorMessage () {
    for (let code in this.$.input.validity) {
      let isError = this.$.input.validity[code];
      if (isError) {
        if (code === 'customError') {
          return UILang.instance.t(this.$.input.validationMessage, this.label);
        }

        return UILang.instance.t(`error:${code}`, this.label);
      }
    }
  }
}

define('ui-textfield', UITextfield);
