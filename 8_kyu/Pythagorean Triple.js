function isPythagoreanTriple(integers) {
    const sort = integers.sort((a, b) => b - a)
    return sort[0] === Math.sqrt(Math.pow(sort[1], 2) + Math.pow(sort[2], 2))
}

isPythagoreanTriple([3, 4, 5])
isPythagoreanTriple([3, 5, 9])
isPythagoreanTriple([3720, 4216, 1984])
