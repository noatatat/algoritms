function reverseNumber(n, ans = 0) {
  if (n > 0) {
    return reverseNumber(Math.floor(n / 10), ans * 10 + n % 10);
  }
  else {
    return ans;
  }
}


function reverseNumberNotRecursive(n) {
  let answer = 0;
  let intermediate = n;

  while (intermediate > 0) {
    answer = answer * 10 + intermediate % 10;
    intermediate = Math.floor(intermediate / 10);
  }
  return answer;
}

const numberToReverse = 1234567890;
console.log(reverseNumber(numberToReverse));
console.log(reverseNumberNotRecursive(numberToReverse));
