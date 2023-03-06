function largest(n, array) {
    return [...array].sort((a, b) => b - a).slice(0, n).reverse()
}

largest(2, [7, 6, 5, 4, 3, 2, 1])
largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])
