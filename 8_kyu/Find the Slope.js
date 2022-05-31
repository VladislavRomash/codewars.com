function slope(points) {
    const x = points[2] - points[0]
    const y = points[3] - points[1]
    const result = y / x
    return isFinite(result) ? `${result}` : 'undefined'
}

slope([19, 3, 20, 3])
slope([2, 7, 4, -7])
slope([-10, 6, -10, 3])