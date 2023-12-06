function pattern(n) {
    let str = ''
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            str += '1\n'
        } else {
            str += `1${'*'.repeat(i)}${(i + 1).toString()}\n`
        }
    }
    return str.trim()
}

pattern(3)
pattern(7)