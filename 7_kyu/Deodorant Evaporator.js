function evaporator(content, evap_per_day, threshold) {
    let result = 0
    let maxPercent = 100
    while (maxPercent > threshold) {
        maxPercent = maxPercent - maxPercent * (evap_per_day / 100)
        result += 1
    }
    return result
}


evaporator(10, 10, 10)
evaporator(10, 10, 5)