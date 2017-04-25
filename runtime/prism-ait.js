/* global Prism */

(function () {
  Prism.languages.ait = {
    'comment': /#[\w\W]*?\n/,
    'string': {
      pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'keyword': /(.*)(:)(\s|$)/,
    'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    'punctuation': /[[\];:]/,
    'variable': /[a-zA-Z0-9<>+-=\\\*%]+/
  }
}())
