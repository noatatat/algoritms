function reverseString(str, res = '') {
  if (str.length > 0) {
    return reverseString(str.substr(0, str.length - 1), res + str[str.length - 1]);
  }  else {
    return res;
  }
}

console.log(reverseString('!АПОЖ'));
