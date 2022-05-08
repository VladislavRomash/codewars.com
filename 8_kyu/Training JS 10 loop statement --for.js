function pickIt(arr) {
    let a = []
    let b = []
    for (let result of arr) {
        if (result % 2 !== 0) {
            a.push(result)
        }
        if (result % 2 === 0) {
            b.push(result)
        }
    }
    return [a, b]
}

pickIt([1, 2])
pickIt([11, 21, 31])