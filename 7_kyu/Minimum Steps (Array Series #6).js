function minimumSteps(numbers, value) {
    const sortNumbers = [...numbers].sort((a, b) => a - b)
    return sortNumbers.filter(f => (value -= f) > 0).length
}


minimumSteps([4, 6, 3], 7)
minimumSteps([10, 9, 9, 8], 17)
minimumSteps([8, 9, 10, 4, 2], 23)