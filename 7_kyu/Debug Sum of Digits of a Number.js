function getSumOfDigits(integer) {
    const digits = integer.toString().split('')
    return digits.reduce((acc, el) => +acc + +el, 0)
}

getSumOfDigits(123)
getSumOfDigits(223)
getSumOfDigits(0)


/*
function getSumOfDigits(integer) {
    let sum = null;
    let digits = Math.floor(integer).toString();
    for (let ix = 0; ix < digits.length; ix++) {
        sum += +digits[ix]
    }
    return sum;
}*/
