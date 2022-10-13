function minSum(arr) {
    let newArr = []
    const sort = arr.sort((a, b) => a - b)
    const minValue = sort.slice(0, sort.length / 2)
    const maxValue = sort.slice(sort.length / 2).sort((a, b) => b - a)
    for (let i = 0; i < maxValue.length; i++) {
        newArr.push(minValue[i] * maxValue[i])
    }
    return newArr.reduce((a, b) => a + b)
}


minSum([5, 4, 2, 3])
minSum([12, 6, 10, 26, 3, 24])
minSum([9, 2, 8, 7, 5, 4, 0, 6])