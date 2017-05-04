import { Component, define } from '@xinix/xin';
import html from './templates/ui-snackbar-item.html';

export class UISnackbarItem extends Component {
  get template () {
    return html;
  }

  created () {
    super.created();

    this.classList.add('ui-snackbar__item');
  }

  promise () {
    return new Promise((resolve, reject) => {
      this.resolveCallback = resolve;
      this.rejectCallback = reject;
    });
  }

  async show (bar) {
    try {
      bar.appendChild(this);

      await new Promise(resolve => {
        this.nextFrame(() => {
          this.classList.add('ui-snackbar__active');

          if (this.timeout > 0) {
            this.async(resolve, this.timeout);
          } else {
            resolve();
          }
        });
      });

      this.classList.remove('ui-snackbar__active');
      await new Promise(resolve => {
        this.once('transitionend', () => {
          bar.removeChild(this);
          resolve();
        });
      });

      this.resolveCallback();
    } catch (err) {
      this.rejectCallback(err);
    }
  }
}

define('ui-snackbar-item', UISnackbarItem);
