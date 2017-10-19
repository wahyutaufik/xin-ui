import { Component, define, event } from '@xinix/xin';
import html from './templates/ui-drawer.html';

import './scss/ui-drawer.scss';

export class UIDrawer extends Component {
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

  ready () {
    super.ready();

    this.dragTarget = document.createElement('div');
    this.dragTarget.classList.add('ui-drawer--drag-target');

    let maxX = 0;
    let posX = 0;
    event(this.dragTarget).on('click', () => {
      this.close();
    });

    event(this.dragTarget).on('touchstart', () => {
      this.classList.add('ui-drawer--dragged');
      maxX = this.$.content.offsetWidth;
      posX = 0;
    });

    event(this.dragTarget).on('touchmove', (evt) => {
      this.debounce('drag-drawer', () => {
        posX = evt.touches[0].pageX;
        this.$.content.style.transform = `translateX(-${maxX - posX}px)`;
        this.$.overlay.style.opacity = posX / maxX;
      });
    });

    event(this.dragTarget).on('touchend', () => {
      this.classList.remove('ui-drawer--dragged');

      this.async(async () => {
        if (posX >= maxX / 2) {
          await this.open();
        } else {
          await this.close();
        }
        maxX = 0;
        posX = 0;
        this.$.content.style.transform = null;
        this.$.overlay.style.opacity = null;
      });
    });
  }

  attached () {
    super.attached();

    this.parentElement.appendChild(this.dragTarget);
  }

  detached () {
    super.detached();

    this.dragTarget.parentElement.removeChild(this.dragTarget);
  }

  async open (drawer = this) {
    if (window.innerWidth >= 1000) {
      return;
    }

    await new Promise((resolve, reject) => {
      let timeout = setTimeout(() => {
        event(drawer.$.content).off('transitionend');
        done();
      }, 50);

      let done = () => {
        clearTimeout(timeout);
        this.async(resolve, 50);
      };

      event(drawer.$.content).once('transitionend', done);
    });

    this.dragTarget.classList.add('ui-drawer--visible');
    drawer.classList.add('ui-drawer--visible');
  }

  async close (drawer = this) {
    if (window.innerWidth >= 1000) {
      return;
    }

    await new Promise((resolve, reject) => {
      let done = () => {
        clearTimeout(timeout);

        this.async(resolve, 50);
      };

      let timeout = setTimeout(() => {
        event(drawer.$.content).off('transitionend');
        done();
      }, 50);

      event(drawer.$.content).once('transitionend', done);
    });

    this.dragTarget.classList.remove('ui-drawer--visible');
    drawer.classList.remove('ui-drawer--visible');
  }

  async linkTapped (evt) {
    evt.preventDefault();

    await this.close();

    window.location.href = evt.target.href;
  }
}

define('ui-drawer', UIDrawer);
