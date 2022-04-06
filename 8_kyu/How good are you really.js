function betterThanAverage(classPoints, yourPoints) {
    let averageValue = classPoints.reduce((a, b) => (a + b)) / classPoints.length
    return yourPoints > averageValue
}
