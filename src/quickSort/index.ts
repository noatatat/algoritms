import { getRandomNumberArray } from '../utils/getRandomNumberArray';

/** O(n*log2(n)) */

let quickSortCount = 0;

function quickSort(arr: number[]): number[] {
  quickSortCount++;
  if (arr.length < 2) {
    return arr;
  }
  else {
    const pivot = arr[0], less = [], greater = [];
    for(const num of arr.splice(1)) {
      if (num <= pivot) {
        less.push(num);
      } else {
        greater.push(num);
      }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

const arrayForQuickSortLength = 1000;
const arrayForQuickSort = getRandomNumberArray(arrayForQuickSortLength, 100);
console.log([...arrayForQuickSort], quickSort(arrayForQuickSort));
console.log(`count: ${quickSortCount}, n*log2(n): ${arrayForQuickSortLength * Math.log2(arrayForQuickSortLength)}`);
