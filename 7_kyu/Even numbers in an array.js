function evenNumbers(array, number) {
    return array.filter(f => f % 2 === 0).slice(-number)
}


evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)