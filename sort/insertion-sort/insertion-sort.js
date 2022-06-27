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

module.exports = {
    insertionSort,
};