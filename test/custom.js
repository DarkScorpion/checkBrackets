
var { equal } = require('assert');
var { checkCustomBrackets } = require('../checkBrackets.js');

describe('Custom brackets: success', () => {
  it('Simple: <> : <><><>', () => {
    var customArr = [
      { open: '<', close: '>' },
    ]
    equal(checkCustomBrackets('<><><>', customArr), true);
  })

  it('Simple: <> {}: {<><>} =) {<>}{<>}', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '{', close: '}' },
    ]
    equal(checkCustomBrackets('{<><>} =) {<>}{<>}', customArr), true);
  })

  it('Nested: <> ?% : aaa<>bbb<>?ccc%', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '?', close: '%' },
    ]
    equal(checkCustomBrackets('aaa<>bbb<>?ccc%', customArr), true);
  })


})

describe('Custom brackets: fail', () => {
  it('Simple: <> : <><>__>', () => {
    var customArr = [
      { open: '<', close: '>' },
    ]
    equal(checkCustomBrackets('<><>>', customArr), false);
  })

  it('Simple: <> {}: {<>} > {<>}', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '{', close: '}' },
    ]
    equal(checkCustomBrackets('{<>} > {<>}', customArr), false);
  })

  it('Nested: <> ?% : aaa<>bbb<>?__?__ccc%', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '?', close: '%' },
    ]
    equal(checkCustomBrackets('aaa<>bbb<>??ccc%', customArr), false);
  })

})

