# [sn-js-utils](https://github.com/CozySnail/sn-js-utils)
[![](https://img.shields.io/static/v1.svg?label=Powered%20by&message=snail&color=%3CCOLOR%3E)](https://github.com/CozySnail/sn-js-utils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CozySnail/sn-js-utils/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/CozySnail/sn-js-utils.svg?branch=master)](https://travis-ci.org/CozySnail/sn-js-utils)
[![Coveralls](https://img.shields.io/coveralls/CozySnail/sn-js-utils.svg)](https://coveralls.io/github/CozySnail/sn-js-utils)
[![npm](https://img.shields.io/badge/npm-6.8.0-orange.svg)](https://www.npmjs.com/package/sn-js-utils)
[![NPM downloads](http://img.shields.io/npm/dm/sn-js-utils.svg?style=flat-square)](http://www.npmtrends.com/sn-js-utils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/CozySnail/sn-js-utils.svg)](http://isitmaintained.com/project/CozySnail/sn-js-utils "Percentage of issues still open")

简体中文 | [English](README.en-US.md)

 `JS|TS` 第三方常用工具类库

## :star: 特性

-  `JS|TS` 第三方常用工具类库

## :pill: 兼容性
单元测试支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save sn-js-utils
```

如果你是node环境

```js
const snJsUtils = require('../dist/index.js');
```

如果你是webpack等环境

```js
import { DateUtil } from 'sn-js-utils';
```

如果你是requirejs环境

```js
requirejs(['node_modules/sn-js-utils/dist/index.aio.js'], function (snJsUtils) {
    console.log(snJsUtils.DateUtil.formatDate(new Date(), 'yyyy-MM-dd'));
})
```

如果你是浏览器环境

```html
<script src="node_modules/sn-js-utils/dist/index.aio.js"></script>
```

## :bookmark_tabs: 文档
[API](./doc/api.zh-CN.md)

## 贡献者列表

[contributors](https://github.com/CozySnail/sn-js-utils/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)

## :bulb: 谁在使用
