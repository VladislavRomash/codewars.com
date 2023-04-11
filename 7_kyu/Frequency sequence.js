function freqSeq(str, sep) {
    let strToArr = str.split('')
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(strToArr.filter(f => f === str[i]).length)
    }
    return arr.join(sep)
}


freqSeq('hello world', '-') // '1-1-3-3-2-1-1-2-1-3-1'
freqSeq('19999999', ':') // '1:7:7:7:7:7:7:7'
freqSeq('^^^**$', 'x') // '3x3x3x2x2x1'