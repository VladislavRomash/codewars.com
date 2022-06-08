function firstToLast(str, c) {
    const first = str.indexOf(c)
    const second = str.lastIndexOf(c)
    if (first < 0 && second < 0) return -1
    else if (first === second) return 0
    else return Math.abs(first - second)
}

firstToLast("ababc", "a")
firstToLast("ababc", "c")
firstToLast("ababc", "d")
firstToLast("hlkwwgblpbvpmxwlarscenolgsqnsdh", "n")