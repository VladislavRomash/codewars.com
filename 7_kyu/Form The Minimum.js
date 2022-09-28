function minValue(values) {
    return +([...new Set(values)].sort().join(''))
}


minValue([1, 3, 1])
minValue([4, 7, 5, 7])
minValue([4, 8, 1, 4])
minValue([5, 6, 9, 9, 7, 6, 4])