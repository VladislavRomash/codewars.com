function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / ((normPrice * discount) / 100))
}

dutyFree(12, 50, 1000)
dutyFree(17, 10, 500)