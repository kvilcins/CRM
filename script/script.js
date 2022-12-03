'use strict';

const itemName = document.getElementById("name").value;
const itemAmount = document.getElementById("amount").value;
const itemCategory = document.getElementById("category").value;
const itemPrice = document.getElementById("price").value;
console.log(itemName);
console.log(`Общая сумма $${itemAmount * itemPrice}`);

{
  const itemName = prompt("Наименование товара", '');
  const itemAmount = +prompt("Количество товара", '');
  const itemCategory = prompt("Категория товара", '');
  const itemPrice = +prompt("Цена товара", '');

  console.log(typeof itemAmount);
  console.log(typeof itemPrice);
  console.log(`На складе ${itemAmount} единицы товара "${itemName}" на сумму $${itemPrice * itemAmount}`);
}

