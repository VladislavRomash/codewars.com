function switcheroo(x) {
    let newStr = ''
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'a') {
            newStr += 'b'
        }
        if (x[i] === 'b') {
            newStr += 'a'
        }
        if (x[i] === 'c') {
            newStr += 'c'
        }
    }
    return newStr
}


switcheroo('abc')
switcheroo('aaabcccbaaa')
switcheroo('ccccc')