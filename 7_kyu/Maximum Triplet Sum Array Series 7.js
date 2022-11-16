function maxTriSum(numbers) {
    return [...new Set(numbers)].sort((a, b) => b - a).slice(0, 3).reduce((acc, el) => acc + el)
}

maxTriSum([3, 2, 6, 8, 2, 3])
maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])
maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])