## Check brackets

Simple functions for check correct open/close brackets in string.

### Standart
Search {} () [] brackets

```js
var { checkBrackets } = require('checkBrackets');

console.log( checkBrackets('{}()[]') ) //=> true
console.log( checkBrackets('{}()[] }') ) //=> false

console.log( checkBrackets('{([])}') ); //=> true
console.log( checkBrackets('{(_(((_[])}') ); //=> false
```

### Custom
You can choose you type of brackets

```js
var { checkCustomBrackets } = require('checkBrackets');

var customArr1 = [
  { open: '<', close: '>' },
]
console.log( checkCustomBrackets('<><><>', customArr1) ); //=> true


var customArr2 = [
  { open: '<', close: '>' },
  { open: '{', close: '}' },
]
console.log( checkCustomBrackets('{<><>} =) {<>}{<>}', customArr2) ); //=> true

```

**Sorry:** You can set only diffrent symbol for open/close.

### Test
```sh
npm install
npm test
```
