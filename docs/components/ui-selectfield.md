---
title: ui-selectfield
---

```js
import 'xin-ui/ui-selectfield';
```

## Usage

```html
<ui-selectfield label="ui-selectfield" value="{{value}}"
  options='[
    {"label": "One", "value": "1"},
    {"label": "Two", "value": "2"},
    {"label": "Three", "value": "3"}
  ]'>
</ui-selectfield>
```

<a class="ui-button ui-button--colored" href="#!/examples/ui-selectfield">Example</a>

### Properties

Name | Type | Description
- | - | -
value | String | Value to input, when value changed will fire change events
label | String |
options | Array |
labelKey | String | Default value: "label"
valueKey | String | Default value: "value"

### Events

Name | Description
- | -
change | Trigger when value changed
