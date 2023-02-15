Array.prototype.numberOfOccurrences = function (n) {
    return this.filter((value) => value === n).length
}

const arr = [0, 1, 2, 2, 3]

arr.slice().numberOfOccurrences(0)
arr.slice().numberOfOccurrences(4)
arr.slice().numberOfOccurrences(2)
arr.slice().numberOfOccurrences(3)


const testFn = (array, num) => {
    const newArray = [...new Set(array)]
    let arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array.filter(f => f === newArray[i]).length)
    }
    return arr[newArray.indexOf(num)] || 0
}


testFn([0, 1, 2, 2, 3], 2)
testFn([0, 4, 2, 2, 3], 4)
testFn([0, 4, 2, 2, 3], 5)
testFn([19, 22, 18, 19, 16, 18, 19, 21, 24], 19)