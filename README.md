<p align="center">
  <a href="https://travis-ci.org/ccckmit/chinese_convert"><img src="https://img.shields.io/travis/ccckmit/chinese_convert.svg" alt="Travis"></a>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://www.npmjs.com/package/chinese_convert"><img src="https://img.shields.io/npm/dm/chinese_convert.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/chinese_convert"><img src="https://img.shields.io/npm/v/chinese_convert.svg" alt="npm version"></a>
</p>

# chinese_convert

## Install

```
$ npm install chinese_convert
```

## Example

File: ex1.js

```
var convert = require('chinese_convert')
var cn = '简繁转换功能测试'
var tw = convert.cn2tw(cn)
var cn2 = convert.tw2cn(tw)

console.log('cn=%s => tw=%s', cn, tw)
console.log('tw=%s => cn2=%s', tw, cn2)
```

## Run 

```
$ node ex1.js
cn=简繁转换功能测试 => tw=簡繁轉換功能測試
tw=簡繁轉換功能測試 => cn2=简繁转换功能测试
```

## TO DO

目前沒有處理『簡轉繁』時的一對多情況，完全是按照一字對一字的轉換，沒有加入詞彙來解決此問題。

所以像 『划丑發几只里谷云后么准舍松采制干面』這些一個簡體字對到多個繁體字的情況，是採用一對一的轉換方法，有時會轉得不好。

## 類似套件

* <https://www.npmjs.com/package/opencc>
* <https://github.com/Pleasurazy/chinese-conv>


