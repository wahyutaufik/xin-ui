import { Component } from '@xinix/xin';
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

export class UIFormItem extends Component {
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

      required: {
        type: Boolean,
      },

      pattern: {
        type: String,
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
  created () {
    super.created();

    this.classList.add('ui-form__item');
  }

  ready () {
    super.ready();

    if (this.trigger) {
      this.trigger.split(' ').forEach(trigger => {
        this.on(trigger, '#input', this.validate.bind(this));
      });
    }
  }

  validate () {
    if (this.$.input.checkValidity()) {
      this.set('_errorMessage', '');
      this.classList.remove('ui-invalid');
      return true;
    }

    this.set('_errorMessage', this.errorMessage);

    this.classList.add('ui-invalid');

    return false;
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

  set errorMessage (errMessage) {
    this.$.input.setCustomValidity(errMessage);
  }
}
