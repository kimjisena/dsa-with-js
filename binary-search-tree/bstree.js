/**
 * binary search trees
 * 
 * a `bstree` is a variant of a binary tree which allows efficient 
 * searching a particular item given it's key
 * 
 * formal definition
 * 
 * a `bstree` is a `binary tree` that is either empty or satisfies 
 * the following condtions:
 * 1. all values occurring in the `left` subtree are smaller than that of 
 * the root
 * 2. all values occurring in the `right` are larger thatn that of the root
 * 3. the `left` and `right` subtrees are themselves `bstrees`
 * 
 * a binary search tree inherits operations from binary tree
 * 
 * binary search tree constructors
 * 1. `emptyTree()` - returns the `EmptyTree`
 * 2. `makeTree(v, l, r)` - builds a `bstree` from a `root node` with 
 * label `v` and two subtrees, `l` and `r`
 * 
 * binary search tree condition
 * - `bstree.isEmpty()` - retuns false if `bstree` is non-empty
 * 
 * binary search tree selectors
 * 1. `bstree.root()` - returns the value of `root node`
 * 2. `bstree.left()` - returns the `left subtree` or `EmptyTree`
 * 3. `bstree.right()` - returns the `right subtree` or `EmptyTree`
 * 
 * binary search tree mutator
 * `insert(v, bstree)` - inserts a value `v` to the `bstree` as follows:
 *
 * 1. if `bstree.isEmpty() == true`, assign new value `v` to root node
 * 2. if `bstree.isEmpty() == false`
 * - if `v` < bstree.root()` then `insert(v, bstree.left())`
 * - if `v` > bstree.root()` then `insert(v, bstree.right())`
 * - if `v` == bstree.root()` then `ViolatedAssumptionError`
 * 
 * note that `insert(v, bstree)` assumes `v != bstree.root()`
 * time complexity: O(log n)
 */

const {emptyTree, makeBT} = require('../binary-tree/btree.js');

function getBST () {
    let bstree = emptyTree();

    if (arguments.length === 1) {
        bstree = arguments[0];
    }

    return bstree;
}

// util functions
function smallest(bstree) {
    // bstree is assumed to be non-empty
    if (bstree.left().isEmpty()) {
        return bstree.root();
    }
    return smallest(bstree.left());
}

function removeSmallest(bstree) {
    // bstree is assumed to be non-empty
    if (bstree.left().isEmpty()) {
        return bstree.right();
    }
    return getBST(makeBT(bstree.root(), 
        removeSmallest(bstree.left()), bstree.right()));
}

function allSmaller(tree, v) {
    if (tree.isEmpty()) {
        return true;
    }
    return (
        (tree.root() < v) &&
        allSmaller(tree.left(), v) &&
        allSmaller(tree.right(), v)
    );
}

function allBigger(tree, v) {
    if (tree.isEmpty()) {
        return true;
    }
    return (
        (tree.root() > v) &&
        allBigger(tree.left(), v) &&
        allBigger(tree.right(), v)
    );
}


// insert a value
function insert (v, bstree) {
    if (bstree.isEmpty()) {
        return getBST(makeBT(v));
    } else if (v < bstree.root()) {
        return getBST(makeBT(bstree.root(), insert(v, bstree.left()), bstree.right()));
    } else if (v > bstree.root()) {
        return getBST(makeBT(bstree.root(), bstree.left(), insert(v, bstree.right())));
    } else {
        throw {
            name: 'ViolatedAssumptionError',
            message: 'Can not replace root node'
        }
    }
}

// searching: recursive
function recur_isIn (v, bstree) {
    if (bstree.isEmpty()) {
        return false;
    } else if (v === bstree.root()) {
        return true;
    } else if (v < bstree.root()) {
        return recur_isIn(v, bstree.left())
    } else {
        return recur_isIn(v, bstree.right());
    }
}

// searching: iterative
function iter_isIn (v, bstree) {
    while (!bstree.isEmpty() && v !== bstree.root()) {
        if (v < bstree.root()) {
            bstree = bstree.left();
        } else {
            bstree = bstree.right();
        }
    }
    return !bstree.isEmpty();
}

// deletion
function remove (v, bstree) {
    if (bstree.isEmpty()) {
        throw {
            name: 'EmptyTreeError',
            message: 'Can not access root value of an empty tree'
        };
    } else {
        if (v < bstree.root()) {
            return getBST(makeBT(bstree.root(), 
                remove(v, bstree.left()), bstree.right()));
        } else if (v > bstree.root()) {
            return getBST(makeBT(bstree.root(), 
                bstree.left(), remove(v, bstree.right())));
        } else {
            if (bstree.left().isEmpty()) {
                return bstree.right();
            } else if (bstree.right().isEmpty()) {
                return bstree.left();
            } else {
                return getBST(makeBT(smallest(bstree.right()), 
                        bstree.left(), removeSmallest(bstree.right())));
            }
        }
    }
}

// check whether a btree is a bstree
function isBSTree(btree) {
    if (btree.isEmpty()) {
        return true;
    }
    return (
        allSmaller(btree.left(), btree.root()) && 
        isBSTree(btree.left()) && 
        allBigger(btree.right(), btree.root()) &&
        isBSTree(btree.right())
    );
}

// sorting using bstree
// time complexity O(n)
function printInOrder (bstree) {
    if (!bstree.isEmpty()) {
        printInOrder(bstree.left());
        console.log(bstree.root());
        printInOrder(bstree.right());
    }
}

// extended sorting
// time complexity O(n)
function insertInOrder (bstree, array) {
    if (!bstree.isEmpty()) {
        insertInOrder(bstree.left(), array);
        array.push(bstree.root());
        insertInOrder(bstree.right(), array);
    }
}

// rebalancing a bstree
// time complexity: O(log n)
function balance(bstree) {
    let array = [];
    
    if (bstree.isEmpty()) {
        throw {
            name: 'EmptyTreeError',
            message: 'Can not access root value of an empty tree'
        };
    }

    insertInOrder(bstree, array);

    function helper(arr) {
        let mid,
            left,
            right;

        if (arr.length === 1) {
            return getBST(makeBT(arr[0]));
        } else {
            mid = Math.floor(arr.length / 2);
            left = arr.slice(0, mid);
            right = arr.slice(mid + 1, arr.length);

            if (right.length === 0) {
                return getBST(makeBT(arr[mid], helper(left), emptyTree()));
            } else {
                return getBST(makeBT(arr[mid], helper(left), helper(right)));
            }
        }
    }

    return helper(array);
}

module.exports = {
    getBST,
    insert,
    recur_isIn,
    iter_isIn,
    remove,
    isBSTree,
    insertInOrder,
    balance
};