import { getRandomNumberArray } from '../utils/getRandomNumberArray';

/** O(n) */

let countGetMax = 0;
function maxNumberInArray(arr: number[]): number {

  countGetMax++;
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }

  const sub_max = maxNumberInArray(arr.splice(1));

  return arr[0] > sub_max ? arr[0] : sub_max;
}

let arrayToGetMax = getRandomNumberArray(20, 50);
console.log([...arrayToGetMax], `max: ${maxNumberInArray(arrayToGetMax)}, count: ${countGetMax}`);
