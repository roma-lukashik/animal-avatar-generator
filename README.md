<div align="center">
  <img src="https://raw.githubusercontent.com/roma-lukashik/animal-avatar-generator/e9b435bb28c8ae2dda224678bdda8faad6035373/preview.svg"/>
</div>

<h1 align="center">Animal Avatar Generator</h1>

<div align="center">
  <a href="https://github.com/roma-lukashik/animal-avatar-generator/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/roma-lukashik/animal-avatar-generator">
  </a>
  <a href="https://www.npmjs.com/package/animal-avatar-generator" target="_blank">
    <img src="https://img.shields.io/npm/v/animal-avatar-generator" alt="Latest Version">
  </a>
  <a href="https://www.npmjs.com/package/animal-avatar-generator" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dw/animal-avatar-generator">
  </a>
</div>

Generate SVG avatars on client side from a string seed.
As long as the same version of the library is used it always returns the same avatar for the corresponding seed.

<a href="https://roma-lukashik.github.io/animal-avatar-generator/dist/">Live example</a>

<h2>Install</h2>

Using npm:
```bash
$ npm install animal-avatar-generator --save
```
or using yarn:
```bash
$ yarn add animal-avatar-generator
```

<h2>Usage</h2>

```ts
import avatar from 'animal-avatar-generator'

const svg = avatar('your custom seed', { size: 200 })
document.getElementById('avatar').innerHTML = svg
```

<h2>Configuration options</h2>

|Name|Type|Description|Default|
|---|---|---|---|
|`size`|`number`|Avatar size in pixels|`150`|
|`round`|`boolean`|Use round or rectangle shape|`true`|
|`blackout`|`boolean`|Use blackout for right side of an avatar|`true`|
|`avatarColors`|`string[]`|Palette for avatar colors|`['#d7b89c', '#b18272','#ec8a90','#a1Ac88','#99c9bd','#50c8c6']`|
|`backgroundColors`|`string[]`|Palette for background colors|`['#fcf7d1', '#ece2e1','#e4e3cd','#c4ddd6','#b5f4bc']`|

Missing a configuration? [Raise an issue](https://github.com/roma-lukashik/animal-avatar-generator/issues/new?title=New%20configuration:).

<h2>License</h2>
<a href="https://github.com/roma-lukashik/animal-avatar-generator/blob/master/LICENSE">MIT</a>
