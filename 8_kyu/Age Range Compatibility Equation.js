function datingRange(age) {
    let min = 0
    let max = 0
    if (age <= 14) {
        min = age - (0.10 * age)
        max = age + (0.10 * age)
    }
    if (age > 14) {
        min = (age / 2) + 7
        max = (age - 7) * 2
    }
    return `${Math.trunc(min)}-${Math.trunc(max)}`
}


datingRange(5)
datingRange(17)
datingRange(40)