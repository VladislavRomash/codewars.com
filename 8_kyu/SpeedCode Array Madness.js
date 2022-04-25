function arrayMadness(a, b) {
    return a.map(m => Math.pow(m, 2)).reduce((sum, elem) => sum + elem, 0) > b.map(m => Math.pow(m, 3)).reduce((sum, elem) => sum + elem, 0)
}

arrayMadness([4, 5, 6], [1, 2, 3])
arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])

arrayMadness([5, 6, 7], [4, 5, 6])
arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])