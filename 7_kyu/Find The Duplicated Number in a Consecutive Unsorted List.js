function findDup(arr) {
    let sort = [...arr].sort((a, b) => a - b)
    return sort.filter((f, i) => f === sort[i + 1])[0]
}


findDup([1, 2, 2, 3])
findDup([1, 3, 2, 5, 4, 5, 7, 6])