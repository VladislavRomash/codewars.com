function mergeArrays(a, b) {
    return [...new Set(a.concat(b).sort((a, b) => a - b))]
}


mergeArrays([1, 3, 5], [2, 4, 6])
mergeArrays([2, 4, 8], [2, 4, 6])