function maxGap(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b)
    let distinction = []
    for (let i = 0; i < sorted.length - 1; i++) {
        distinction.push(sorted[i + 1] - sorted[i])
    }
    return Math.max(...distinction)
}


maxGap([13, 10, 2, 9, 5])
maxGap([13, 3, 5])
maxGap([24, 299, 131, 14, 26, 25])