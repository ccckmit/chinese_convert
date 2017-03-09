var assert = require('assert')
var convert = require('../chinese_convert')

describe('convert', function () {
  it('test cn2tw', function () {
    assert.equal(convert.cn2tw('简体转繁体功能测试'), '簡體轉繁體功能測試')
  })
  it('test tw2cn', function () {
    assert.equal(convert.tw2cn('繁體轉簡體功能測試'), '繁体转简体功能测试')
  })
})
