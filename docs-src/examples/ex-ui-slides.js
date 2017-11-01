import { define, Component } from '@xinix/xin';

import '../../ui-slides';
import '../../scss/ui-card.scss';

import './ex-ui-slides.scss';
import html from './ex-ui-slides.html';

class ExUiSlides extends Component {
  get template () {
    return html;
  }
}

define('ex-ui-slides', ExUiSlides);
