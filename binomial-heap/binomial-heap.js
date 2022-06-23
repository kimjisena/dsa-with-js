function getBinomialNode (v) {
    let label,
        children;

    if (typeof arguments[0] === 'object') {
        label = arguments[0].label;
        children = arguments[0].children;
    } else {
        label = v;
        children = [];
    }

    function order () {
        return children.length;
    }

    function value () {
        return label;
    }

    function add (node) {
        let next = {
            label,
            children: [...children, node]
        };

        return getBinomialNode(next);
    }

    return {
        order,
        value,
        add
    };
}

function getBinomialHeap () {
    let heap = [],
        top = 0;

    function isEmpty () {
        return heap.length === 0;
    }

    function root () {
        if (isEmpty()) {
            throw {
                name: 'EmptyHeapError',
                message: 'Can not access elements of empty heap'
            }
        }
        return heap[top].value();
    }

    function merge (a, b) {
        if (a.value() > b.value()) {
            return a.add(b);
        } else {
            return b.add(a);
        }
    }

    function insert (element) {
        let n = getBinomialNode(element);

        function helper (node) {
            let i;
            if (heap[node.order()] === undefined) {
                heap[node.order()] = node;

                if (heap.length === 1) {
                    top = 0;
                } else if (node.value() > heap[top].value()) {
                    top = node.order();
                }
                return;
            } else {
                i = node.order();
                node = merge(node, heap[i]);
                heap[i] = undefined;
                if (i === top) {
                    top = node.order();
                }
                helper(node);
            }
        }
        helper(n);
        return this;
    }

    return {
        isEmpty,
        root,
        insert,
    };
}

module.exports = {
    getBinomialHeap,
}