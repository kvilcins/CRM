const calculate = (totalPrice, itemAmount, promoCode) => {
  let fnTotalPrice = totalPrice;
  let fnItemAmount = itemAmount;
  let fnPromoCode = promoCode;

  if (fnItemAmount > 10) {
    const amountDiscount = fnTotalPrice * 0.03;

    fnTotalPrice = totalPrice - amountDiscount;
  }

  if (fnTotalPrice > 30000) {
    const priceLeftOver = fnTotalPrice - 30000;
    const priceDiscount = priceLeftOver - priceLeftOver * 0.15;

    fnTotalPrice = priceDiscount + 30000;
  }

  if (fnPromoCode === 'METHED') {
    const promoMethedDiscount = fnTotalPrice * 0.1;

    fnTotalPrice = fnTotalPrice - promoMethedDiscount;
  } else if (fnPromoCode === 'G3H2Z1' && fnTotalPrice > 2000) {
    fnTotalPrice -= 500;
  }

  return fnTotalPrice;
};

console.log(calculate(40000, 11, 'G3H2Z1'))
