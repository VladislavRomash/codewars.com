function twoOldestAges(ages) {
    return [ages.sort((a, b) => b - a)[1], ages.sort((a, b) => b - a)[0]]
}


twoOldestAges([1, 2, 10, 8])
twoOldestAges([1, 5, 87, 45, 8, 8])
twoOldestAges([1, 3, 10, 0])