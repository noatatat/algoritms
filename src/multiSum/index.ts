function sum(a) {

  let curSum = a;

  function f(b) {
    curSum += b;
    return f;
  }

  f.toString = function() {
    return curSum;
  }

  return f;
}

console.log(sum(1)(2)(3)(4)(5));
