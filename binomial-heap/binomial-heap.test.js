const { getBinomialHeap } = require('./binomial-heap.js');

describe('binomial heap: initial tests', () => { 
    let heap = getBinomialHeap();

    test('should return true', () => { 
        expect(heap.isEmpty()).toBe(true);
    });

    test('should throw EmptyHeapError', () => { 
        expect(() => heap.root())
            .toThrow('Can not access elements of empty heap');
    });
});

describe('binomial heap: insertion', () => { 
    let nodes = [5, 8, 3, 9, 1, 4, 7, 6, 2];
    let heap = getBinomialHeap();
    for (let n of nodes) {
        heap = heap.insert(n);
    }

    test('should return false', () => { 
        expect(heap.isEmpty()).toBe(false);
    });

    test('should return 9', () => {
        expect(heap.root()).toBe(9);
    });
});

describe('binomial heap: deletion', () => { 
    let nodes = [5, 8, 3, 9, 1, 4, 7, 6, 2];
    let heap = getBinomialHeap();
    for (let n of nodes) {
        heap = heap.insert(n);
    }

    heap = heap.deleteRoot();

    test('should return false', () => { 
        expect(heap.isEmpty()).toBe(false);
    });

    test('should return 8', () => {
        expect(heap.root()).toBe(8);
    });
});