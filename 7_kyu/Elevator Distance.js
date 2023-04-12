function elevatorDistance(array) {
    let arr = []
    for (let i = 0; i < array.length - 1; i++) {
        arr.push(array[i] - array[i + 1])
    }
    return arr.reduce((acc, el) => Math.abs(acc) + Math.abs(el))
}

elevatorDistance([5, 2, 8])
elevatorDistance([1, 2, 3])
elevatorDistance([7, 1, 7, 1])