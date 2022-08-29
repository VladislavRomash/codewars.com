function squaresOnly(array) {
    return array.filter(f => Math.sqrt(f) % 2 === 0 || Math.sqrt(f) % 1 === 0)
}


squaresOnly([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
squaresOnly([31, 33, 35, 37, 39, 38, 36, 34, 32])
squaresOnly([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])