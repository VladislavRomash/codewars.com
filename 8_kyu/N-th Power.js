function index(array, n) {
    return array.length > n ? Math.pow(array[n], n) : -1
}

index([1, 2, 3, 4], 2)
index([1, 3, 10, 100], 3)
index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9)