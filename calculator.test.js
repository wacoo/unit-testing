const Calculator = require('./calculator');
const cal = new Calculator();

describe('test add()', () => {
    test('test 2+2 = 4', () => {
        expect(cal.add(2, 2)).toBe(4);
    });

    test('test 2+-2 = 0', () => {
        expect(cal.add(2, -2)).toBe(0);
    });

    test('test -2+-2 = 0', () => {
        expect(cal.add(-2, -2)).toBe(-4);
    });
});

describe('test sub()', () => {
    test('test 4-2 = 2', () => {
        expect(cal.sub(4, 2)).toBe(2);
    });

    test('test 4-0 = 2', () => {
        expect(cal.sub(4, 0)).toBe(4);
    });

    test('test 4-6 = 2', () => {
        expect(cal.sub(4, 6)).toBe(-2);
    });
});

describe('test mul()', () => {
    test('test 2*2 = 4', () => {
        expect(cal.mul(2, 2)).toBe(4);
    });

    test('test 0*2 = 0', () => {
        expect(cal.mul(0, 2)).toBe(0);
    });

    test('test 1*2 = 2', () => {
        expect(cal.mul(1, 2)).toBe(2);
    });
});

describe('test div()', () => {
    test('2/2 = 1', () => {
        expect(cal.div(2, 2)).toBe(1);
    });

    test('2/1 = 2', () => {
        expect(cal.div(2, 1)).toBe(2);
    });

    test('1/2 = 0.5', () => {
        expect(cal.div(1, 2)).toBeCloseTo(0.5);
    });
});
