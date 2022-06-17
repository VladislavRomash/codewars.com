function sumSquares(array) {
    return array.map(m => Math.pow(m, 2)).reduce((a, b) => a + b, 0)
}


sumSquares([1, 2, 3, 4, 5])
sumSquares([7, 3, 9, 6, 5])