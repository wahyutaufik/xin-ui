import { Component, define } from '@xinix/xin';
import '@xinix/xin/components/for';

import './scss/ui-imagefield.scss';

import html from './templates/ui-imagefield.html';

export class UIImagefield extends Component {
  get props () {
    return Object.assign({}, super.props, {
      label: {
        type: String,
        value: '',
      },

      value: {
        type: Array,
        notify: true,
        value: () => ([]),
        observer: 'observeValue(value)',
      },

      accept: {
        type: String,
        value: 'image/x-png,image/gif,image/jpeg',
      },

      multiple: {
        type: Boolean,
      },
    });
  }

  get template () {
    return html;
  }

  attached () {
    super.attached();

    this.observeValue();
  }

  async fileSelected (evt) {
    let target = evt.target;
    let files = await Promise.all(Array.from(target.files).map(file => {
      return new Promise(resolve => {
        let reader = new FileReader();
        reader.addEventListener('load', function () {
          file.url = reader.result;
          resolve(file);
        }, false);
        reader.readAsDataURL(file);
      });
    }));

    files.forEach(file => {
      this.push('value', file);
    });

    target.value = '';

    this.async(() => {
      this.$.scroller.scrollLeft = this.$.scroller.scrollWidth - this.$.scroller.clientWidth;
    }, 10);
  }

  computeBg (url) {
    return `url(${url})`;
  }

  observeValue (value) {
    if (!this.$.imageAddHandle) {
      return;
    }

    let len = (value || this.value || []).length || 0;

    if (!this.multiple && len > 0) {
      this.$.imageAddHandle.classList.add('ui-imagefield--hidden');
    } else {
      this.$.imageAddHandle.classList.remove('ui-imagefield--hidden');
    }
  }
}

define('ui-imagefield', UIImagefield);
