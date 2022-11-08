function menFromBoys(arr) {
    const boys = arr.filter(f => !(f % 2)).sort((a, b) => a - b)
    const men = arr.filter(f => f % 2).sort((a, b) => b - a)
    return [...new Set([...boys, ...men])]
}


menFromBoys([7, 3, 14, 17])
menFromBoys([2, 43, 95, 90, 37])
menFromBoys([20, 33, 50, 34, 43, 46])