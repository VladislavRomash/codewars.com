function sumMul(n, m) {
    let arr = []
    for (let i = n; i < m; i++) {
        arr.push(i)
    }
    return m > 0 ? arr.filter(f => f % n === 0).reduce((a, b) => a + b, 0) : 'INVALID'
}


sumMul(2, 9)
sumMul(3, 13)
sumMul(0, 0)
