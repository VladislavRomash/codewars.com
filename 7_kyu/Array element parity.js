function solve(arr) {
    return arr.filter(f => !arr.includes(-1 * f))[0]
}


solve([1, -1, 2, -2, 3])
solve([-3, 1, 2, 3, -1, -4, -2])
solve([1, -1, 2, -2, 3, 3])