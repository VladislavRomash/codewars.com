const hotpo = function (n) {
    let count = 0
    while (1 < n) {
        n = n % 2 ? 3 * n + 1 : n / 2
        count++
    }
    return count
}


hotpo(1)
hotpo(5)