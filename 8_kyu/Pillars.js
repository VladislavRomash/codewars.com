function pillars(num_pill, dist, width) {
    const changeToCentim = dist * 100
    const sumDist = (changeToCentim * (num_pill - 1)) + (num_pill * width)
    const result = sumDist - (width * 2)
    return num_pill > 1 ? result : 0
}

pillars(1, 10, 10)
pillars(2, 20, 25)