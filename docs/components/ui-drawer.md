---
title: ui-drawer
---

```js
import 'xin-ui/ui-drawer';
```

Drawer can be drag out to open or close menu. When links inside drawer tapped /
clicked, drawer will be closed.

## Usage

```html
<ui-drawer id="drawer">
  <div class="ui-list">
    <a class="ui-list__item" href="#!/">Home</a>
    <span class="ui-list__separator"></span>
    <a class="ui-list__item" href="#!/foo">Foo</a>
    <a class="ui-list__item" href="#!/bar">Bar</a>
    <a class="ui-list__item" href="#!/baz">Baz</a>
  </div>
</ui-drawer>
```

### Methods

Async | Name | Description
- | - | -
async | open() | Open drawer
async | close() | Close drawer