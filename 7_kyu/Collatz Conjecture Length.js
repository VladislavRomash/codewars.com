function collatz(n) {
    let num = 1
    while (n > 1) {
        num++
        n = n % 2 === 0 ? n / 2 : n * 3 + 1
    }
    return num
}

collatz(20)
collatz(15)