function howManySmaller(arr, n) {
    return arr.map(m => m.toFixed(2)).filter(f => f < n).length
}

howManySmaller([1.234, 1.235, 1.228], 1.24)
howManySmaller([1.1888, 1.1868, 1.1838], 1.19)
howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)