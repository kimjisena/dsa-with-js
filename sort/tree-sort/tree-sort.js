const {getBST, insert} = require('../../trees/binary-search-tree/bstree.js');

function treeSort (array) {
    let bstree = getBST();
    for (let i = 0; i < array.length; i++) {
        bstree = insert(array[i], bstree);
    }
    fillArray(bstree, array, 0);
}

function fillArray (bstree, array, idx) {
    if (!bstree.isEmpty()) {
        idx = fillArray(bstree.left(), array, idx);
        array[idx++] = bstree.root();
        idx = fillArray(bstree.right(), array, idx);
    }
    return idx;
}

module.exports = {
    treeSort,
};