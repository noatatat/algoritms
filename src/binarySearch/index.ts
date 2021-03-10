let count = 1;

function binarySearch(arr: number[], num: number): number {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = arr[mid];

        if (guess === num) {
            return mid;
        }

        console.log(`count: ${ count }, guess: ${ guess }, length: ${ high - low + 1 }`);

        if (guess > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

        count++;
    }

    return null;
}

function generateSortedArray(length: number): number[] {
    return Array
        .from({ length })
        .map(() => Math.floor(Math.random()*200))
        .sort((a, b) => (a - b));
}

const power = 7;
const arr = generateSortedArray(2 ** power );
const num = arr[2 ** power - 1];

console.log(arr, num);
console.log(binarySearch(arr, num));
