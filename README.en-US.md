# [sn-js-utils](https://github.com/CozySnail/sn-js-utils)
[![](https://img.shields.io/static/v1.svg?label=Powered%20by&message=snail&color=%3CCOLOR%3E)](https://github.com/CozySnail/sn-js-utils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CozySnail/sn-js-utils/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/CozySnail/sn-js-utils.svg?branch=master)](https://travis-ci.org/CozySnail/sn-js-utils)
[![Coveralls](https://img.shields.io/coveralls/CozySnail/sn-js-utils.svg)](https://coveralls.io/github/CozySnail/sn-js-utils)
[![npm](https://img.shields.io/badge/npm-6.8.0-orange.svg)](https://www.npmjs.com/package/sn-js-utils)
[![NPM downloads](http://img.shields.io/npm/dm/sn-js-utils.svg?style=flat-square)](http://www.npmtrends.com/sn-js-utils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/CozySnail/sn-js-utils.svg)](http://isitmaintained.com/project/CozySnail/sn-js-utils "Percentage of issues still open")

[简体中文](README.md) | English

The third party `JS|TS` common library

### :star: special
 
 -  The third party `JS|TS` common library

## :pill: Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

## :rocket: Usage Instructions

Using npm, download and install the code. 

```bash
$ npm install --save sn-js-utils
```

For node environment：

```js
const snJsUtils = require('../dist/index.js');
```

For webpack or similar environment：

```js
import { DateUtil } from 'sn-js-utils';
```

For requirejs environment:

```js
requirejs(['node_modules/sn-js-utils/dist/index.aio.js'], function (snJsUtils) {
    console.log(snJsUtils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
})
```

For browser environment:

```html
<script src="node_modules/sn-js-utils/dist/index.aio.js"></script>
```

## :bookmark_tabs: Documents
[API](./doc/api.md)

## Contributors

[contributors](https://github.com/CozySnail/sn-js-utils/graphs/contributors)

## :gear: Change Log
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: TODO
[TODO.md](./TODO.md)

## :bulb: Current Users
