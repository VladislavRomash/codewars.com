function solve(n) {
    const banknotes = [500, 200, 100, 50, 20, 10]
    let count = 0
    for (let i = 0; i < banknotes.length; i++) {
        let temp = banknotes[i]
        if (n % 10 === 0) {
            while (n - temp >= 0) {
                n -= temp
                count++
            }
        } else return -1
    }
    return count
}


solve(770)
solve(125)