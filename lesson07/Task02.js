'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (money) => {
  const sum = money.reduce((a, b) => a + b, 0);
  const length = money.length;

  return Math.floor(sum / length);
};

console.log(getAverageValue(allCashbox));
