function digitize(n) {
    return String(n).split('').map(m => Number(m))
}

digitize(123)
digitize(1)
digitize(8675309)


