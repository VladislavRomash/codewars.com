function stray(numbers) {
    return numbers.reduce((a, b) => a ^ b)
}


stray([1, 1, 2])
stray([17, 17, 3, 17, 17, 17, 17])