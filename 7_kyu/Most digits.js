function findLongest(array) {
    const arrLength = array.map(m => m.toString().length)
    const findMaxLength = Math.max(...arrLength)
    const findIndex = arrLength.findIndex(f => f === findMaxLength)
    return +(array.filter((f, i) => i === findIndex))
}


findLongest([1, 10, 100])
findLongest([9000, 8, 800])
findLongest([8, 900, 500])
findLongest([8, 500, 900])