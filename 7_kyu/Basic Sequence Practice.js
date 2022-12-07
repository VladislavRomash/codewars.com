function sumOfN(n) {
    let arr = []
    let count = 0
    for (let i = 0; i <= Math.abs(n); i++) {
        arr.push(count += i)
    }
    return n > 0 ? arr : arr.map(m => m === 0 ? m : -m)
}


sumOfN(3)
sumOfN(-4)
sumOfN(1)
sumOfN(-6)
sumOfN(7)