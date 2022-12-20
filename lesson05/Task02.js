'use strict';

const isPrime = (primeNumber) => {
  let modifiedPrimeNumber = primeNumber;

  if (modifiedPrimeNumber < 2) {
    return 'Должно быть больше 1';
  } else if (modifiedPrimeNumber === 2) {
    return 'true';
  }

  const limit = Math.sqrt(modifiedPrimeNumber);
  for (let i = 2; i <= limit; i += 1) {
    if (modifiedPrimeNumber % i === 0) {
      return 'false';
    }
  }

  return 'true';
};

console.log(isPrime(1987));

