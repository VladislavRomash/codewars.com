function pairs(ar) {
    let count = 0
    for (let i = 0; i < ar.length; i++) {
        if (i % 2 === 0) {
            if (ar[i + 1] - ar[i] === 1 || ar[i] - ar[i + 1] === 1) {
                count++
            }
        }
    }
    return count
}


pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])
pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94])
pairs([81, 44, 80, 26, 12, 27, -34, 37, -35])