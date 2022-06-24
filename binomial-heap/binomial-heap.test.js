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

    test('should return 9', () => {
        expect((heap.root())[0]).toBe(null);
    });

    test('should return -Infinity', () => {
        expect((heap.root())[1]).toBe(null);
    });

    test('should return -Infinity', () => {
        expect((heap.root())[2]).toBe(null);
    });

    test('should return -Infinity', () => {
        expect(((heap.root())[3].getChildren())[0].value()).toBe(5);
    });

    test('should return -Infinity', () => {
        expect(((heap.root())[3].getChildren())[1].value()).toBe(3);
    });

    test('should return -Infinity', () => {
        expect(((heap.root())[3].getChildren())[2].value()).toBe(7);
    });
});