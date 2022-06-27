const {getHeap} = require('../../heaps/heap-tree/heap-tree.js');

function heapSort (array) {
    let heap = getHeap().heapify(array);
    for (let idx = array.length - 1; idx >= 0; idx--) {
        array[idx] = heap.root();
        heap = heap.deleteRoot();
    }
    return array;
}

module.exports = {
    heapSort,
};