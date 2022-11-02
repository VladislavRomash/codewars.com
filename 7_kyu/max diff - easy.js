function maxDiff(list) {
    return list.length !== 0 ? Math.max(...list) - Math.min(...list) : 0
}


maxDiff([0, 1, 2, 3, 4, 5, 6])
maxDiff([-0, 1, 2, -3, 4, 5, -6])
maxDiff([0, 1, 2, 3, 4, 5, 16])