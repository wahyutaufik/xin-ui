import { Component, define } from '@xinix/xin';

import html from './templates/ui-slides.html';
import 'swiper/dist/css/swiper.css';
import './scss/ui-slides.scss';

export class UISlides extends Component {
  get props () {
    return Object.assign({}, super.props, {
      options: {
        type: Object,
        value: () => ({}),
      },

      showDefaultPagination: {
        type: Boolean,
      },

      showNavigationButton: {
        type: Boolean,
      },

      autoplay: {
        type: Number,
        value: 0,
      },
    });
  }

  get template () {
    return html;
  }

  ready () {
    super.ready();

    this.classList.add('ui-slides');
  }

  async attached () {
    await super.attached();

    let { default: Swiper } = await import('swiper');
    const { options } = this;

    if (this.autoplay && 'autoplay' in options === false) {
      options.autoplay = {
        delay: this.autoplay,
      };
    }

    if (this.showDefaultPagination && 'pagination' in options === false) {
      options.pagination = { el: '.swiper-pagination' };
    }

    if (this.showNavigationButton && 'navigation' in options === false) {
      options.navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      };
    }

    this.async(() => {
      this.swiper = new Swiper(this.$$('.swiper-container'), options);
    }, 300);
  }
}

define('ui-slides', UISlides);
