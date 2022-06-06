function quadratic(x1, x2) {
    const b = -(x1 + x2)
    const c = x1 * x2
    return [1, b, c]
}

quadratic(0, 1)
quadratic(-4, -9)