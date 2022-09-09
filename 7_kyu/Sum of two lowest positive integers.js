function sumTwoSmallestNumbers(numbers) {
    const sort = numbers.sort((a, b) => a - b)
    return sort[0] + sort[1]
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])
sumTwoSmallestNumbers([15, 28, 4, 2, 43])
sumTwoSmallestNumbers([3, 87, 45, 12, 7])