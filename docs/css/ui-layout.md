---
title: ui-layout
---

```js
import 'xin-ui/scss/ui-layout.scss';
```

### html.ui-fit

Fit page to screen

```html
<html class="fit">
  <body>
    ...
  </body>
</html>
```

### ui-layout

#### Modifiers

##### ui-layout--v

```html
<div class="ui-layout ui-layout--v" style="border: 1px solid #ccc; height: 200px">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-padding ui-flex" style="background-color: #aaf">#aaf flexible</div>
</div>
```

<div class="ui-layout ui-layout--v" style="border: 1px solid #ccc; height: 200px">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-padding ui-flex" style="background-color: #aaf">#aaf flexible</div>
</div>

##### ui-layout--h

```html
<div class="ui-layout ui-layout--h" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-padding ui-flex" style="background-color: #aaf">#aaf flexible</div>
</div>
```

<div class="ui-layout ui-layout--h" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-padding ui-flex" style="background-color: #aaf">#aaf flexible</div>
</div>

##### ui-layout--wrap

```html
<div class="ui-layout ui-layout--h ui-layout--wrap" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #aaf">#0000</div>
  <div class="ui-padding" style="background-color: #faa">#0001</div>
  <div class="ui-padding" style="background-color: #aaf">#0002</div>
  <div class="ui-padding" style="background-color: #faa">#0003</div>
  <div class="ui-padding" style="background-color: #aaf">#0004</div>
  <div class="ui-padding" style="background-color: #faa">#0005</div>
  <div class="ui-padding" style="background-color: #aaf">#0006</div>
  <div class="ui-padding" style="background-color: #faa">#0007</div>
  <div class="ui-padding" style="background-color: #aaf">#0008</div>
  <div class="ui-padding" style="background-color: #faa">#0009</div>
</div>
```

<div class="ui-layout ui-layout--h ui-layout--wrap" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #aaf">#0000</div>
  <div class="ui-padding" style="background-color: #faa">#0001</div>
  <div class="ui-padding" style="background-color: #aaf">#0002</div>
  <div class="ui-padding" style="background-color: #faa">#0003</div>
  <div class="ui-padding" style="background-color: #aaf">#0004</div>
  <div class="ui-padding" style="background-color: #faa">#0005</div>
  <div class="ui-padding" style="background-color: #aaf">#0006</div>
  <div class="ui-padding" style="background-color: #faa">#0007</div>
  <div class="ui-padding" style="background-color: #aaf">#0008</div>
  <div class="ui-padding" style="background-color: #faa">#0009</div>
</div>

```html
<div class="ui-layout ui-layout--h ui-scroll" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #aaf">#0000</div>
  <div class="ui-padding" style="background-color: #faa">#0001</div>
  <div class="ui-padding" style="background-color: #aaf">#0002</div>
  <div class="ui-padding" style="background-color: #faa">#0003</div>
  <div class="ui-padding" style="background-color: #aaf">#0004</div>
  <div class="ui-padding" style="background-color: #faa">#0005</div>
  <div class="ui-padding" style="background-color: #aaf">#0006</div>
  <div class="ui-padding" style="background-color: #faa">#0007</div>
  <div class="ui-padding" style="background-color: #aaf">#0008</div>
  <div class="ui-padding" style="background-color: #faa">#0009</div>
</div>
```

<div class="ui-layout ui-layout--h ui-scroll" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #aaf">#0000</div>
  <div class="ui-padding" style="background-color: #faa">#0001</div>
  <div class="ui-padding" style="background-color: #aaf">#0002</div>
  <div class="ui-padding" style="background-color: #faa">#0003</div>
  <div class="ui-padding" style="background-color: #aaf">#0004</div>
  <div class="ui-padding" style="background-color: #faa">#0005</div>
  <div class="ui-padding" style="background-color: #aaf">#0006</div>
  <div class="ui-padding" style="background-color: #faa">#0007</div>
  <div class="ui-padding" style="background-color: #aaf">#0008</div>
  <div class="ui-padding" style="background-color: #faa">#0009</div>
</div>

### ui-flex

Use with `ui-layout`

```html
<div class="ui-layout ui-layout--h" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-padding ui-flex" style="background-color: #aaf">#aaf flexible</div>
</div>
```

<div class="ui-layout ui-layout--h" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-padding ui-flex" style="background-color: #aaf">#aaf flexible</div>
</div>

### ui-spacer

Use with `ui-layout`

```html
<div class="ui-layout ui-layout--h" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-spacer"></div>
  <div class="ui-padding" style="background-color: #aaf">#aaf</div>
</div>
```

<div class="ui-layout ui-layout--h" style="border: 1px solid #ccc">
  <div class="ui-padding" style="background-color: #faa">#faa</div>
  <div class="ui-spacer"></div>
  <div class="ui-padding" style="background-color: #aaf">#aaf</div>
</div>

### ui-padding

```html
<div class="ui-padding">
  In amet aliquip deserunt adipisicing cupidatat do officia nostrud. Proident voluptate nostrud dolore duis ut in laborum esse qui voluptate reprehenderit aliqua aliqua non. Amet nostrud dolore elit voluptate irure voluptate adipisicing pariatur Lorem anim. Adipisicing magna magna consequat sit velit aute anim sunt. Duis minim in duis fugiat anim aute. Est eiusmod cupidatat incididunt cupidatat nostrud. Cillum magna ea tempor excepteur amet.
</div>
```

