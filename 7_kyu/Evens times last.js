function evenLast(numbers) {
    let sum = numbers.filter((f, i) => i % 2 === 0).reduce((acc, el) => acc + el, 0)
    return numbers.length !== 0 ? sum * numbers[numbers.length - 1] : 0
}


evenLast([2, 3, 4, 5])