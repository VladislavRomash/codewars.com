function validateWord(s) {
    let obj = {}
    for (let value of s.toLowerCase()) {
        if (obj[value] === undefined) {
            obj[value] = 0
        }
        obj[value]++
    }
    return Math.max(...Object.values(obj)) === Math.min(...Object.values(obj))
}

function validateWord(s, c = s.toLowerCase()) {
    return c.length % new Set(c).size === 0
}


validateWord("abcabc")
validateWord("abcabcd")
validateWord("abc!abc!")
validateWord("abc:abc")
