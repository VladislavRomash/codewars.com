function squareArea(A) {
    return Number((Math.pow((A / (2 * Math.PI * (90 / 360))), 2)).toFixed(2))
}

squareArea(2)
squareArea(0)
squareArea(14.05)