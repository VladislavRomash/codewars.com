const findAll = (array, n) => {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            arr.push(i)
        }
    }
    return arr
}


const findAll = (array, n) => {
    return array.map((m, i) => m === n ? i : '').filter(f => f !== '')
}

findAll([6, 9, 3, 4, 3, 82, 11], 3)
findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16)
findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20)