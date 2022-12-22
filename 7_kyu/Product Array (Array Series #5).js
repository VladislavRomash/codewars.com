function productArray(numbers) {
    return numbers.map(m => numbers.reduce((acc, el) => acc * el) / m)
}


productArray([12, 20])
productArray([3, 27, 4, 2])
productArray([13, 10, 5, 2, 9])
productArray([16, 17, 4, 3, 5, 2])