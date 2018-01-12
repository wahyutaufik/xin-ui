---
title: ui-button
---

```js
import 'xin-cli/scss/ui-button.scss';
```

## Usage

```html
<button class="ui-button ui-button--icon">
  <i class="material-icons">menu</i>
</button>
```

## Modifiers

### ui-button--raised

```html
<button class="ui-button">Default</button>
<button class="ui-button ui-button--raised">Raised</button>
<button class="ui-button ui-button--raised ui-button--colored">Raised Colored</button>
<button class="ui-button ui-button--raised ui-button--outline">Raised Outlined</button>
```

<div class="ui-panel">
  <button class="ui-button">Default</button>
  <button class="ui-button ui-button--raised">Raised</button>
  <button class="ui-button ui-button--raised ui-button--colored">Raised Colored</button>
  <button class="ui-button ui-button--raised ui-button--outline">Raised Outlined</button>
</div>

### ui-button--colored

```html
<button class="ui-button">Default</button>
<button class="ui-button ui-button--secondary">Secondary</button>
<button class="ui-button ui-button--light">Light</button>
<button class="ui-button ui-button--dark">Dark</button>
<button class="ui-button ui-button--danger">Danger</button>
<button class="ui-button ui-button--disabled">Disabled</button>

<hr>

<button class="ui-button ui-button--colored">Default</button>
<button class="ui-button ui-button--colored ui-button--secondary">Secondary</button>
<button class="ui-button ui-button--colored ui-button--light">Light</button>
<button class="ui-button ui-button--colored ui-button--dark">Dark</button>
<button class="ui-button ui-button--colored ui-button--danger">Danger</button>
<button class="ui-button ui-button--colored ui-button--disabled">Disabled</button>
<button class="ui-button ui-button--colored ui-button--raised">Raised</button>
```

<div class="ui-panel">
  <button class="ui-button">Default</button>
  <button class="ui-button ui-button--secondary">Secondary</button>
  <button class="ui-button ui-button--light">Light</button>
  <button class="ui-button ui-button--dark">Dark</button>
  <button class="ui-button ui-button--danger">Danger</button>
  <button class="ui-button ui-button--disabled">Disabled</button>

  <hr>

  <button class="ui-button ui-button--colored">Default</button>
  <button class="ui-button ui-button--colored ui-button--secondary">Secondary</button>
  <button class="ui-button ui-button--colored ui-button--light">Light</button>
  <button class="ui-button ui-button--colored ui-button--dark">Dark</button>
  <button class="ui-button ui-button--colored ui-button--danger">Danger</button>
  <button class="ui-button ui-button--colored ui-button--disabled">Disabled</button>
  <button class="ui-button ui-button--colored ui-button--raised">Raised</button>
</div>

### ui-button--outline

```html
<button class="ui-button">Default</button>
<button class="ui-button ui-button--secondary">Secondary</button>
<button class="ui-button ui-button--light">Light</button>
<button class="ui-button ui-button--dark">Dark</button>
<button class="ui-button ui-button--danger">Danger</button>
<button class="ui-button ui-button--disabled">Disable</button>

<hr>

<button class="ui-button ui-button--outline">Default</button>
<button class="ui-button ui-button--outline ui-button--secondary">Secondary</button>
<button class="ui-button ui-button--outline ui-button--light">Light</button>
<button class="ui-button ui-button--outline ui-button--dark">Dark</button>
<button class="ui-button ui-button--outline ui-button--danger">Danger</button>
<button class="ui-button ui-button--outline ui-button--disabled">Disable</button>
<button class="ui-button ui-button--outline ui-button--raised">Raised</button>
```

<div class="ui-panel">
  <button class="ui-button">Default</button>
  <button class="ui-button ui-button--secondary">Secondary</button>
  <button class="ui-button ui-button--light">Light</button>
  <button class="ui-button ui-button--dark">Dark</button>
  <button class="ui-button ui-button--danger">Danger</button>
  <button class="ui-button ui-button--disabled">Disable</button>

  <hr>

  <button class="ui-button ui-button--outline">Default</button>
  <button class="ui-button ui-button--outline ui-button--secondary">Secondary</button>
  <button class="ui-button ui-button--outline ui-button--light">Light</button>
  <button class="ui-button ui-button--outline ui-button--dark">Dark</button>
  <button class="ui-button ui-button--outline ui-button--danger">Danger</button>
  <button class="ui-button ui-button--outline ui-button--disabled">Disable</button>
  <button class="ui-button ui-button--outline ui-button--raised">Raised</button>
</div>

### ui-button--block

```html
<button class="ui-button ui-button--colored ui-button--block">Block</button>

<hr>

<button class="ui-button">Default</button>
<button class="ui-button ui-button--danger">Danger</button>
<button class="ui-button ui-button--colored">Colored</button>
<button class="ui-button ui-button--danger ui-button--colored">Danger Colored</button>
```

<div class="ui-panel">
  <button class="ui-button ui-button--colored ui-button--block">Block</button>

  <hr>

  <button class="ui-button">Default</button>
  <button class="ui-button ui-button--danger">Danger</button>
  <button class="ui-button ui-button--colored">Colored</button>
  <button class="ui-button ui-button--danger ui-button--colored">Danger Colored</button>
</div>

### ui-button-icon

```html
<button class="ui-button ui-button--icon">
  <i class="material-icons">face</i>
</button>

<button class="ui-button ui-button--icon ui-button--colored">
  <i class="material-icons">face</i>
</button>

<hr>

<button class="ui-button ui-button--colored">
  <i class="material-icons">motorcycle</i> Left Icon
</button>

<button class="ui-button ui-button--colored">
  Right Icon <i class="material-icons">stars</i>
</button>
```

<div class="ui-panel">
  <button class="ui-button ui-button--icon">
    <i class="material-icons">face</i>
  </button>

  <button class="ui-button ui-button--icon ui-button--colored">
    <i class="material-icons">face</i>
  </button>

  <hr>

  <button class="ui-button ui-button--colored">
    <i class="material-icons">motorcycle</i> Left Icon
  </button>

  <button class="ui-button ui-button--colored">
    Right Icon <i class="material-icons">stars</i>
  </button>
</div>
