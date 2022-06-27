function quickSort(array, left, right) {
    let pivotIdx;

    if (left < right) {
        pivotIdx = partition(array, left, right);
        quickSort(array, left, pivotIdx - 1);
        quickSort(array, pivotIdx + 1, right);
    }

    return array;
}

function choosePivot (left, right) {
    return Math.floor(Math.random() * (right - left + 1));
    //return Math.floor((right - left + 1)/2);
}

function partition (array, left, right) {
    let pivotIdx,
        pivot,
        i,
        j,
        temp;

    //pivotIdx = choosePivot(left, right);

    if (right > left) {
        pivot = array[right];
        i = left - 1;
        j = right;

        while (true) {
            while (array[++i] < pivot) {
                null;
            }

            while (array[--j] > pivot) {
                null;
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
    }

    return i;
}

module.exports = {
    quickSort,
};