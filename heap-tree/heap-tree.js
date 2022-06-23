function getHeap () {
    let elements = [null];
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
        return elements[1];
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
        return elements[last];
    }

    function bubbleUp (index) {
        let temp;
        if (isRoot(index)) {
            return;
        } else if (elements[index] > elements[parent(index)]) {
            temp = elements[parent(index)];
            elements[parent(index)] = elements[index];
            elements[index] = temp;
            bubbleUp(parent(index));
        }
    }

    function insert (element) {
        elements[++last] = element;
        bubbleUp(last);
        return this;
    }

    return {
        isEmpty,
        root,
        lastLeaf,
        insert
    };
}

module.exports = {
    getHeap,
};