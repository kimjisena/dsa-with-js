function bubbleSort (array) {
    let temp;

    for (let i = 1; i < array.length; i++) {
        for (let j = n - 1; j >= i; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}