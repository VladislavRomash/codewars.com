function solve(s) {
    const arr = s.split('')
    const totalLower = arr.filter(f => f === f.toLowerCase())
    const totalUpper = arr.filter(f => f === f.toUpperCase())
    return totalLower.length === totalUpper.length ? s.toLowerCase() : totalLower.length > totalUpper.length ? s.toLowerCase() : s.toUpperCase()
}

solve("code")
solve("CODe")
solve("COde")
solve("Code")