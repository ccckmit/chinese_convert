var tw2cn = require('./tw2cn.js')
var cn2tw = require('./cn2tw.js')

var M = module.exports = {}

M.charMap = function (s, s2t) {
  var t = s2t[s]
  return (typeof t === 'undefined') ? s : t
}

M.textMap = function (text, s2t) {
  var toText = []
  for (var i = 0; i < text.length; i++) {
    toText[i] = M.charMap(text[i], s2t)
  }
  return toText.join('')
}

M.cn2tw = function (text) {
  return M.textMap(text, cn2tw)
}

M.tw2cn = function (text) {
  return M.textMap(text, tw2cn)
}
