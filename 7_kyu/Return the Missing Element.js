function getMissingElement(superImportantArray) {
    const sortedArr = [...superImportantArray].sort((a, b) => a - b)
    let missingNum = 0
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === sortedArr[i]) {
            missingNum++
        }
    }
    return missingNum
}

function getMissingElement(superImportantArray) {
    for (let i = 0; i < 10; i++) {
        if (superImportantArray.indexOf(i) === -1) return i;
    }
}

getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])
getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])