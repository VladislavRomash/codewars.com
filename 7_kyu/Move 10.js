function moveTen(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let result = []
    for (let i = 0; i < s.length; i++) {
        result.push(alphabet[alphabet.indexOf(s[i]) + 10])
    }
    return result.join('')
}

// function moveTen(s) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
//     const arr = s.split('').map(m => alphabet.indexOf(m) + 10)
//     const result = arr.map(m => alphabet[m])
//     return result.join('')
// }

moveTen("codewars")