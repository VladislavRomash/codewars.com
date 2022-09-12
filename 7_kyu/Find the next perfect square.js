function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq)
    return sqrt % 1 !== 0 ? -1 : Math.pow(sqrt + 1, 2);
}


findNextSquare(121)
findNextSquare(625)
findNextSquare(155)