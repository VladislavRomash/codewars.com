function calculator(a, b, sign) {
    if (a === String(a) || b === String(b)) return "unknown value"
    switch (sign) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            return a / b
        default:
            return "unknown value"
    }
}

calculator(1, 2, "+")
calculator(1, 2, "-")
calculator(3, 5, "*")
calculator(6, 2, "$")
calculator(6, "h", "*")