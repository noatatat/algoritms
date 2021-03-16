import { getRandomNumberArray } from '../utils/getRandomNumberArray';

/** O(n * log2(n)) */

function mergeSort(arr: number[]): number[] {

  if (arr.length < 2) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.splice(0, middle)), mergeSort(arr));
  }
}

function merge(arr1: number[], arr2: number[]): number[] {
  const merged = [];

  while( arr1.length && arr2.length ) {
    merged.push(
      arr1[0] < arr2[0]
        ? arr1.splice(0, 1)
        : arr2.splice(0, 1)
    )
  }

  return [ ...merged.flat(), ...arr1, ...arr2];
}

let arrayForMergeSort = getRandomNumberArray(16, 200);
console.log([...arrayForMergeSort], mergeSort(arrayForMergeSort));
