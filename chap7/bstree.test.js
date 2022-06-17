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

// test search functionality
let has;
import('./bstree.js')
    .then(m => {
        has = m.isIn
    });

console.clear();