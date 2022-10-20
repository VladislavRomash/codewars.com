function sumCubes(n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(Math.pow(i, 3))
    }
    return arr.reduce((acc, el) => acc + el, 0)
}

sumCubes(2)
sumCubes(3)
