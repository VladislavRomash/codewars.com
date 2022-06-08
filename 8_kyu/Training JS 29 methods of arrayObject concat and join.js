function bigToSmall(arr) {
    return [].concat(...arr).sort((a, b) => b - a).join('>')
}


bigToSmall([[1, 2], [3, 4], [5, 6]])
bigToSmall([[1, 3, 5], [2, 4, 6]])
bigToSmall([[1, 1], [1], [1, 1]])