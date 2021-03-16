import {getRandomNumberArray} from '../utils/getRandomNumberArray';

let bubbleSortCount = 0;

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {

    for (let j = i; j < arr.length; j++) {

      if (arr[j] < arr[i]) {
        [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
      }

      bubbleSortCount++;
    }

  }
  return arr;
}

console.log(bubbleSort(getRandomNumberArray(20, 20)), bubbleSortCount);
