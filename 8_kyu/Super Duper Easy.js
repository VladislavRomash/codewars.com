function problem(x) {
    return x === x.toString() ? 'Error' : (x * 50) + 6
}

problem("hello")
problem(1)
problem(1.2)
problem(3)