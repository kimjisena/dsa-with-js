function getHeap () {
    let heap = [null];
    let last = 0;

    function isEmpty () {
        return last === 0;
    }

    function isRoot (index) {
        return index === 1;
    }

    function root () {
        if (isEmpty()) {
            throw {
                name: 'EmptyHeapError',
                message: 'Can not access elements of empty heap'
            }
        }
        return heap[1];
    }

    function left (index) {
        return (2 * index);
    }

    function right (index) {
        return (left(index) + 1);
    }

    function parent (index) {
        return Math.floor(index / 2);
    }

    function level (index) {
        return Math.floor(Math.log2(index)) + 1;
    }

    function lastLeaf () {
        if (isEmpty()) {
            throw {
                name: 'EmptyHeapError',
                message: 'Can not access elements of empty heap'
            }
        }
        return heap[last];
    }

    function bubbleUp (index) {
        let temp;
        if (isRoot(index)) {
            return;
        } else if (heap[index] > heap[parent(index)]) {
            temp = heap[parent(index)];
            heap[parent(index)] = heap[index];
            heap[index] = temp;
            bubbleUp(parent(index));
        }
    }

    function bubbleDown (index) {
        let temp;
        if (left(index) > last) {
            return;
        } else if (right(index) > last) {
            if (heap[index] < heap[left(index)]) {
                temp = heap[left(index)];
                heap[left(index)] = heap[index];
                heap[index] = temp;
            }
        } else {
            if (heap[left(index)] > heap[right(index)] && 
                heap[index] < heap[left(index)]) {
                temp = heap[left(index)];
                heap[left(index)] = heap[index];
                heap[index] = temp;
                bubbleDown(left(index));
            } else if (heap[index] < heap[right(index)]) {
                temp = heap[right(index)];
                heap[right(index)] = heap[index];
                heap[index] = temp;
                bubbleDown(right(index));
            }
        }
    }

    function insert (element) {
        heap[++last] = element;
        bubbleUp(last);
        return this;
    }

    function deleteRoot () {
        if (isEmpty()) {
            throw {
                name: 'EmptyHeapError',
                message: 'Can not access elements of empty heap'
            }
        }
        heap[1] = heap[last--];
        bubbleDown(1);
        return this;
    }

    function deleteAt (index) {
        if (isEmpty()) {
            throw {
                name: 'EmptyHeapError',
                message: 'Can not access elements of empty heap'
            }
        }
        heap[index] = heap[last--];
        bubbleUp(index);
        bubbleDown(index);
        return this;
    }

    return {
        isEmpty,
        root,
        lastLeaf,
        insert,
        deleteRoot,
        deleteAt
    };
}

module.exports = {
    getHeap,
};