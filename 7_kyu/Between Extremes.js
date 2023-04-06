// function betweenExtremes(numbers) {
//     const sortedArr = [...numbers].sort((a, b) => a - b)
//     return sortedArr[sortedArr.length - 1] - sortedArr[0]
// }

function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers)
}

betweenExtremes([21, 34, 54, 43, 26, 12])
betweenExtremes([-1, -41, -77, -100])
