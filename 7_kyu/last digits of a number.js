function lastDigit(n, d) {
    const arr = String(n).split('').map(m => Number(m))
    if (d > arr.length) return arr
    if (d <= 0) return []
    else return arr.slice(arr.length - d)
}

lastDigit(1, 1)
lastDigit(34625647867585, 10)
lastDigit(1343, 5) // [1,3,4,3]
lastDigit(24134, -4) // []