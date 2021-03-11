function arraySum(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.splice(arr.length - 1, 1)[0] + arraySum(arr)
  }
}

let arrayToSum = Array.from({ length: 10 }).map(() => Math.floor(Math.random() * 10));
console.log([...arrayToSum], arraySum(arrayToSum));
