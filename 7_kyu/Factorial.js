function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
    return n > 1 ? n * factorial(n - 1) : 1;
}

factorial(0)
factorial(1)
factorial(2)
factorial(3)
factorial(5)