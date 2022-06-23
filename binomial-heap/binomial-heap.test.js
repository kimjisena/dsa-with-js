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