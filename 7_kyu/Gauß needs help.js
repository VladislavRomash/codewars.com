function f(n) {
    return n > 0 && Number.isInteger(n) ? (1 / 2) * n * (n + 1) : false;
}


f(100)
f(300)
f('n')