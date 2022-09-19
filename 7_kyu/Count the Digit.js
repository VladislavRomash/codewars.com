function nbDig(n, d) {
    let res = ''
    for (let i = 0; i <= n; i++) {
        res += Math.pow(i, 2)
    }
    return res.split(d).length - 1
}


nbDig(10, 1)
nbDig(25, 1)
nbDig(5750, 0)
nbDig(11011, 2)
nbDig(12224, 8)


