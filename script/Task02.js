const getString = (str) => {
  let modifiedString = str;

  modifiedString  = modifiedString[0].toUpperCase() + modifiedString.substring(1).toLowerCase();

  return modifiedString;
};

console.log(getString('привет Мир'))
