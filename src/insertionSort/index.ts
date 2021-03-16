import {getRandomNumberArray} from '../utils/getRandomNumberArray';

let insertionSortCount = 0;

function insertionSort(arr: number[]): number[] {

  for (let i = 1; i < arr.length; i++) {

    let current = arr[i]; let j = i;

    insertionSortCount++;

    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;

      insertionSortCount++;
    }

    arr[j] = current;
  }

  return arr;
}

console.log(insertionSort(getRandomNumberArray(20,30)), insertionSortCount);

/** Суть его заключается в том, что в цикле один за другим выбираются элементы массива и сравниваются с элементами,
 * стоящими перед ними, до тех пор пока не будет найдет элемент, меньший текущего, или мы не дойдем до начала массива.
 * Перед ним мы и вставляем текущий, для этого предварительно сдвинув все элементы, которые оказались больше текущего,
 * в сторону увеличения на один индекс.
 */
