showPrimes(100);

function showPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(number) {
  let flag = true;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
