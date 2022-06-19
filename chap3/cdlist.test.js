const {emptyCDList} = require('./cdlist.js');

describe('cdlist: initial tests', () => {
    let cdlist = emptyCDList();

    test('cdlist.isEmpty() is true for empty cdlist', () => {
        expect(cdlist.isEmpty()).toBe(true);
    });

    test('cdlist.firstLeft() throws CDListEmptyError on empty cdlist', () => {
        expect(() => cdlist.firstLeft())
            .toThrow('Can not access elements of an empty cdlist');
    });

    test('cdlist.firstRight() throws CDListEmptyError on empty cdlist', () => {
        expect(() => cdlist.firstRight())
            .toThrow('Can not access elements of an empty cdlist');
    });
});

describe('cdlist: core operations', () => {
    let cdlist = emptyCDList()
                .makeListLeft(5)
                .makeListLeft(2)
                .makeListLeft(4)
                .makeListLeft(1)
                .makeListLeft(3);

    test('cdlist.isEmpty() is false for non-empty cdlist', () => {
        expect(cdlist.isEmpty()).toBe(false);
    });

    test('cdlist.firstLeft() is 3', () => {
        expect(cdlist.firstLeft()).toBe(3);
    });

    test('cdlist.firstRight() is 5', () => {
        expect(cdlist.firstRight()).toBe(5);
    });

    describe('cdlist.restRight()', () => {
        let right = cdlist.restRight();

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

    describe('cdlist.restLeft()', () => {
        let left = cdlist.restLeft();

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
        let cdlist = emptyCDList()
                    .makeListRight(3)
                    .makeListRight(1)
                    .makeListRight(4)
                    .makeListRight(2)
                    .makeListRight(5);

        test('cdlist.isEmpty() is false', () => {
            expect(cdlist.isEmpty()).toBe(false);
        });

        test('cdlist.firstLeft() is 3', () => {
            expect(cdlist.firstLeft()).toBe(3);
        });

        test('cdlist.firstRight() is 5', () => {
            expect(cdlist.firstRight()).toBe(5);
        });
    });
});