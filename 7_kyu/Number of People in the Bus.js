let number = function (busStops) {
    return busStops.map(m => m[0]).reduce((a, b) => a + b, 0) - busStops.map(m => m[1]).reduce((a, b) => a + b, 0)
}

number([[10, 0], [3, 5], [5, 8]]) //5
number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) //17
number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]) //21