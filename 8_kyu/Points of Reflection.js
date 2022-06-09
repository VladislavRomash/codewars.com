function symmetricPoint(p, q) {
    const x = 2 * q[0] - p[0]
    const y = 2 * q[1] - p[1]
    return [x, y]
}

symmetricPoint([0, 0], [1, 1])
symmetricPoint([2, 6], [-2, -6])