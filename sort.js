//!Bubble Sort
function bubbleSort(array) {
    let isSwapped = false;
    while (!isSwapped) {
        isSwapped = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSwapped = false;
            }
        }
    }
    return array;
}
//Big O = O(n^2)
// bubbleSort([-6, 20, 8, -2, 4]);

//tutorial approach using a do while loop
function bubbleSort2(array) {
    let isSwapped;
    do {
        isSwapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSwapped = true;
            }
        }
    } while (isSwapped)
    return array;
}
//Big O = O(n^2)
// bubbleSort2([10, 9, 8, 7, 6]);

function bubbleSortDescending(array) {
    let isSwapped
    do {
        isSwapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSwapped = true;
            }
        }
    } while (isSwapped);
    return array
}
// bubbleSortDescending([-6, 20, 8, -2, 4]);

//!Insertion Sort

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let key = array[i];
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key
    }
    return array
}
//Big O = O(n^2)
// console.log(insertionSort([-6, 20, 8, -2, 4]));


//!Quick Sort
function quickSort(array) {
    if (array.length < 2) {
        return array
    }
    let pivot = array[array.length - 1];
    let leftArray = [];
    let rightArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

// console.log(quickSort([10, 9, 8, 7, 6]))
//Worst Case Complexity = O(n^2)
//Average Case Complexity = O(nlogn)


//!Merge Sort
function mergeSort(array) {
    if (array.length < 2) {
        return array
    }
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left, right)
}

//Big O = O(nlogn)