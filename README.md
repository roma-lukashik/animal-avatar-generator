<div align="center">
  <img src="https://raw.githubusercontent.com/roma-lukashik/animal-avatar-generator/b6313d7993313e1c73014f8468b350aa827da1a1/preview.svg"/>
</div>

<h1 align="center">Animal Avatar Generator</h1>

<div align="center">
  <a href="https://github.com/roma-lukashik/animal-avatar-generator/blob/master/LICENSE">
    <img alt="GitHub license" src="https://img.shields.io/github/license/roma-lukashik/animal-avatar-generator">
  </a>
  <a href="https://www.npmjs.com/package/animal-avatar-generator" target="_blank">
    <img src="https://img.shields.io/npm/v/animal-avatar-generator" alt="Latest Version">
  </a>
  <img alt="npm" src="https://img.shields.io/npm/dw/animal-avatar-generator">
</div>

Generate SVG avatars on client side from a string seed.
As long as the same version of the library used it always returns the same avatar for the corresponding seed.

<a href="https://roma-lukashik.github.io/animal-avatar-generator/">Live example</a>

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

<h2>License</h2>
<a href="https://github.com/roma-lukashik/animal-avatar-generator/blob/master/LICENSE">MIT</a>
