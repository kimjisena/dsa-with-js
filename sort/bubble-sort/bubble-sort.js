function bubbleSort (array) {
    let temp, top, flag, i;

    top = array.length;

    do {
        flag = false;
        top--;
        for (i = 0; i < top; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                flag = true;
            }
        }

    } while(flag);

    return array;
}

module.exports = {
    bubbleSort,
};