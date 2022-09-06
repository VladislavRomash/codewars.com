function highAndLow(numbers) {
    const sort = numbers.split(' ').sort((a, b) => b - a)
    return `${sort[0]} ${sort[sort.length - 1]}`
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
highAndLow("1 2 3")



