function getBinomialNode (v) {
    let label,
        children = [];

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

    function getChildren () {
        return children;
    }

    return {
        order,
        value,
        add,
        getChildren,
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

    function updateTop () {
        for (let i = 0; i < heap.length; i++) {
            if (heap[i] !== null) {
                top = heap[top].value() > heap[i].value() ? top : i;
            }
        }
    }

    function merge (a, b) {
        if (a.value() > b.value()) {
            return a.add(b);
        } else {
            return b.add(a);
        }
    }

    function insert (element) {
        let n;
        if (typeof element === 'object') {
            n = element;
        } else {
            n = getBinomialNode(element);
        }
        function helper (node) {
            let i;
            if (heap[node.order()] === undefined || 
                heap[node.order()] === null) {

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
                heap[i] = null;
                if (i === top) {
                    top = node.order();
                }
                helper(node);
            }
        }
        helper(n);
        return this;
    }

    function deleteRoot () {
        let children,
            topNode,
            prevTop,
            newHeap = getBinomialHeap();

        children =  heap[top].getChildren();
        topNode = {
            label: -Infinity,
            children: [...children]
        };
        topNode = getBinomialNode(topNode);
        heap[top] = topNode;
        prevTop = top;
        updateTop();
        heap[prevTop] = null;
        for (let child of children) {
            newHeap = this.insert(child);
        }
        return newHeap;
    }

    function heapify (array) {
        let heap = getBinomialHeap();
        for (let element of array) {
            heap = heap.insert(element);
        }

        return heap;
    }

    return {
        isEmpty,
        root,
        insert,
        deleteRoot,
        heapify
    };
}

module.exports = {
    getBinomialHeap,
}