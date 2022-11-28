function differenceOfSquares(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    const sum = Math.pow(arr.reduce((acc, el) => acc + el), 2)
    const sum2 = arr.map(m => Math.pow(m, 2)).reduce((acc, el) => acc + el)
    return sum - sum2
}


differenceOfSquares(5)
differenceOfSquares(10)
differenceOfSquares(100)