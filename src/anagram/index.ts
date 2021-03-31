function anagram(str1: string, str2: string): boolean {
  let obj1 = getObj(str1);
  let obj2 = getObj(str2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function getObj(str) {
  let obj = {};
  for(let letter of str.toLowerCase().match(/[a-zа-яё]/g)) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}

console.log(anagram('find er Ё', 'ёFriend'));
console.log(anagram('finder', 'Friendd'));
