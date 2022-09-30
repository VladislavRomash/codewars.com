function rowWeights(array) {
    let first = array.filter((f, i) => i % 2 === 0).reduce((a, b) => a + b, 0)
    let second = array.filter((f, i) => i % 2 !== 0).reduce((a, b) => a + b, 0)
    return [first, second]
}

rowWeights([0])
rowWeights([80])
rowWeights([0, 1, 0])
rowWeights([100, 50])
rowWeights([50, 60, 70, 80])
rowWeights([13, 27, 49])