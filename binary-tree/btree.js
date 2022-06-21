/**
 * binary trees
 * 
 * a binary tree has nodes that contain at most two children
 * 
 * important
 * 
 * - `size`: the total number of nodes
 * - `height`: the maximal path from a `leaf node` to the `root node`
 * - an empty tree has `height = -1` and `size = 0`;
 * 
 * formal definition
 * 
 * a binary tree is either:
 * 1. the empty tree, or
 * 2. it consists of a node and two btrees, `left` subtree and `right` subtree
 * 
 * binary tree constructors
 * 1. `emptyTree()` - returns the `EmptyTree`
 * 2. `makeTree(v, l, r)` - builds a btree from a `root node` with 
 * label `v` and two subtrees, `l` and `r`
 * 
 * binary tree condition
 * - `btree.isEmpty()` - retuns false if `btree` is non-empty
 * 
 * binary selectors
 * 1. `btree.root()` - returns the value of `root node`
 * 2. `btree.left()` - returns the `left subtree` or `EmptyTree`
 * 3. `btree.right()` - returns the `right subtree` or `EmptyTree`
 * 
 * convenient derived operators
 * - `leaf(v) = makeTree(v, EmptyTree, EmptyTree)` - returns a single node with label `v`
 */

function getBT() {
    let label = null,
        children;
    
    function isEmpty() {
        return label === null;
    }

    if (arguments.length === 1) {
        label = arguments[0];
        children = {
            left: getBT(),
            right: getBT()
        };
    } else if (arguments.length === 3) {
        label = arguments[0];
        children = {
            left: arguments[1],
            right: arguments[2]
        };
    }

    function root () {
        if (isEmpty()) {
            throw {
                name: 'EmptyTreeError',
                message: 'Can not access root value of an empty tree'
            };
        }

        return label;
    }

    function left () {
        if (isEmpty()) {
            throw {
                name: 'EmptyTreeError',
                message: 'Can not access root value of an empty tree'
            };
        }

        return children.left;
    }

    function right () {
        if (isEmpty()) {
            throw {
                name: 'EmptyTreeError',
                message: 'Can not access root value of an empty tree'
            };
        }

        return children.right;
    }


    return {
        isEmpty,
        root,
        left,
        right
    };
}

function emptyTree () {
    return getBT();
}

function makeBT (v, l, r) {
    if (arguments.length === 1) {
        return getBT(arguments[0]);
    }
    return getBT(v, l, r);
}

// get size of a tree i.e number of nodes
function size (tree) {
    if (tree.isEmpty()) {
        return 0;
    }
    return (1 + size(tree.left()) + size(tree.right()));
}

module.exports = {
    emptyTree,
    makeBT,
    size
};