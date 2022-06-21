const {emptyTree, makeBT, size} = require('./btree.js');

describe('btree: initial tests', () => { 
    let btree = emptyTree();

    test('should return true', () => { 
        expect(btree.isEmpty()).toBe(true);
     });

    test('should throw EmptyTreeError', () => { 
        expect(() => btree.root())
            .toThrow('Can not access root value of an empty tree');
     });
 });

 describe('btree: core operations', () => { 
    let btree = makeBT(11);

    test('should return false', () => { 
        expect(btree.isEmpty()).toBe(false);
     });

    test('should return 11', () => { 
        expect(btree.root()).toBe(11);
     });

    describe('left and right subtree', () => {
        let btree = makeBT(8, emptyTree(), emptyTree());

        test('should return 8', () => {
            expect(btree.root()).toBe(8);
        });

        test('should return true', () => {
            expect(btree.right().isEmpty()).toBe(true);
            expect(btree.left().isEmpty()).toBe(true);
        });
    });

    describe('nested binary tree', () => {
        let btree = makeBT(
                    8,
                    makeBT(
                        3,
                        makeBT(1),
                        makeBT(
                            6,
                            emptyTree(),
                            makeBT(7))
                        ),
                    makeBT(
                        11,
                        makeBT(
                            9,
                            emptyTree(),
                            makeBT(10)
                        ),
                    makeBT(
                        14,
                        makeBT(12),
                        makeBT(15)
                    )
                )
            );

        test('should return 8', () => {
            expect(btree.root()).toBe(8);
        });

        test('should return left: 3 and right: 11', () => {
            expect(btree.left().root()).toBe(3);
            expect(btree.right().root()).toBe(11);
        });

        test('should return true', () => {
            expect(btree.left().left().left().isEmpty()).toBe(true);
        });

        test('should return 11', () => {
            expect(size(btree)).toBe(11);
        });
    });
  });