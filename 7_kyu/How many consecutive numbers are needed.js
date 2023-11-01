function consecutive(array) {
    const sort = [...array].sort((a, b) => a - b)
    const result = []
    for (let i = sort[0]; i < sort[sort.length - 1] + 1; i++) {
        result.push(i)
    }
    return result.length - sort.length
}


consecutive([4, 8, 6])
consecutive([-1, -5])
consecutive([-37, -25, -11, -28, -16, -56, -2, -4])