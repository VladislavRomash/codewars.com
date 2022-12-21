function houseNumbersSum(inputArray) {
    return inputArray.slice(0, inputArray.indexOf(0)).reduce((acc, el) => acc + el, 0)
}

houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])
houseNumbersSum([4, 2, 1, 6, 0])
houseNumbersSum([4, 1, 2, 3, 0, 10, 2])
houseNumbersSum([0, 1, 2, 3, 4, 5])