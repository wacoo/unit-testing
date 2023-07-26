stringLength = (str) => {
    const len = str.length;
    if (len > 0 && len <= 10) {
        return str.length;
    } else {
        throw new Error('string length is not between 0 and 10.');
    }
    
}

reverseString = (str) => {
    const strArr = str.split('');
    const reversed = strArr.reverse();
    const strRev = reversed.join('');
    return strRev;
}

console.log(reverseString('quick'));
module.exports = { stringLength, reverseString };