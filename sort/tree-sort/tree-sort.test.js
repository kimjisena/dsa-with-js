const {treeSort} = require('./tree-sort.js');

describe('tree sort tests', () => { 
    let nodes = [8, 3, 1, 6, 7, 11, 14, 9, 10, 12, 15];

    test('should return a sorted array', () => {
        let sorted = treeSort(nodes);
        
        expect(sorted[0]).toBe(1);
        expect(sorted[1]).toBe(3);
        expect(sorted[2]).toBe(6);
        expect(sorted[3]).toBe(7);
        expect(sorted[4]).toBe(8);
        expect(sorted[5]).toBe(9);
        expect(sorted[6]).toBe(10);
        expect(sorted[7]).toBe(11);
        expect(sorted[8]).toBe(12);
        expect(sorted[9]).toBe(14);
        expect(sorted[10]).toBe(15);
    });
});