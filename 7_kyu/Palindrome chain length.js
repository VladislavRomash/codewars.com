const palindromeChainLength = function (n) {
    let step = 0
    let reverseNum = +n.toString().split('').reverse().join('')
    while (n !== reverseNum) {
        n += reverseNum
        reverseNum = +n.toString().split('').reverse().join('')
        step++
    }
    return step
};

palindromeChainLength(1)
palindromeChainLength(88)
palindromeChainLength(87)
palindromeChainLength(10)
palindromeChainLength(89)
