const {emptyList, last, append} = require('./list.js');

describe('list: initial tests', () => {
    let list;

    beforeAll(()=> {
        list = emptyList();
    });

    test('should throw EmptyListError', () => {
        expect(() => list.top())
            .toThrow('Can not access elements of an empty list');
    });

    test('should return true', () => {
        expect(list.isEmpty()).toBe(true);
    });    

});

describe('list: core operations', () => {
    let list,
        rest;

    beforeAll(() => {
        list = emptyList().makeList(5)
            .makeList(2)
            .makeList(4)
            .makeList(1)
            .makeList(3);
        rest = list.rest();
    });

    test('should return 3', () => {
        expect(list.top()).toBe(3);
    });

    test('should return false', () => {
        expect(rest.isEmpty()).toBe(false);
     });

    test('should return 1', () => {
        expect(rest.top()).toBe(1);
    });

    test('should return 9', () => {
        list.replaceTop(9);
        expect(list.top()).toBe(9);
    });

    test('should return 9', () => {
        expect(list.replaceRest(6, 2, 3, 4).top()).toBe(9);
    });

    test('should return 4', () => {
        expect(last(list.replaceRest(6, 2, 3, 4))).toBe(4);
    });

    test('should return 5', () => {
        expect(append(list, rest).top()).toBe(5);
    });
});