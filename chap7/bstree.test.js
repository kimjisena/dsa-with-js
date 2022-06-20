const { getBST, insert, recur_isIn, 
        iter_isIn, remove, isBSTree, 
        insertInOrder} = require('./bstree.js');

describe('bstree: initial tests', () => {
    let bstree = getBST();

    test('should return true', () => {
        expect(bstree.isEmpty()).toBe(true);
    });

    test('should return true', () => {
        expect(isBSTree(bstree)).toBe(true);
    });

    test('should throw EmptyTreeError', () => {
        expect(() => bstree.root())
            .toThrow('Can not access root value of an empty tree');
    });
});

describe('bstree: core operations', () => {
    let nodes = [8, 3, 1, 6, 7, 11, 14, 9, 10, 12, 15],
        bstree = getBST();

    for (let n of nodes) {
        bstree = insert(n, bstree);
    }

    test('should return false', () => {
        expect(bstree.isEmpty()).toBe(false);
    });

    test('should return true', () => {
        expect(isBSTree(bstree)).toBe(true);
        expect(isBSTree(bstree.left())).toBe(true);
        expect(isBSTree(bstree.right())).toBe(true);
    });

    test('should return 8', () => {
        expect(bstree.root()).toBe(8);
    });

    test('should return 3', () => {
        expect(bstree.left().root()).toBe(3);
    });

    test('should return 11', () => {
        expect(bstree.right().root()).toBe(11);
    });

    test('should return false', () => {
        expect(recur_isIn(9, bstree.left())).toBe(false);
    });

    test('should return true', () => {
        expect(iter_isIn(9, bstree.right())).toBe(true);
    });

    test('should return 9', () => {
        expect(remove(8, bstree).root()).toBe(9);
    });

    test('should return 6', () => {
        expect(remove(3, bstree).left().root()).toBe(6);
    });

    test('should return a sorted array', () => {
        let sorted = [];

        insertInOrder(bstree, sorted);

        expect(sorted[0]).toBe(1);
        expect(sorted[1]).toBe(3);
        expect(sorted[2]).toBe(6);
        expect(sorted[3]).toBe(7);
        expect(sorted[4]).toBe(8);
        expect(sorted[5]).toBe(9);
        expect(sorted[6]).toBe(10);
        expect(sorted[7]).toBe(11);
        expect(sorted[8]).toBe(12);
        expect(sorted[9]).toBe(14);
        expect(sorted[10]).toBe(15);
    });
});