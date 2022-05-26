function isOpposite(s1, s2) {
    let str = ''
    for (let i = 0; i < s1.length; i++) {
        s1[i] === s1[i].toUpperCase() ? str += s1[i].toLowerCase() : str += s1[i].toUpperCase()
    }
    return s1 !== '' && s2 !== '' && str === s2 && s1.length === s2.length
}


isOpposite("ab", "AB")
isOpposite("aBcde", "AbCD")
isOpposite("", "")