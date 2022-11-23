function maxProduct(numbers, size) {
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((a, b) => a * b)
}


maxProduct([4, 3, 5], 2)
maxProduct([10, 8, 7, 9], 3)
maxProduct([8, 6, 4, 6], 3)