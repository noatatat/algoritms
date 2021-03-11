function factorial(n: number): number {
  if (n === 1) {
    return n;
  }
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
