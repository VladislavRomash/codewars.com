function solve(a, b) {
    return [...a, ...b].filter(f => a.includes(f) ^ b.includes(f)).join('')
}


solve("xyab", "xzca")
solve("xyabb", "xzca")
solve("abcd", "xyz")