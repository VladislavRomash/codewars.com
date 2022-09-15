function removeSmallest(numbers) {
    const index = numbers.indexOf(Math.min(...numbers))
    return numbers.filter((f, i) => i !== index)
}

removeSmallest([1, 2, 3, 4, 5])
removeSmallest([5, 3, 2, 1, 4])
removeSmallest([2, 2, 1, 2, 1])