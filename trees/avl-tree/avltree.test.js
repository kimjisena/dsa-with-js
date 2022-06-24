const { getAVL, insert, remove } = require('./avltree.js');

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

    describe('avl-tree: single left rotation', () => {
        let avltree = getAVL(5,
                            getAVL(3),
                            getAVL(7,
                                getAVL(6),
                                getAVL(9, getAVL(), getAVL(10)))
                            );

        test('should return 2', () => {
            expect(avltree.height()).toBe(2);
        });
                    
        test('should return 0', () => {
            expect(avltree.getBalance()).toBe(0);
        });

        test('should return 7', () => {
            expect(avltree.root()).toBe(7);
        });

        test('should return 9', () => {
            expect(avltree.right().root()).toBe(9);
        });

        test('should return 5', () => {
            expect(avltree.left().root()).toBe(5);
        });
    });

    describe('avl-tree: single right rotation', () => {
        let avltree = getAVL(7,
                            getAVL(5, 
                                getAVL(3, getAVL(2), getAVL(1)),
                                getAVL(6)),
                            getAVL(9)
                            );

        test('should return 2', () => {
            expect(avltree.height()).toBe(2);
        });
                    
        test('should return 0', () => {
            expect(avltree.getBalance()).toBe(0);
        });

        test('should return 5', () => {
            expect(avltree.root()).toBe(5);
        });

        test('should return 7', () => {
            expect(avltree.right().root()).toBe(7);
        });

        test('should return 3', () => {
            expect(avltree.left().root()).toBe(3);
        });
    });

    describe('avl-tree: double left rotation', () => {
        let avltree = getAVL(5,
                            getAVL(3),
                            getAVL(7,
                                getAVL(6, getAVL(4), getAVL()),
                                getAVL(9))
                            );

        test('should return 2', () => {
            expect(avltree.height()).toBe(2);
        });
                    
        test('should return 0', () => {
            expect(avltree.getBalance()).toBe(0);
        });

        test('should return 6', () => {
            expect(avltree.root()).toBe(6);
        });

        test('should return 7', () => {
            expect(avltree.right().root()).toBe(7);
        });

        test('should return 5', () => {
            expect(avltree.left().root()).toBe(5);
        });
    });

    describe('avl-tree: double right rotation', () => {
        let avltree = getAVL(7,
                            getAVL(4, getAVL(2), getAVL(5, getAVL(3), getAVL())),
                            getAVL(9)
                            );

        test('should return 2', () => {
            expect(avltree.height()).toBe(2);
        });
                    
        test('should return 0', () => {
            expect(avltree.getBalance()).toBe(0);
        });

        test('should return 5', () => {
            expect(avltree.root()).toBe(5);
        });

        test('should return 7', () => {
            expect(avltree.right().root()).toBe(7);
        });

        test('should return 4', () => {
            expect(avltree.left().root()).toBe(4);
        });
    });

    describe('avl-tree: insertion', () => {
        let nodes = [7, 4, 9, 2, 5, 3];
        let avltree = getAVL();

        for (let n of nodes) {
            avltree = insert(n, avltree);
        }

        test('should return 2', () => {
            expect(avltree.height()).toBe(2);
        });
                    
        test('should return 0', () => {
            expect(avltree.getBalance()).toBe(0);
        });

        test('should return 4', () => {
            expect(avltree.root()).toBe(4);
        });

        test('should return 7', () => {
            expect(avltree.right().root()).toBe(7);
        });

        test('should return 2', () => {
            expect(avltree.left().root()).toBe(2);
        });
    });

    describe('avl-tree: deletion', () => {
        let nodes = [15, 12, 23, 9, 13, 19, 25, 16];
        let avltree = getAVL();

        for (let n of nodes) {
            avltree = insert(n, avltree);
        }

        test('should return 3', () => {
            expect(avltree.height()).toBe(3);
        });

        test('should return: false, 15, 12, 23, true', () => {
            // removing a leaf node
            let removed = remove(9, avltree);
            expect(removed.isEmpty()).toBe(false);
            expect(removed.root()).toBe(15);
            expect(removed.left().root()).toBe(12);
            expect(removed.right().root()).toBe(23);
            expect(removed.left().left().isEmpty()).toBe(true);
        });

        test('should return: false, 15, 12, 23, false, 16', () => {
            // removing a non-leaf node with one child
            let removed = remove(19, avltree);
            expect(removed.isEmpty()).toBe(false);
            expect(removed.root()).toBe(15);
            expect(removed.left().root()).toBe(12);
            expect(removed.right().root()).toBe(23);
            expect(removed.right().left().isEmpty()).toBe(false);
            expect(removed.right().left().root()).toBe(16);
        });

        test('should return: false, 15, 12, 19, 16, 25', () => {
            // removing a non-leaf node with two children
            let removed = remove(23, avltree);
            expect(removed.isEmpty()).toBe(false);
            expect(removed.root()).toBe(15);
            expect(removed.left().root()).toBe(12);
            expect(removed.right().root()).toBe(19);
            expect(removed.right().left().root()).toBe(16);
            expect(removed.right().right().root()).toBe(25);
        });
    });
});