function average(scores) {
    return Math.round(scores.reduce((acc, el) => acc + el) / scores.length)
}


average([49, 3, 5, 300, 7])
average([90, 98, 89, 100, 100, 86, 94])