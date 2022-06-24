const {makeQT, baseQT, rotate180} = require('./qtree.js');

describe('qtree: initial tests', () => {
    let qtree = baseQT(0);

    test('should return true', () => {
        expect(qtree.isValue()).toBe(true);
    });

    test('should return 0', () => {
        expect(qtree.value()).toBe(0);
    });

    test('should return 0', () => {
        expect(qtree.lu().value()).toBe(0);
    });

    test('should return 0', () => {
        expect(qtree.ru().value()).toBe(0);
    });

    test('should return 0', () => {
        expect(qtree.rl().value()).toBe(0);
    });

    test('should return 0', () => {
        expect(qtree.ll().value()).toBe(0);
    });
});

describe('qtree: core operations', () => {
    let qtree = makeQT(baseQT(0), baseQT(10), baseQT(20), baseQT(100));

    test('should return false', () => {
        expect(qtree.isValue()).toBe(false);
    });

    test('should throw NotValueError', () => {
        expect(() => qtree.value())
            .toThrow('Can not access value of a qtree with children');
    });

    test('should return true', () => {
        expect(qtree.lu().isValue()).toBe(true);
        expect(qtree.ru().isValue()).toBe(true);
        expect(qtree.rl().isValue()).toBe(true);
        expect(qtree.ll().isValue()).toBe(true);
    });

    describe('qtree from four values', () => {
        let qtree = makeQT(110, 120, 90, 100);

        test('should return false', () => {
            expect(qtree.isValue()).toBe(false);
        });

        test('should throw NotValueError', () => {
            expect(() => qtree.value())
                .toThrow('Can not access value of a qtree with children');
        });

        test('should return 110', () => {
            expect(qtree.lu().value()).toBe(110);
        });
    
        test('should return 120', () => {
            expect(qtree.ru().value()).toBe(120);
        });
    
        test('should return 90', () => {
            expect(qtree.rl().value()).toBe(90);
        });
    
        test('should return 100', () => {
            expect(qtree.ll().value()).toBe(100);
        });
    });

    describe('nested qtree', () => {
        let qtree = makeQT(
            0, 
            10, 
            20, 
            makeQT(
                50,
                makeQT(
                    60,
                    70,
                    80,
                    makeQT(
                        110,
                        120,
                        90,
                        100)),
                30,
                40));

        test('should return false', () => {
            expect(qtree.isValue()).toBe(false);
        });

        test('should return 0', () => {
            expect(qtree.lu().value()).toBe(0);
        });

        test('should return 10', () => {
            expect(qtree.ru().value()).toBe(10);
        });

        test('should return 20', () => {
            expect(qtree.rl().value()).toBe(20);
        });

        test('should return false', () => {
            expect(qtree.ll().isValue()).toBe(false);
        });
    });

    describe('qtree rotation', () => {
        let qtree = makeQT(
            0, 
            10, 
            20, 
            makeQT(
                50,
                makeQT(
                    60,
                    70,
                    80,
                    makeQT(
                        110,
                        120,
                        90,
                        100)),
                30,
                40));

        let qtree180 = rotate180(qtree);

        test('should return false', () => {
            expect(qtree180.isValue()).toBe(false);
        });

        test('should return 20', () => {
            expect(qtree180.lu().value()).toBe(20);
        });

        test('should return false', () => {
            expect(qtree180.ru().isValue()).toBe(false);
        });

        test('should return 0', () => {
            expect(qtree180.rl().value()).toBe(0);
        });

        test('should return 10', () => {
            expect(qtree180.ll().value()).toBe(10);
        });
    });
});