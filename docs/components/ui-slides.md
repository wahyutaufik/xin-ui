---
title: ui-slides
---

```js
import 'xin-ui/ui-slides';
```

## Usage

```html
<ui-slides show-default-pagination show-navigation-button autoplay="5000" options="[[slideOptions]]">
  <div class="swiper-slide">Slide 1</div>
  <div class="swiper-slide">Slide 2</div>
  <div class="swiper-slide">Slide 3</div>
</ui-slides>
```

<a class="ui-button ui-button--colored" href="#!/examples/ui-slides">Example</a>

### Properties

Name | Type | Description | Default Value
- | - | - | -
showDefaultPagination | Boolean | Show default pagination | false
showNavigationButton | Boolean | Show navigation button | false
autoplay | Number | Delay of autoplay | 0
options | Object | Full options object, will override options defined by other properties above

