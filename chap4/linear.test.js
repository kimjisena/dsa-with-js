const {linear} = require('./linear.js');

describe('linear search', () => { 
    let a = [1, 4, 17, 3, 90, 79, 4, 6, 81];

    test('should return 2', () => {
        expect(linear(a, 17)).toBe(2);
    });

    test('should return 4', () => {
        expect(linear(a, 90)).toBe(4);
    });

    test('should return -1', () => {
        expect(linear(a, 73)).toBe(-1);
    });
 });