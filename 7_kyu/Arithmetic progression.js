function arithmeticSequenceElements(a, d, n) {
    let arr = [a]
    while (--n) {
        arr.push(a += d)
    }
    return arr.join(', ')
}

arithmeticSequenceElements(1, 2, 5)
arithmeticSequenceElements(1, 0, 5)
arithmeticSequenceElements(1, -3, 10)
arithmeticSequenceElements(100, -10, 10)