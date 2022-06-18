/**
 * use nodejs repl session to interrogate the tree
 * 
 * while in repl, run `.load bstree.test.js`
 * 
 * operations
 * 
 * 1. `tree.isEmpty();`
 * 2. `tree.root();`
 * 3. `tree.left();`
 * 4. `tree.right();`
 */

 async function bstree () {
    let tree;
    const bst = await import('./bstree.js');
    tree = bst.getBST();
    for (let n of nodes) {
        tree = bst.insert(n, tree);
    }
    return tree;
}

let nodes = [8, 3, 1, 6, 7, 11, 14, 9, 10, 12, 15]; // insertion order

let tree;

bstree().then(value => {
    tree = value;
});

let result = `
           [8]
           / \
          /   \
         /     \
        /       \
       /         \
      /           \
     [3]         [11]
    /  \         /  \
   /    \       /    \
  /      \     /      \
 [1]    [6]   [9]     [14]
          \    \       / \
           \    \     /   \
           [7] [10] [12]  [15]
`

// test search, remove, bstree-ness, hasElement functionality
let recur_has, 
    iter_has, 
    remove,
    insert,
    isbst,
    getOrdered,
    getBST;

import('./bstree.js')
    .then(m => {
        recur_has = m.recur_isIn;
        iter_has = m.iter_isIn;
        remove = m.remove;
        insert = m.insert;
        isbst = m.isBTree;
        getOrdered = m.insertInOrder;
        getBST = m.getBST;
    });

function sort (array) {
    let bstree = getBST();

    for (let i = 0; i < array.length; i++) {
        bstree = insert(array[i], bstree);
    }
    array.length = 0;
    //printInOrder(bstree);
    getOrdered(bstree, array);
}
console.clear();