const capitalize = require('./capitalize')
const str = 'quick';

test('"quick" should become "Quick"', () => {
    expect(capitalize(str)).toBe('Quick');
});