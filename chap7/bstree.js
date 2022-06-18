import { emptyTree, makeBT } from "../chap6/btree.js";

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

export function getBST () {
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
export function insert (v, bstree) {
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
export function recur_isIn (v, bstree) {
    if (bstree.isEmpty()) {
        return false;
    } else if (v === bstree.root()) {
        return true;
    } else if (v < bstree.root()) {
        return isIn(v, bstree.left())
    } else {
        return isIn(v, bstree.right());
    }
}

// searching: iterative
export function iter_isIn (v, bstree) {
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
export function remove (v, bstree) {
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
export function isBTree(btree) {
    if (btree.isEmpty()) {
        return true;
    }
    return (
        allSmaller(btree.left(), btree.root()) && 
        isBTree(btree.left()) && 
        allBigger(btree.right(), btree.root()) &&
        isBTree(btree.right())
    );
}

// sorting using bstree
// time complexity O(n)
export function printInOrder (bstree) {
    if (!bstree.isEmpty()) {
        printInOrder(bstree.left());
        console.log(bstree.root());
        printInOrder(bstree.right());
    }
}

// extended sorting
// time complexity O(n)
export function insertInOrder (bstree, array) {
    if (!bstree.isEmpty()) {
        insertInOrder(bstree.left(), array);
        array.push(bstree.root());
        insertInOrder(bstree.right(), array);
    }
}

// rebalancing a bstree
// time complexity: O(n)
export function rebalance (bstree) {
    let array = [],
        bst = getBST(),
        root,
        mid;
    insertInOrder(bstree, array); // O(n)
    //console.log(array);

    return bst;
}