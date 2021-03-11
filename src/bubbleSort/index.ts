function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
        const intermediate = arr[i];
        arr[i] = arr[j];
        arr[j] = intermediate;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2,3,7,12,9,6,10,1,5,4]));
