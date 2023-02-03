function modifiedSum(a, n) {
    return a.map(m => Math.pow(m, n)).reduce((acc, el) => acc + el) - a.reduce((acc, el) => acc + el)
}


modifiedSum([1, 2, 3], 3)
modifiedSum([1, 2], 5)