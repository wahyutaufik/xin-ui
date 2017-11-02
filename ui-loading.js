import { Component, define } from '@xinix/xin';
import html from './templates/ui-loading.html';

import './scss/ui-loading.scss';

const container = (() => {
  let container = document.querySelector('div.ui-loading__container');
  if (container) {
    return container;
  }

  container = document.createElement('div');
  container.classList.add('ui-loading__container');
  document.body.appendChild(container);

  return container;
})();

export class UILoading extends Component {
  static create (options) {
    return new Promise(resolve => {
      // FIXME workaround bug in xin customElements v1, must not have children until connected
      // const bar = document.createElement('ui-loading');
      let div = document.createElement('div');
      div.innerHTML = '<ui-loading></ui-loading>';
      let bar = div.querySelector('ui-loading');
      setTimeout(() => {
        bar.all(options);
        resolve(bar);
      });
    });
  }

  static async show (options) {
    const loading = await UILoading.create(options);
    await loading.show();
    return loading;
  }

  get props () {
    return Object.assign({}, super.props, {
      message: {
        type: String,
        value: '',
      },
      content: {
        type: String,
      },
    });
  }

  get template () {
    return html;
  }

  attached () {
    super.attached();

    this.classList.add('ui-loading');
  }

  async show () {
    container.appendChild(this);

    await new Promise((resolve, reject) => {
      this.async(() => {
        this.classList.add('ui-loading--active');

        resolve();
      }, 50);
    });
  }

  async hide () {
    this.classList.remove('ui-loading--active');

    await new Promise(resolve => {
      this.once('transitionend', resolve);
    });

    container.removeChild(this);
  }
}

define('ui-loading', UILoading);
