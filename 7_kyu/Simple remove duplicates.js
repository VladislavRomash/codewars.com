function solve(arr) {
    return [...new Set(arr.reverse())].reverse()
}

solve([3, 4, 4, 3, 6, 3])
solve([1, 2, 1, 2, 1, 2, 3])
solve([1, 2, 3, 4])