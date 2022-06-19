const {emptyDList} = require('./dlist.js');

describe('dlist: initial test', () => {
    let dlist;
    dlist = emptyDList();

    test('dlist.isEmpty() returns true for empty dlist', () => {
        expect(dlist.isEmpty()).toBe(true);
    });

    test('empty dlist throws EmptyDListError', () => {
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

    test('dlist.isEmpty() is false for non-empty dlist', () => {
        expect(dlist.isEmpty()).toBe(false);
    });

    test('dlist.firstLeft() is 3', () => {
        expect(dlist.firstLeft()).toBe(3);
    });

    test('dlist.firstRight() is 5', () => {
        expect(dlist.firstRight()).toBe(5);
    });

    describe('dlist.restRight()', () => {
        let right = dlist.restRight();

        test('right.isEmpty() is false', () => {
            expect(right.isEmpty()).toBe(false);
        });

        test('right.firtLeft() is 3', () => {
            expect(right.firstLeft()).toBe(3);
        });

        test('right.firstRight() is 2', () => {
            expect(right.firstRight()).toBe(2);
        });
    });


    describe('dlist.restLeft()', () => {
        let left = dlist.restLeft();

        test('left.isEmpty() is false', () => {
            expect(left.isEmpty()).toBe(false);
        });

        test('left.firstLeft() is 1', () => {
            expect(left.firstLeft()).toBe(1);
        });

        test('left.firstRight() is 5', () => {
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

        test('dlist.isEmpty() is false', () => {
            expect(dlist.isEmpty()).toBe(false);
        });

        test('dlist.firstLeft() is 3', () => {
            expect(dlist.firstLeft()).toBe(3);
        });

        test('dlist.firstRight() is 5', () => {
            expect(dlist.firstRight()).toBe(5);
        });
    });
});