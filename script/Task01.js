const convert = (euro) => {
// сначала подумала о таком варианте, но подумала, что громоздко:

//   let euroToDollars = euro;
//   euroToDollars *= 1.2;
//
//   let dollarToRubles = euroToDollars;
//   dollarToRubles *= 73;
//
//   return dollarToRubles;

// потом подумала о таком, но слишком коротко, ничего не понятно:

//   return euro * 1.2 * 73;

// вот это вроде норм?
  const dollarToEuro = 1.2;
  const rubleToDollar = 73;

  return euro * dollarToEuro * rubleToDollar;
};

console.log(convert(100));
