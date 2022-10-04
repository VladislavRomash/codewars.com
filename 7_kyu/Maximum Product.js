function adjacentElementsProduct(array) {
    let arr = []
    for (let i = 0; i < array.length - 1; i++) {
        arr.push(array[i] * array[i + 1])
    }
    return Math.max.apply(null, arr)
}


adjacentElementsProduct([5, 8])
adjacentElementsProduct([1, 2, 3])
adjacentElementsProduct([1, 5, 10, 9])