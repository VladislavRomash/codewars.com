function numberJoy(n) {
    const sum = String(n).split('').reduce((acc, el) => Number(acc) + Number(el), 0)
    const reversedSum = Number(String(sum).split('').reverse().join(''))
    return sum * reversedSum === n
}

numberJoy(1997)
numberJoy(1998)
numberJoy(1729)