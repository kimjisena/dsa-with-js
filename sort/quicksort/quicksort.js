const {emptyStack} = require('../../basic/stack/stack.js');
const {insertionSort2} = require('../insertion-sort/insertion-sort.js');

// recursive
function quickSort (array, left, right) {
    let pivotIdx;

    if (left < right) {
        pivotIdx = partition(array, left, right);
        quickSort(array, left, pivotIdx - 1);
        quickSort(array, pivotIdx + 1, right);
    }

    return array;
}

// iterative using a stack
function quickSort2 (array) {
    let pivotIdx, left, right;
    let stack = emptyStack()
                .push(array.length - 1)
                .push(0);

    while(!stack.isEmpty()) {
        left = stack.top();
        stack = stack.pop();
        right = stack.top();
        stack = stack.pop();

        if (left < right) {
            pivotIdx = partition(array, left, right);
            stack = stack.push(right)
                    .push(pivotIdx + 1)
                    .push(pivotIdx - 1)
                    .push(left);
        }
    }

    return array;
}

function quickSort3 (array) {
    let pivotIdx, left, right, min, size;
    let stack = emptyStack()
                .push(array.length - 1)
                .push(0);
    
    min = 3;
    while(!stack.isEmpty()) {
        left = stack.top();
        stack = stack.pop();
        right = stack.top();
        stack = stack.pop();
        size = right - left + 1;

        if (size < min) {
            //use insertion sort
            insertionSort2(array, left, right);
        } else {
            // use quicksort
            if (left < right) {
                pivotIdx = partition(array, left, right);
                stack = stack.push(right)
                        .push(pivotIdx + 1)
                        .push(pivotIdx - 1)
                        .push(left);
            }
        }
    }

    return array;
}

function partition (array, left, right) {
    let pivot,
        i,
        j,
        temp;

    pivot = array[right];
    i = left - 1;
    j = right;

    while (true) {
        while (array[++i] < pivot) {
            ;
        }

        while (array[--j] > pivot) {
            ;
        }
        if (i >= j) {
            break;
        }
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    temp = array[i];
    array[i] = array[right];
    array[right] = temp;

    return i;
}

module.exports = {
    quickSort,
    quickSort2,
    quickSort3
};