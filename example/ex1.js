var convert = require('../chinese_convert')
var cn = '简繁转换功能测试'
var tw = convert.cn2tw(cn)
var cn2 = convert.tw2cn(tw)

console.log('cn=%s => tw=%s', cn, tw)
console.log('tw=%s => cn2=%s', tw, cn2)
