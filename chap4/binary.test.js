const { binary } = require('./binary.js');

describe('binary search tests', () => { 
    let a = [0, 1, 3, 4, 4, 6, 17, 79, 81, 90];

    test('should return 5', () => { 
        expect(binary(a, 17)).toBe(6);
     });

    test('should return 2', () => { 
        expect(binary(a, 0)).toBe(0);
     });

    test('should return -1', () => { 
        expect(binary(a, 19)).toBe(-1);
     });
 });