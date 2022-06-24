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