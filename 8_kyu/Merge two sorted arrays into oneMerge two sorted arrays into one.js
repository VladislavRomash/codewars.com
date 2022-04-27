function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a > b ? 1 : -1).filter((f, i, arr) => arr.indexOf(f) === i)
}

mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])
mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])