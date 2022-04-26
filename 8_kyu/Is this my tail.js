function correctTail(bod, tail) {
    return bod.slice(bod.length - 1) === tail
}

correctTail("Fox", "x")
correctTail("Rhino", "o")
correctTail("Meerkat", "t")