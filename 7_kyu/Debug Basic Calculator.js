const calculate = function calculate(a, o, b) {
    if (o === "+") return a + b
    if (o === "-") return a - b
    if (o === "/" && b !== 0) return a / b
    if (o === "*") return a * b;
    else return null;
}

calculate(2, "+", 4)
calculate(4, "/", 0)
calculate(8,"m", 2)