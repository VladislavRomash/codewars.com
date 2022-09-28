function inAscOrder(arr) {
    const arrSorted = [...arr].sort((a, b) => a - b).join('')
    return arrSorted === arr.join('')
}


inAscOrder([1, 2, 4, 7, 19])
inAscOrder([1, 2, 3, 4, 5])
inAscOrder([1, 6, 10, 18, 2, 4, 20])
inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])