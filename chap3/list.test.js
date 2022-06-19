const {emptyList, last, append} = require('./list.js');

// testing linked list functionality
describe('initial tests', () => {
    let list;

    beforeAll(()=> {
        list = emptyList();
    });

    test('empty list throws EmptyListError', () => {
        expect(() => list.top()).toThrow('Can not access elements of an empty list');
    });

    test('list.isEmpty() returns true for empty list', () => {
        expect(list.isEmpty()).toBe(true);
    });    

});

describe('testing core operations', () => {
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

    test('list.top() element is 3', () => {
        expect(list.top()).toBe(3);
    });

    test('rest is not empty', () => {
        expect(rest.isEmpty()).toBe(false);
     });

    test('rest.top() element is 1', () => {
        expect(rest.top()).toBe(1);
    });

    test('replace top with 9', () => {
        list.replaceTop(9);
        expect(list.top()).toBe(9);
    });

    test('replace rest: top is 9', () => {
        let replaced = list.replaceRest(6, 2, 3, 4);
        expect(replaced.top()).toBe(9);
    });

    test('replace rest: last is 4', () => {
        let replaced = list.replaceRest(6, 2, 3, 4);
        expect(last(replaced)).toBe(4);
    });

    test('append rest to list: top is 5', () => {
        let appended = append(list, rest);
        expect(appended.top()).toBe(5);
    });
});