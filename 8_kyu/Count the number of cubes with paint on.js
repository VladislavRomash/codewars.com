var countSquares = function (cuts) {
    return cuts > 0 ? 6 * Math.pow(cuts, 2) + 2 : 1
}

countSquares(5)
countSquares(16)
countSquares(23)