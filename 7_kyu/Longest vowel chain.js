function solve(s) {
    return Math.max(...s.replace(/[^aeiou]/gi, ' ').split(' ').filter(f => f !== '').map(m => m.length))
}

solve("codewarriors")
solve("suoidea")
solve("iiihoovaeaaaoougjyaw")



