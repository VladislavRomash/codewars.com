function averages(numbers) {
    return numbers
        ? numbers.map((m, i) => m === null ? [] : (numbers[i] + numbers[i + 1]) / 2).slice(0, -1)
        : []
}

averages([2, 2, 2, 2, 2])
averages([2, -2, 2, -2, 2])
averages([1, 3, 5, 1, -10])
averages([1, 3, 5, 1, -10])