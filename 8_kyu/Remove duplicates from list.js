function distinct(a) {
    return a.filter((f, i, arr) => arr.indexOf(f) === i)
}

distinct([1])
distinct([1, 2])
distinct([1, 1, 2])