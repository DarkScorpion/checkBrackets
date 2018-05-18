
function checkBrackets(strArg) {
  return checkCustomBrackets(strArg, [
    { open: '{', close: '}' },
    { open: '[', close: ']' },
    { open: '(', close: ')' },
  ]);
}

function checkCustomBrackets(strArg, checkArr) {
  //TODO check doubles in checkArr

  var last;
  var tmpArr = checkArr.map( (v) => {
    return {
      open: v.open,
      close: v.close,
      openNum: 0,
      closeNum: 0,
    }
  })

  for(var i = 0; i < strArg.length; i++) {
    var letter = strArg[i];
    var tmpCheck = _checkLetter(letter, tmpArr);

    if( tmpCheck ) {
      if(!last) last = tmpCheck;

      if( letter === tmpCheck.open ) tmpCheck.openNum++;
      if( letter === tmpCheck.close ) tmpCheck.closeNum++;

      //console.log('%s: %o,\n    Last: %o,\n    Check: %s', letter, tmpCheck, last, (tmpCheck.closeNum > tmpCheck.openNum) );
      if( tmpCheck.closeNum > tmpCheck.openNum ) return false;

      last = tmpCheck;
    }
  }

  //console.log('Final: ', tmpArr);
  //console.log('Filtered: ', tmpArr.filter( v => v.openNum != v.closeNum ) );
  return tmpArr.filter( v => v.openNum !== v.closeNum ).length == 0;
}

function _checkLetter(letter, checkArr) {
  for(var i = 0; i < checkArr.length; i++) {
    var v = checkArr[i];
    if(letter === v.open || letter === v.close) return v;
  }

  return false;
}

module.exports = { checkBrackets, checkCustomBrackets };
