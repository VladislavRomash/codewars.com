function solve(arr) {
    let sort = [...arr].sort((a, b) => a - b)
    return arr.map((e, i) => {
        if (i % 2 === 0) {
            return sort.pop()
        } else {
            return sort.shift()
        }
    })
}


solve([15, 11, 10, 7, 12])
solve([91, 75, 86, 14, 82])
solve([52, 77, 72, 44, 74, 76, 40])
solve([1, 6, 9, 4, 3, 7, 8, 2])