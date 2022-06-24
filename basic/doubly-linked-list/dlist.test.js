const {emptyDList} = require('./dlist.js');

describe('dlist: initial tests', () => {
    let dlist;
    dlist = emptyDList();

    test('should return true', () => {
        expect(dlist.isEmpty()).toBe(true);
    });

    test('should throw EmptyDListError', () => {
        expect(() => dlist.firstLeft())
            .toThrow('Can not access elements of an empty dlist');
    });
});

describe('dlist: core operations', () => {
    let dlist = emptyDList()
                .makeListLeft(5)
                .makeListLeft(2)
                .makeListLeft(4)
                .makeListLeft(1)
                .makeListLeft(3);

    test('should return false', () => {
        expect(dlist.isEmpty()).toBe(false);
    });

    test('should return 3', () => {
        expect(dlist.firstLeft()).toBe(3);
    });

    test('should return 5', () => {
        expect(dlist.firstRight()).toBe(5);
    });

    describe('dlist.restRight()', () => {
        let right = dlist.restRight();

        test('should return false', () => {
            expect(right.isEmpty()).toBe(false);
        });

        test('should return 3', () => {
            expect(right.firstLeft()).toBe(3);
        });

        test('should return 2', () => {
            expect(right.firstRight()).toBe(2);
        });
    });


    describe('dlist.restLeft()', () => {
        let left = dlist.restLeft();

        test('should return false', () => {
            expect(left.isEmpty()).toBe(false);
        });

        test('should return 1', () => {
            expect(left.firstLeft()).toBe(1);
        });

        test('should return 5', () => {
            expect(left.firstRight()).toBe(5);
        });
    });

    describe('test makeListRight()', () => {
        let dlist = emptyDList()
                    .makeListRight(3)
                    .makeListRight(1)
                    .makeListRight(4)
                    .makeListRight(2)
                    .makeListRight(5);

        test('should return false', () => {
            expect(dlist.isEmpty()).toBe(false);
        });

        test('should return 3', () => {
            expect(dlist.firstLeft()).toBe(3);
        });

        test('should return 5', () => {
            expect(dlist.firstRight()).toBe(5);
        });
    });
});