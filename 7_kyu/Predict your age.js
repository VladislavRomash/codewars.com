function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    const newArray = []
    newArray.push(age1, age2, age3, age4, age5, age6, age7, age8)
    return Math.floor(Math.sqrt(newArray.map(m => Math.pow(m, 2)).reduce((a, b) => a + b)) / 2)
}


predictAge(65, 60, 75, 55, 60, 63, 64, 45)