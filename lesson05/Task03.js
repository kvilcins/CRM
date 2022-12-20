'use strict';

const getNewString = (str) => {
  let modifiedString = str;

  modifiedString  = modifiedString.split('').reverse().join('');

  return modifiedString;
};

console.log(getNewString('Привет мир'));
