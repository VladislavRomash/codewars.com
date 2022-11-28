function disariumNumber(n) {
    return n === String(n).split('').map((m, i) => Math.pow(m, i + 1)).reduce((acc, el) => acc + el) ? 'Disarium !!' : 'Not !!'
}

disariumNumber(89)
disariumNumber(564)