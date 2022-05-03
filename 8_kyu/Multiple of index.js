function multipleOfIndex(array) {
    return array.filter((f, i) => f % i === 0)
}

multipleOfIndex([22, -6, 32, 82, 9, 25])
multipleOfIndex([68, -1, 1, -7, 10, 10])
multipleOfIndex([11, -11])