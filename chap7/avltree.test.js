const { getAVL } = require('./avltree.js');

describe('avl-tree: initial tests', () => {
    let avltree = getAVL();

    test('should return true', () => {
        expect(avltree.isEmpty()).toBe(true);
    });

    test('should return -1', () => {
        expect(avltree.height()).toBe(-1);
    });

    test('should throw EmptyTreeError', () => {
        expect(() =>avltree.leftHeight())
            .toThrow('Can not access root value of an empty tree');
    });

    test('should throw EmptyTreeError', () => {
        expect(() =>avltree.rightHeight())
            .toThrow('Can not access root value of an empty tree');
    });
});

describe('avl-tree: core operations', () => {
    let avltree = getAVL(5);

    test('should return false', () => {
        expect(avltree.isEmpty()).toBe(false);
    });

    test('should return 0', () => {
        expect(avltree.height()).toBe(0);
    });

    test('should return -1', () => {
        expect(avltree.leftHeight()).toBe(-1);
    });

    test('should return -1', () => {
        expect(avltree.rightHeight()).toBe(-1);
    });

    describe('avl-tree: heights and balances', () => {
        let avltree = getAVL(5,
                            getAVL(3),
                            getAVL(7, getAVL(6), getAVL(9))
                            );

        test('should return false', () => {
            expect(avltree.isEmpty()).toBe(false);
        });

        test('should return 5', () => {
            expect(avltree.root()).toBe(5);
        });
                        
        test('should return 2', () => {
            expect(avltree.height()).toBe(2);
        });

        test('should return 1', () => {
            expect(avltree.getBalance()).toBe(1);
        });
                        
        test('should return 0', () => {
            expect(avltree.leftHeight()).toBe(0);
        });

        test('should return 0', () => {
            expect(avltree.left().getBalance()).toBe(0);
        });

        test('should return 0', () => {
            expect(avltree.right().getBalance()).toBe(0);
        });
                        
        test('should return 1', () => {
            expect(avltree.rightHeight()).toBe(1);
       });
    });

    describe('avl-tree: single rotation', () => {
        let avltree = getAVL(5,
                            getAVL(3),
                            getAVL(7, getAVL(6), getAVL(9))
                            );

        test('should return 7', () => {
            expect(avltree.leftRotate().root()).toBe(7);
        });

        test('should return 5', () => {
            expect(avltree.leftRotate().rightRotate().root()).toBe(5);
        });
    });
});