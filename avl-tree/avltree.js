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
    // rebalancing
    if (bal > 1) {
        if (right().getBalance() < 0) {
            return rLRotate();
        } else if (right().getBalance() > 0) {
            return leftRotate();
        }
    } else if (bal < -1) {
        if (left().getBalance() > 0) {
            return lRRotate();
        } else if (left().getBalance() < 0) {
            return rightRotate();
        }
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

// insert a value
function insert (v, node) {
    if (node.isEmpty()) {
        return getAVL(v);
    } else if (v < node.root()) {
        return getAVL(node.root(), insert(v, node.left()), node.right());
    } else if (v > node.root()) {
        return getAVL(node.root(), node.left(), insert(v, node.right()));
    } else {
        throw {
            name: 'ViolatedAssumptionError',
            message: 'Can not replace root node'
        }
    }
}

function insertAtSmallest(node, des) {
    if (des.isEmpty()) {
        return node;
    } else if (des.left().isEmpty()) {
        return getAVL(des.root(), node, des.right());
    }
    return insertAtSmallest(node, des.left());
}

// remove a value
function remove (v, node) {
    if (node.isEmpty()) {
        throw {
            name: 'EmptyTreeError',
            message: 'Can not access root value of an empty tree'
        };
    } else if (v < node.root()) {
        return getAVL(node.root(), remove(v, node.left()), node.right());
    } else if (v > node.root()) {
        return getAVL(node.root(), node.left(), remove(v, node.right()));
    } else {
        if (node.left().isEmpty()) {
            return node.right();
        } else if (node.right().isEmpty()) {
            return node.left();
        } else {
            return getAVL(node.right().root(), 
                          insertAtSmallest(node.left(), node.right().left()),
                          node.right().right());
        }
    }
}

module.exports = {
    getAVL,
    insert,
    remove
};