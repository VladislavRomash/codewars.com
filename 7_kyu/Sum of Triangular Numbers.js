function sumTriangularNumbers(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(0.5 * i * (i + 1))
    }
    return arr.reduce((a, b) => a + b, 0);
}


sumTriangularNumbers(6)
sumTriangularNumbers(34)
sumTriangularNumbers(-291)