function eachCons(array, n) {
    return array.map((m, i) => array.slice(i, i + n)).filter(f => f.length === n)
}

eachCons([3, 5, 8, 13], 1)
eachCons([3, 5, 8, 13], 2)
eachCons([3, 5, 8, 13], 3)