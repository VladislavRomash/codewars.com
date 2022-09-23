function maxMultiple(divisor, bound) {
    let arr = []
    for (let i = 0; i <= bound; i++) {
        if (i % divisor === 0) {
            arr.push(i)
        }
    }
    return Math.max.apply(null, arr)
}


maxMultiple(2, 7)
maxMultiple(3, 10)
maxMultiple(7, 17)
maxMultiple(10, 50)