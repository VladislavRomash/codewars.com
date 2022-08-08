function addExtra(listOfNumbers) {
    return [...listOfNumbers, listOfNumbers.length + 1]
}

addExtra([1, 2, 3]).length
addExtra([1, 2]).length
addExtra([]).length