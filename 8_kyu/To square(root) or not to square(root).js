function squareOrSquareRoot(array) {
    return array.map(m => Math.sqrt(m) == Math.sqrt(m).toFixed(0) ? Math.sqrt(m) : m * m);
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1])
squareOrSquareRoot([100, 101, 5, 5, 1, 1])
squareOrSquareRoot([1, 2, 3, 4, 5, 6])
