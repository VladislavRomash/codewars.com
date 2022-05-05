var findAverage = function (nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length
}

findAverage([1])
findAverage([1, 3, 5, 7])