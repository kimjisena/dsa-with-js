function selectionSort (array) {
    let k, temp;
    for (let i = 0; i < n - 1; i++) {
        k = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[k]) {
                k = j;
            }
        }
        temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
}