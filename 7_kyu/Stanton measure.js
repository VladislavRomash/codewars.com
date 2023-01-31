const stantonMeasure = (arr) => {
    const countOne = arr.filter(f => f === 1).length
    return arr.filter(f => f === countOne).length
}

stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])
stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1])