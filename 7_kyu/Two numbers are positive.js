function twoArePositive(a, b, c) {
    return [...arguments].filter(f => f > 0).length === 2
}


twoArePositive(2, 4, -3)
twoArePositive(4, 6, 10)