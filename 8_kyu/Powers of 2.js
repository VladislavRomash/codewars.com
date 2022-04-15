function powersOfTwo(n) {
    let arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }
    return arr.map(m => 2 ** m)
}

powersOfTwo(0)
powersOfTwo(1)
powersOfTwo(4)