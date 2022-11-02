function sumEvenNumbers(input) {
    return input.length !== 0 ? input.filter(f => f % 2 === 0).reduce((acc, el) => acc + el) : []
}


sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8])