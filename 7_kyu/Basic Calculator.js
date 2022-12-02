function calculate(num1, operation, num2) {
    switch (operation) {
        case '+' :
            return num1 + num2
        case '-' :
            return num1 - num2
        case '*' :
            return num1 * num2
        case '/' :
            return num1 !== 0 && num2 !== 0 ? num1 / num2 : null
        default:
            return null
    }
}

calculate(3.2, '+', 8)
calculate(3.2, "*", 8)
calculate(-3, "/", 0)
calculate(-3, "w", 0)