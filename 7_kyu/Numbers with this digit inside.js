function numbersWithDigitInside(x, d) {
    let arr = []
    for (let i = 1; i <= x; i++) {
        arr.push(i)
    }
    const filteredArr = arr.filter(f => String(f).includes(String(d)))
    const count = filteredArr.length
    const sum = filteredArr.reduce((acc, el) => acc + el, 0)
    const mul = filteredArr.length > 0 ? filteredArr.reduce((acc, el) => acc * el, 1) : [].length
    return [count, sum, mul]
}


numbersWithDigitInside(5, 6)
numbersWithDigitInside(7, 6)
numbersWithDigitInside(11, 1)
numbersWithDigitInside(20, 0)
numbersWithDigitInside(44, 4)