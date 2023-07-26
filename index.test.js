const funcs = require ('./index');

//Act
const strs = ['quick', 'jumps over the', ''];

//Assert
test(' the length of str[0] is 5', () => {
    expect(funcs.stringLength(strs[0])).toBe(5);
});

test('throws an error if string is more than 10', () => {
    expect(() => funcs.stringLength(strs[1])).toThrow();
});

test('throws an error if string is empty', () => {
    expect(() => funcs.stringLength(strs[2])).toThrow('string length is not between 0 and 10.');
});

test('given "quick" it should return "kciuq"', () => {
    expect(funcs.reverseString(strs[0])).toBe('kciuq');
});