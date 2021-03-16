function selectionSort(arr) {
  const res = [];
  const workArray = [...arr];
  for ( let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallest(workArray)
    res.push(...workArray.splice(smallestIndex, 1));
  }
  return res;
}

function findSmallest(arr: number[]): number {
  let smallestIndex = 0;
  let smallest = arr[0];
  for ( let i = 1; i < arr.length; i++ ) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

console.log(selectionSort([2,3,7,12,9,6,10,1,5,4]));
