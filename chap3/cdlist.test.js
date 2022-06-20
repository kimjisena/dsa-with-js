const {emptyCDList} = require('./cdlist.js');

describe('cdlist: initial tests', () => {
    let cdlist = emptyCDList();

    test('should return true', () => {
        expect(cdlist.isEmpty()).toBe(true);
    });

    test('should throw CDListEmptyError', () => {
        expect(() => cdlist.firstLeft())
            .toThrow('Can not access elements of an empty cdlist');
    });

    test('should throw CDListEmptyError', () => {
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

    test('should return false', () => {
        expect(cdlist.isEmpty()).toBe(false);
    });

    test('should return 3', () => {
        expect(cdlist.firstLeft()).toBe(3);
    });

    test('should return 5', () => {
        expect(cdlist.firstRight()).toBe(5);
    });

    describe('cdlist.restRight()', () => {
        let right = cdlist.restRight();

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

    describe('cdlist.restLeft()', () => {
        let left = cdlist.restLeft();

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
        let cdlist = emptyCDList()
                    .makeListRight(3)
                    .makeListRight(1)
                    .makeListRight(4)
                    .makeListRight(2)
                    .makeListRight(5);

        test('should return false', () => {
            expect(cdlist.isEmpty()).toBe(false);
        });

        test('should return 3', () => {
            expect(cdlist.firstLeft()).toBe(3);
        });

        test('should return 5', () => {
            expect(cdlist.firstRight()).toBe(5);
        });
    });
});