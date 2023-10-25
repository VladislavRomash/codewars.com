function alternate(n, firstValue, secondValue) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return arr
}


alternate(5, true, false)
alternate(20, 'blue', 'red')