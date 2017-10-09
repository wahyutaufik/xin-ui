---
title: ui-header
---

```js
import 'xin-cli/scss/ui-header.scss';
```

## Usage

```html
<header class="ui-header">
  <div class="ui-header__row">
    <span class="ui-header__title">The Title</span>
  </div>
</header>
```

## Elements

### ui-header__row

Add row to `ui-header`

<div class="ui-panel" style="padding: 0">
  <header class="ui-header">
    <div class="ui-header__row">
      <span class="ui-header__title">The Title</span>
    </div>
  </header>

  <div class="ui-padding">
    <p>Content</p>
  </div>
</div>

Header can have multi rows

<div class="ui-panel" style="padding: 0">
  <header class="ui-header">
    <div class="ui-header__row">
      <span class="ui-header__title">The Title</span>
    </div>
    <div class="ui-header__row ui-hpadding" style="font-style: italic">
      Other row
    </div>
  </header>

  <div class="ui-padding">
    <p>Content</p>
  </div>
</div>

### ui-header__title

Show title of `ui-header`
