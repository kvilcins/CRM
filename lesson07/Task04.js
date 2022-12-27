'use strict';

const allCashBox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
  const cloneArr = [...arr];
  let count = 0;

  while (cloneArr.length > 0) {
    const oneArray = cloneArr.shift();
    const [a, b] = oneArray;
    let averagePrice = b / a;
    count += averagePrice;
  }

  return count / arr.length;
};

console.log(getAveragePriceGoods(allCashBox));


