const {getHeap} = require('./heap-tree.js');

describe('heap tree: initial tests', () => { 
    let heap = getHeap();
    test('should return true', () => { 
        expect(heap.isEmpty()).toBe(true);
    });

    test('should throw EmptyHeapError', () => { 
        expect(() => heap.root())
            .toThrow('Can not access elements of empty heap');
    });

    test('should throw EmptyHeapError', () => { 
        expect(() => heap.lastLeaf())
            .toThrow('Can not access elements of empty heap');
    });
});

describe('heap tree: insertion', () => {
    let nodes = [96, 90, 70, 80, 75, 42, 60, 17, 44, 10, 72, 14];
    let heap = getHeap();
    for (let n of nodes) {
        heap = heap.insert(n);
    }

    test('should return false', () => { 
        expect(heap.isEmpty()).toBe(false);
    });

    test('should return 96', () => {
        expect(heap.root()).toBe(96);
    });

    test('should return 14', () => {
        expect(heap.lastLeaf()).toBe(14);
    });

    test('should return', () => {
        let inserted = heap.insert(120);
        expect(inserted.root()).toBe(120);
    });
});

describe('heap tree: deletion', () => {
    let nodes = [96, 90, 70, 80, 75, 42, 60, 17, 44, 10, 72, 14];
    let heap = getHeap();
    for (let n of nodes) {
        heap = heap.insert(n);
    }

    test('should return false', () => { 
        expect(heap.isEmpty()).toBe(false);
    });

    test('should return: 90, 72', () => {
        let deleted = heap.deleteRoot();
        expect(deleted.root()).toBe(90);
        expect(deleted.lastLeaf()).toBe(72);
    });

    test('should return: 96, 10', () => {
        let nodes = [96, 90, 70, 80, 75, 42, 60, 17, 44, 10, 72];
        let heap = getHeap();
        let deleted;
        for (let n of nodes) {
            heap = heap.insert(n);
        }

        deleted = heap.deleteAt(2);
        expect(deleted.root()).toBe(96);
        expect(deleted.lastLeaf()).toBe(10);
    });
});