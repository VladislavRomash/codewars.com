function integrate(coefficient, exponent) {
    return `${coefficient / (exponent + 1)}x^${exponent + 1}`
}

integrate(3, 2)
integrate(12, 5)