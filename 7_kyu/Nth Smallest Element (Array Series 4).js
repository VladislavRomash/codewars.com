function nthSmallest(arr, pos) {
    return [...arr].sort((a, b) => a - b)[pos - 1]
}


nthSmallest([3, 1, 2], 2)
nthSmallest([15, 20, 7, 10, 4, 3], 3)
nthSmallest([-5, -1, -6, -18], 4)