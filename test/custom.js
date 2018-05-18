
var { equal } = require('assert');
var { checkCustomBrackets } = require('../checkBrackets.js');

describe('Custom brackets: success', () => {
  it('Simple: <> : <>', () => {
    var customArr = [
      { open: '<', close: '>' },
    ]
    equal(checkCustomBrackets('<>', customArr), true);
  })

  it('Simple: #$ : zzz#$aaa#bbb$', () => {
    var customArr = [
      { open: '#', close: '$' },
    ]
    equal(checkCustomBrackets('zzz#$aaa#bbb$', customArr), true);
  })

  it('Simple: <>,{} : {<><>} =) {<>}{<>}', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '{', close: '}' },
    ]
    equal(checkCustomBrackets('{<><>} =) {<>}{<>}', customArr), true);
  })

  it('Nested: <>,?% : aaa<>bbb<>?ccc%', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '?', close: '%' },
    ]
    equal(checkCustomBrackets('aaa<>bbb<>?ccc%', customArr), true);
  })

})

describe('Custom brackets: fail', () => {
  it('Simple: <> : >>', () => {
    var customArr = [
      { open: '<', close: '>' },
    ]
    equal(checkCustomBrackets('>>', customArr), false);
  })

  it('Simple: <> : <><>__>', () => {
    var customArr = [
      { open: '<', close: '>' },
    ]
    equal(checkCustomBrackets('<><>>', customArr), false);
  })

  it('Simple: #$ : zzz#$aaa__$__#zzz', () => {
    var customArr = [
      { open: '#', close: '$' },
    ]
    equal(checkCustomBrackets('zzz#$aaa$#zzz', customArr), false);
  })

  it('Simple: <> : ><aaa<>', () => {
    var customArr = [
      { open: '<', close: '>' },
    ]
    equal(checkCustomBrackets('>><aaa<>', customArr), false);
  })

  it('Simple: <>,{}: {<>} > {<>}', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '{', close: '}' },
    ]
    equal(checkCustomBrackets('{<>} > {<>}', customArr), false);
  })

  it('Nested: <>,?% : aaa<>bbb<>?__?__ccc%', () => {
    var customArr = [
      { open: '<', close: '>' },
      { open: '?', close: '%' },
    ]
    equal(checkCustomBrackets('aaa<>bbb<>??ccc%', customArr), false);
  })

})

