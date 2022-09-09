function getSum(a, b) {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}

getSum(0, -1)
getSum(0, 1)
getSum(-1, 2)
getSum(427, -88)