function numberToPower(number, power) {
    let result = number
    for (let i = 1; i < power; i++) {
        result *= number
    }
    return power !== 0 ? result : 1
}

numberToPower(4, 2)
numberToPower(10, 4)
numberToPower(10, 0)