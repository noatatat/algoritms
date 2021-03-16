import { getSortedNumberArray } from '../utils/getSortedNumberArray';
import { getRandomNumber } from '../utils/getRandomNumber';

let countBinarySearch = 0;

function binarySearch(arr: number[], num: number): number {
    if (arr.length === 1) {
        return arr[0] === num ? arr[0] : null;
    }

    countBinarySearch++;

    let mid = Math.floor((arr.length - 1) / 2);
    let guess = arr[mid];
    return binarySearch(
      guess < num
        ? arr.slice(mid + 1)
        : arr.slice(0, mid + 1),
      num
    )
}

const length = 2 ** 5;
const arr = getSortedNumberArray(length, 300);
const num = arr[getRandomNumber(0, length - 1)];

console.log('=>', arr, num);
console.log(binarySearch(arr, num), `count: ${countBinarySearch}`);

// function binarySearchNotRecursive(arr: number[], num: number): number {
//
//     let low = 0;
//     let high = arr.length - 1;
//
//     while (low <= high) {
//         let mid = Math.floor((high + low) / 2);
//         let guess = arr[mid];
//
//         if (guess === num) {
//             return mid;
//         }
//
//         if (guess > num) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//
//     return null;
// }
