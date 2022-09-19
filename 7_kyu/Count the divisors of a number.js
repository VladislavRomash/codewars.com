function getDivisorsCnt(n) {
    let res = 0
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            res++
        }
    }
    return res
}


getDivisorsCnt(1)
getDivisorsCnt(10)
getDivisorsCnt(11)