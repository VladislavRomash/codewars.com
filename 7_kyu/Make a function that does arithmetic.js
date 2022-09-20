function arithmetic(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b
        case 'subtract':
            return a - b
        case 'multiply':
            return a * b
        case 'divide':
            return a / b
    }
}

arithmetic(1, 2, "add")
arithmetic(8, 2, "subtract")
arithmetic(5, 2, "multiply")