function squareDigits(num) {
    return +(num.toString().split('').map(m => Math.pow(m, 2)).join(''))
}


squareDigits(3212)
squareDigits(2112)
squareDigits(0)