function isNice(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)) {
            newArr.push(arr[i])
        }
    }
    return arr.length !== 0 && arr.length === newArr.length
}

function isNice(arr) {
    return !!arr.length && arr.every(x => arr.some(y => y === x - 1 || y === x + 1))
}

isNice([2, 10, 9, 3])
isNice([3, 4, 5, 7])