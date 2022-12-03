'use strict';

const income = +prompt('Введите сумму дохода', '');

if (income <= 15000) {
  console.log(income * 0.13);
} else if (income > 15000 && income <= 50000) {
  console.log((income - 15000) * 0.2);
} else if (income > 50000) {
  console.log((income - 50000) * 0.3);
}
