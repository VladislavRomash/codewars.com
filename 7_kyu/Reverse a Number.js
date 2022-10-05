function reverseNumber(n) {
    if (n > 0) {
        return +(n.toString().split('').reverse().join(''))
    } else return -(Math.abs(n).toString().split('').reverse().join(''))
}


reverseNumber(123)
reverseNumber(-123)
reverseNumber(1000)