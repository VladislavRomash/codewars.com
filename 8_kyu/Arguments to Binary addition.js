function arr2bin(arr) {
    return arr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0).toString(2)
}

arr2bin([1, 2])
arr2bin([1, 2, 3, 4, 5])