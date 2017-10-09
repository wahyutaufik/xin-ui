---
title: ui-list
---

```js
import 'xin-ui/scss/ui-list.scss';
```

## Usage

```html
<div class="ui-list">
  <a class="ui-list__item" href="#!/">Home</a>
  <span class="ui-list__separator"></span>
  <a class="ui-list__item" href="#!/foo">Foo</a>
  <a class="ui-list__item" href="#!/bar">Bar</a>
  <a class="ui-list__item" href="#!/baz">Baz</a>
</div>
```

## Elements

### ui-list__item

<div class="ui-list ui-panel">
  <a class="ui-list__item">#1 One</a>
  <a class="ui-list__item">#2 Two</a>
  <a class="ui-list__item">#3 Three</a>
</div>

### ui-list__header

<div class="ui-list ui-panel">
  <div class="ui-list__header">Header</div>
  <a class="ui-list__item">#1 One</a>
  <a class="ui-list__item">#2 Two</a>
  <a class="ui-list__item">#3 Three</a>
</div>

### ui-list__separator

<div class="ui-list ui-panel">
  <a class="ui-list__item">#1 One</a>
  <a class="ui-list__item">#1 One X</a>
  <span class="ui-list__separator"></span>
  <a class="ui-list__item">#2 Two</a>
  <a class="ui-list__item">#2 Two X</a>
  <span class="ui-list__separator">Separator Title</span>
  <a class="ui-list__item">#3 Three</a>
  <a class="ui-list__item">#3 Three X</a>
</div>
