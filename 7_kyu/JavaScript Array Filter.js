function getEvenNumbers(numbersArray) {
    return numbersArray.filter(f => f % 2 === 0)
}


getEvenNumbers([2, 4, 5, 6])
getEvenNumbers([1, 2, 3, 6, 8, 10])
getEvenNumbers([1, 2])
getEvenNumbers([12, 14, 15])