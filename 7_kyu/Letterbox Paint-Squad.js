const paintLetterboxes = function (start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    const fullArr = arr.map(m => String(m).split('')).flat().sort((a, b) => a - b)
    const count = '0123456789'
    let resultArr = []
    for (let i = 0; i < count.length; i++) {
        resultArr.push(fullArr.filter(f => f === count[i]).length)
    }
    return resultArr.slice(0, count.length)
}


paintLetterboxes(125, 132)
paintLetterboxes(514, 514)