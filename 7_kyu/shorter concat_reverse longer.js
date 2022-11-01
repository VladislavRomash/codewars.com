function shorter_reverse_longer(a, b) {
    if (a.length > b.length || a.length === b.length) {
        return `${b}${a.split('').reverse().join('')}${b}`
    } else return `${a}${b.split('').reverse().join('')}${a}`
}


shorter_reverse_longer("first", "abcde")
shorter_reverse_longer("hello", "bau")
shorter_reverse_longer("fghi", "abcde")




