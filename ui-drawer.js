import xin from 'xin';
import html from './templates/ui-drawer.html';
import event from 'xin/event';

import './scss/ui-drawer.scss';

class UIDrawer extends xin.Component {
  get template () {
    return html;
  }

  get listeners () {
    return Object.assign({}, super.listeners, {
      'click a[href]': 'linkTapped(evt)',
    });
  }

  created () {
    super.created();

    this.classList.add('ui-drawer');
  }

  async open (drawer = this) {
    if (window.innerWidth >= 1000) {
      return;
    }

    return await new Promise((resolve, reject) => {
      event(drawer.$.content).once('transitionend', () => {
        this.async(resolve, 50);
      });

      drawer.classList.add('ui-drawer--visible');
    });
  }

  async close (drawer = this) {
    if (window.innerWidth >= 1000) {
      return;
    }

    return await new Promise((resolve, reject) => {
      event(drawer.$.content).once('transitionend', () => {
        this.async(resolve, 50);
      });

      drawer.classList.remove('ui-drawer--visible');
    });
  }

  async linkTapped (evt) {
    evt.preventDefault();

    await this.close();

    window.location.href = evt.target.href;
  }
}

xin.define('ui-drawer', UIDrawer);
