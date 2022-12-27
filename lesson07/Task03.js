'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (userName, prefix) => {
  return names.map(element => prefix + ' ' + element);
};

console.log(addPrefix(names, 'Mr'))