<div class="ui-padding">
  In amet aliquip deserunt adipisicing cupidatat do officia nostrud. Proident voluptate nostrud dolore duis ut in laborum esse qui voluptate reprehenderit aliqua aliqua non. Amet nostrud dolore elit voluptate irure voluptate adipisicing pariatur Lorem anim. Adipisicing magna magna consequat sit velit aute anim sunt. Duis minim in duis fugiat anim aute. Est eiusmod cupidatat incididunt cupidatat nostrud. Cillum magna ea tempor excepteur amet.
</div>

### ui-vpadding

```html
<div class="ui-vpadding">
  In amet aliquip deserunt adipisicing cupidatat do officia nostrud. Proident voluptate nostrud dolore duis ut in laborum esse qui voluptate reprehenderit aliqua aliqua non. Amet nostrud dolore elit voluptate irure voluptate adipisicing pariatur Lorem anim. Adipisicing magna magna consequat sit velit aute anim sunt. Duis minim in duis fugiat anim aute. Est eiusmod cupidatat incididunt cupidatat nostrud. Cillum magna ea tempor excepteur amet.
</div>
```

<div class="ui-vpadding">
  In amet aliquip deserunt adipisicing cupidatat do officia nostrud. Proident voluptate nostrud dolore duis ut in laborum esse qui voluptate reprehenderit aliqua aliqua non. Amet nostrud dolore elit voluptate irure voluptate adipisicing pariatur Lorem anim. Adipisicing magna magna consequat sit velit aute anim sunt. Duis minim in duis fugiat anim aute. Est eiusmod cupidatat incididunt cupidatat nostrud. Cillum magna ea tempor excepteur amet.
</div>

### ui-hpadding

```html
<div class="ui-hpadding">
  In amet aliquip deserunt adipisicing cupidatat do officia nostrud. Proident voluptate nostrud dolore duis ut in laborum esse qui voluptate reprehenderit aliqua aliqua non. Amet nostrud dolore elit voluptate irure voluptate adipisicing pariatur Lorem anim. Adipisicing magna magna consequat sit velit aute anim sunt. Duis minim in duis fugiat anim aute. Est eiusmod cupidatat incididunt cupidatat nostrud. Cillum magna ea tempor excepteur amet.
</div>
```

<div class="ui-hpadding">
  In amet aliquip deserunt adipisicing cupidatat do officia nostrud. Proident voluptate nostrud dolore duis ut in laborum esse qui voluptate reprehenderit aliqua aliqua non. Amet nostrud dolore elit voluptate irure voluptate adipisicing pariatur Lorem anim. Adipisicing magna magna consequat sit velit aute anim sunt. Duis minim in duis fugiat anim aute. Est eiusmod cupidatat incididunt cupidatat nostrud. Cillum magna ea tempor excepteur amet.
</div>

### ui-scroll

<div class="ui-scroll" style="border: 1px solid #ccc; height: 200px; position: relative">
  <div style="position: absolute; background-color: #f00; width: 100px; height: 100px;"></div>
  <div style="position: absolute; background-color: #00f; width: 100px; height: 100px; top: 500px; left: 500px;"></div>
  <div style="position: absolute; background-color: #0f0; width: 100px; height: 100px; top: 100px; left: 100px;"></div>
</div>

### ui-vscroll

<div class="ui-vscroll" style="border: 1px solid #ccc; height: 200px; position: relative">
  <div style="position: absolute; background-color: #f00; width: 100px; height: 100px;"></div>
  <div style="position: absolute; background-color: #00f; width: 100px; height: 100px; top: 500px; left: 500px;"></div>
  <div style="position: absolute; background-color: #0f0; width: 100px; height: 100px; top: 100px; left: 100px;"></div>
</div>

### ui-vscroll

<div class="ui-hscroll" style="border: 1px solid #ccc; height: 200px; position: relative">
  <div style="position: absolute; background-color: #f00; width: 100px; height: 100px;"></div>
  <div style="position: absolute; background-color: #00f; width: 100px; height: 100px; top: 500px; left: 500px;"></div>
  <div style="position: absolute; background-color: #0f0; width: 100px; height: 100px; top: 100px; left: 100px;"></div>
</div>

### ui-panel

Show common panel

<div class="ui-panel">
  Amet magna est magna duis ea exercitation pariatur qui eiusmod duis et velit laborum eu. Eu tempor labore dolore pariatur ipsum deserunt consectetur in. Ipsum fugiat anim non sint laboris ut dolore nulla elit ut do labore. Occaecat id cillum veniam voluptate dolor ea consectetur dolor incididunt dolor nostrud sit. Est adipisicing quis laborum nostrud irure eu do duis pariatur mollit elit laboris. Velit tempor duis qui cupidatat minim nostrud velit do. Nulla ad aliqua voluptate aliqua sit in duis eiusmod sunt aliquip eiusmod ex proident eiusmod.
</div>
