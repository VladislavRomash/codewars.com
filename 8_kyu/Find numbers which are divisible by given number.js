function divisibleBy(numbers, divisor) {
    return numbers.filter((f, i) => f % divisor === 0)
}