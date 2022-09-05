function greaterThanLessThan(a, b, c) {
    return a < b < c
}


greaterThanLessThan(Number(null), 0, 1)
greaterThanLessThan(700000000001, 700000000002, -1)
greaterThanLessThan(-9, -8, 7)