function insertionSort1 (array) {
    let temp;
    
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return array;
}

function insertionSort2 (array) {
    let temp, j;

    for (i = 1; i < n; i++) {
        j = i;
        temp = array[j];
        while(j > 0 && temp < array[j - 1]) {
            a[j] = a[j - 1];
            j--;
        }
        a[j] = temp;
    }
    return array;
}