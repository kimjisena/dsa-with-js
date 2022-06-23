function getBinomialNode (v) {
    let label = v,
        children = [],
        k = 0;


    function order () {
        return k;
    }

    function value () {
        return label;
    }

    function add (node) {
        children[k++] = node;
        return this;
    }

    return {
        order,
        value,
        add
    };
}

function getBinomialHeap () {
    let heap = [],
        top;

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
        return heap[top];
    }

    function merge (a, b) {
        if (a.value() > b.value()) {
            a = a.add(b);
        } else {
            a = b.add(a);
        }
        return a;
    }

    function insert (element) {
        let n = getBinomialNode(element);

        function helper (node) {
            if (heap[node.order()] === undefined) {
                heap[node.order()] = node;

                if (heap.length === 1) {
                    top = 0;
                } else if (node.value() > heap[top].value()) {
                    top = node.order();
                }
                return;
            } else {
                node = merge(node, heap[node.order()]);
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