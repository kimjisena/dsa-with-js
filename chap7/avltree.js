/**
 * AVL trees
 * 
 * an AVL tree is a self-balancing binary search tree in which the difference in height 
 * between the two subtrees of any node is in the range [-1, 1]
 * 
 * this means every insertion/deletion operation disturbs the balance to [-2, 2] range 
 * and thus it needs to be restored by readjusting (rotating) the node's subtrees
 * 
 * a node in an AVL tree has the same structure as a node in a regular binary tree 
 * with the addition of a `balance` field which can either be -1, 0, 1
 * 
 * insertion and deletion operations can happen while keeping the trees height at the 
 * minimum `O(log n)` eliminating the need to rebalance the whole tree
 */

 const {emptyTree, makeBT} = require('../chap6/btree.js');

 function getAVL () {
    let label = null,
        children,
        bal;

    if (arguments.length === 1) {
        label = arguments[0];
        children = {
            left: getAVL(),
            right: getAVL()
        };
        bal = getBalance();
    } else if (arguments.length === 3) {
        label = arguments[0];
        children = {
            left: arguments[1],
            right: arguments[2]
        };
        bal = getBalance();
    }

    function isEmpty() {
        return label === null;
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

    function height (n) {
        n = n || this;
        let r = 0,
            l = 0;

        if (n.isEmpty()) {
            return -1;
        }
        l = 1 + height(n.left());
        r = 1 + height(n.right());

        return r > l ? r : l;
    }

    function leftHeight () {
        return height(left());
    }

    function rightHeight () {
        return height(right());
    }

    function getBalance () {
        return rightHeight() - leftHeight();
    }

    function leftRotate () {
        let right,
            child,
            newNode;

        right = right();
        child = getAVL(root(), left(), right.left());
        newNode = getAVL(right.root(), child, right.right());
        return newNode;
    }

    function rightRotate () {
        let left,
            child,
            newNode;

        left = left();
        child = getAVL(root(), left.right(), right());
        newNode = getAVL(left.root(), left.left(), child);
        return newNode;
    }

    function rLRotate () {
        let right,
            newNode;

        right = right().rightRotate();
        newNode = getAVL(root(), left(), right).leftRotate();
        return newNode;
    }

    function lRRotate () {
        let left,
            newNode;

        left = left().leftRotate();
        newNode = getAVL(root(), left, right()).rightRotate();
        return newNode;
    }

    return {
        root,
        isEmpty,
        left,
        right,
        height,
        leftHeight,
        rightHeight,
        getBalance,
        leftRotate,
        rightRotate,
        rLRotate,
        lRRotate
    }
}

module.exports = {
    getAVL,
};