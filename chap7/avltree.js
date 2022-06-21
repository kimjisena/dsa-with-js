/**
 * AVL trees
 * 
 * an AVL tree is a self-balancing binary search tree in which the difference in height 
 * between the two subtrees of any node is in the range [-1, 1]
 * 
 * this means every insertion/deletion operation disturbs the balance to [-2, 2] range 
 * and thus it needs to be restored by readjusting (rotating) the node's subtrees
 * 
 * a node in an AVL tree has the same structure as a node in a regular binary search tree 
 * with the addition of a `balance` field which can either be -1, 0, 1
 * 
 * insertion and deletion operations can happen while keeping the trees height at the 
 * minimum `O(log n)` eliminating the need to rebalance the whole tree
 */
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
        let r,
            child,
            newNode;

        r = right();
        child = getAVL(root(), left(), r.left());
        newNode = getAVL(r.root(), child, r.right());
        return newNode;
    }

    function rightRotate () {
        let l,
            child,
            newNode;

        l = left();
        child = getAVL(root(), l.right(), right());
        newNode = getAVL(l.root(), l.left(), child);
        return newNode;
    }

    function rLRotate () {
        let r,
            newNode;

        r = right().rightRotate();
        newNode = getAVL(root(), left(), r).leftRotate();
        return newNode;
    }

    function lRRotate () {
        let l,
            newNode;

        l = left().leftRotate();
        newNode = getAVL(root(), l, right()).rightRotate();
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