import { Component, define } from '@xinix/xin';

import html from './templates/ui-slides.html';
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

  attached () {
    super.attached();

    System.import('swiper').then(Swiper => {
      const { options } = this;

      if (this.autoplay) {
        options.autoplay = this.autoplay;
      }

      if (this.showDefaultPagination) {
        options.pagination = '.swiper-pagination';
      }

      if (this.showNavigationButton) {
        options.nextButton = '.swiper-button-next';
        options.prevButton = '.swiper-button-prev';
      }

      this.async(() => {
        this.swiper = new Swiper(this.$$('.swiper-container'), options);
      }, 300);
    });
  }
}

define('ui-slides', UISlides);
