//Linear Search
function linearSearch(target, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1
}
// console.log(linearSearch(5, [1, 2, 3, 4, 5]))
//Big O = O(n)

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2);
        if (array[middleIndex] === target) return middleIndex;
        if (array[middleIndex] < target) left = middleIndex + 1;
        if (array[middleIndex] > target) right = middleIndex - 1;
    }
}
//Big O = O(logn)

// console.log(binarySearch([1, 2, 3, 4, 5], 2))

function recursiveBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1)
}

function search(array, target, left, right) {
    if (left > right) return -1;
    let middleIndex = Math.floor((left + right) / 2);
    if (array[middleIndex] === target) return middleIndex;
    if (target > array[middleIndex]) return search(array, target, middleIndex + 1, right);
    if (target < array[middleIndex]) return search(array, target, left, middleIndex - 1);
};
//Big O = O(logn)

// console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 2))
