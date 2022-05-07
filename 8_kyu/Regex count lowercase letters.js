function lowercaseCount(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return str.split('').reduce((a, b) => {
        return a += alphabet.includes(b) ? 1 : 0
    }, 0)
}

lowercaseCount("abc")
lowercaseCount("abcABC123")
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")