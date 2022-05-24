function closeCompare(a, b, margin = 0) {
    return Math.abs(a - b) <= margin ? 0 : Math.sign(a - b)
}

closeCompare(2, 5, 3)
closeCompare(8.1, 5, 3)
closeCompare(1.99, 5, 3)
closeCompare(4, 5)
closeCompare(5, 5)