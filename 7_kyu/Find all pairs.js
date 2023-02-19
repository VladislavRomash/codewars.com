function duplicates(array) {
    const sortedArr = array.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            count++
            sortedArr[i] = ''
            sortedArr[i + 1] = ''
        }
    }
    return count
}


duplicates([1, 2, 5, 6, 5, 2])
duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])
duplicates([0, 0, 0, 0, 0, 0, 0])
duplicates([])
duplicates([54])