function nbYear(p0, percent, aug, p) {
    let totalYears = 0
    for (let i = 0; p0 < p; i++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug)
        totalYears++
    }
    return totalYears
}

nbYear(1500, 5, 100, 5000)
nbYear(1500000, 2.5, 10000, 2000000)
nbYear(1500000, 0.25, 1000, 2000000)