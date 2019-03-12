# [sn-js-utils](https://github.com/CozySnail/sn-js-utils)
[![](https://img.shields.io/static/v1.svg?label=Powered%20by&message=snail&color=%3CCOLOR%3E)](https://github.com/CozySnail/sn-js-utils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CozySnail/sn-js-utils/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/CozySnail/sn-js-utils.svg?branch=master)](https://travis-ci.org/CozySnail/sn-js-utils)
[![Coveralls](https://img.shields.io/coveralls/CozySnail/sn-js-utils.svg)](https://coveralls.io/github/CozySnail/sn-js-utils)
[![npm](https://img.shields.io/badge/npm-6.8.0-orange.svg)](https://www.npmjs.com/package/sn-js-utils)
[![NPM downloads](http://img.shields.io/npm/dm/sn-js-utils.svg?style=flat-square)](http://www.npmtrends.com/sn-js-utils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/CozySnail/sn-js-utils.svg)](http://isitmaintained.com/project/CozySnail/sn-js-utils "Percentage of issues still open")

简体中文[English] | (README.md)

The best third party `JS|TS` library scaffold. By forking or cloning the repository, you can complete the basic framework for building a new library.

## Characteristics

- Coded in ES6+ or TypeScript, easily compile and generate production code
- Integrated babel-runtime (Default set to closed)
- Third parties rely on automatic injection(Tree shaking)
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated code style lint(eslint|tslint).
- Integrated unit test environment(mocha).
- Integrated test coverage(istanbul).
- Integrated continuous integration tool [travis-ci](https://www.travis-ci.org/)
- Supports banner
- Supports one-key renaming.
- Supports [sideEffects](https://github.com/webpack/webpack/tree/master/examples/side-effects)
- Integrated Issue template

**Note:** When `export` and `export default` are not used at the same time, there is the option to 
turn on `legacy mode`. Under `legacy mode`, the module system can be compatible with `IE6-8`. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

> Note: Compiling code depend on ES5, so you need import [es5-shim](http://github.com/es-shims/es5-shim/) to compatible with `IE6-8`, here is a [demo](./demo/demo-global.html)

## Directory
```
├── demo - Using demo
├── dist - Compiler output code
├── doc - Project documents
├── src - Source code directory
├── test - Unit tests
├── CHANGELOG.md - Change log
└── TODO.md - Planned features
```

## Usage Instructions

Using npm, download and install the code. 

```bash
$ npm install --save sn-js-utils
```

For node environment：

```js
var base = require('sn-js-utils');
```

For webpack or similar environment：

```js
import base from 'sn-js-utils';
```

For requirejs environment:

```js
requirejs(['node_modules/sn-js-utils/dist/index.aio.js'], function (base) {
    // do something...
})
```

For browser environment:

```html
<script src="node_modules/sn-js-utils/dist/index.aio.js"></script>
```

## Documents
[API](./doc/api.md)

## Contribution Guide

How to switch `JS` and `TS`

- `srctype` and `scripts` in `package.json`
- `require` file of `test/test.js`
- `require` file of `test/browser/index.html`

For the first time to run, you need to install dependencies firstly.

```bash
$ npm install
```

To build the project:

```bash
$ npm run build
```

To run unit tests:

```bash
$ npm test
```

> Note: The browser environment needs to be tested manually under ```test/browser```

Modify the version number in package.json, modify the version number in README.md, modify the CHANGELOG.md, and then release the new version.

```bash
$ npm run release
```

Publish the new version to NPM.

```bash
$ npm publish
```

For renaming project, you need change `fromName` and `toName` in `rename.js`, then run `npm run rename`, this command will auto renaming names for below files:

- The messages in README.md
- The messages in package.json
- The messages in config/rollup.js
- The repository name in test/browser/index.html
- Library name in demo/demo-global.html

## Contributors

[contributors](https://github.com/CozySnail/sn-js-utils/graphs/contributors)

## Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)

## Current Users


other

## Relative links

- [typescript-library-template](https://github.com/jiumao-fe/typescript-library-template)
