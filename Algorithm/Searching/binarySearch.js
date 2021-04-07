// Recursive approach, BigO(log n)
const binarySearch = (arr, elem, start, end) => {
    if (start > end) return false

    let middle = Math.floor((start + end)/2)

    if (arr[middle] === elem) return true

    if (arr[middle] > elem) {
        binarySearch(arr, elem, start, mid - 1)
    } else {
        binarySearch(arr, elem, middle + 1, end)
    }
}

let arr = [1, 2, 3, 4, 5, 7, 8, 9];
let x = 5;

console.log(binarySearch(arr, x, 0, arr.length))