let getPrimeCount = 0;
function isPrime(n) {
  if ( n === 1 ) return true;

  let i = 2;
  while ( i < n ) {
    getPrimeCount++;
    if ( n % i === 0 ) {
      return false;
    }
    i++;
  }
  return true;
}

function getPrimeNumbers(from, to) {
  const res = [];
  let current = from;
  while (current <= to) {
    if (isPrime(current)) {
      res.push(current);
    }
    current++;
  }
  return res;
}

console.log(getPrimeNumbers(1, 20), getPrimeCount);
