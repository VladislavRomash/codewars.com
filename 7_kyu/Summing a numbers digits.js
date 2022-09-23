function sumDigits(number) {
    return Math.abs(number).toString().split("").reduce((a, b) => a + Number(b), 0)
}


sumDigits(10)
sumDigits(99)
sumDigits(-32)