function insertionSort (array) {
    let temp, j, n;
    n = array.length;

    for (let i = 1; i < n; i++) {
        temp = array[i];
        j = i - 1;
        while ((array[j] > temp) && (j >= 0)) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

// sort a portion of an array
function insertionSort2 (array, left, right) {
    let temp, j, n, i;
    n = right - left + 1;

    for (i = left + 1; i < n; i++) {
        temp = array[i];
        j = i - 1;
        while ((array[j] > temp) && (j >= left)) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

module.exports = {
    insertionSort,
    insertionSort2
};