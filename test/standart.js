
var { equal } = require('assert');
var { checkBrackets } = require('../checkBrackets.js');

describe('Standart brackets: success', () => {

  it('Simple: {}()[]', () => {
    equal(checkBrackets('{}()[]'), true);
  })

  it('Simple: ()()()[][]{}{}', () => {
    equal(checkBrackets('()()()[][]{}{}'), true);
  })

  it('Nested: {([])}', () => {
    equal(checkBrackets('{([])}'), true);
  })

  it('Nested: {([aaa])}', () => {
    equal(checkBrackets('{([aaa])}'), true);
  })

  it('Nested: {([aaa()bbb])}', () => {
    equal(checkBrackets('{([aaa()bbb])}'), true);
  })

  it('Nested hard: {([(a{}a)])}', () => {
    equal(checkBrackets('{([(a{}a)])}'), true);
  })

})

describe('Standart brackets: fail', () => {
  it('Simple: [', () => {
    equal(checkBrackets('['), false);
  })

  it('Simple: }', () => {
    equal(checkBrackets('}'), false);
  })

  it('Simple: }{', () => {
    equal(checkBrackets('}{'), false);
  })

  it('Simple: )))', () => {
    equal(checkBrackets(')))'), false);
  })

  it('Simple: [[[', () => {
    equal(checkBrackets('[[['), false);
  })

  it('Simple: [(__}{__)]', () => {
    equal(checkBrackets('[(}{)]'), false);
  })

  it('Simple: {}()[__', () => {
    equal(checkBrackets('{}()['), false);
  })

  it('Simple: ((((__(__))))', () => {
    equal(checkBrackets('((((())))'), false);
  })

  it('Simple: }__()()()[][]{}{}', () => {
    equal(checkBrackets('}()()()[][]{}{}'), false);
  })

  it('Nested: {([__)}', () => {
    equal(checkBrackets('{([)}'), false);
  })

  it('Nested: {([])}__}', () => {
    equal(checkBrackets('{([])}}'), false);
  })

  it('Nested: aaa()bbb{{{ccc}}__)', () => {
    equal(checkBrackets('aaa()bbb{{{ccc}})'), false);
  })

  it('Nested: {bbbb__}aaaa)c)c)', () => {
    equal(checkBrackets('{bbbb}aaaa)c)c)'), false);
  })

  it('Nested: {bb(b)b}aa[][a]a__)c}c]', () => {
    equal(checkBrackets('{b(b)b}a[][a]a)c}c]'), false);
  })

})
