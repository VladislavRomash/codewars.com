function pointsPer48(ppg, mpg) {
    return mpg > 0 ? +((ppg / mpg * 48).toFixed(1)) : 0
}

pointsPer48(10, 10)
pointsPer48(12, 20)