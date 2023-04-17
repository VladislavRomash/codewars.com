function dotCalculator(equation) {
    const [one, operator, two] = equation.split(' ')
    const obj = {
        '+': (a, b) => a + b,
        '*': (a, b) => a * b,
        '-': (a, b) => a - b,
        '//': (a, b) => a / b,
    }

    return '.'.repeat(obj[operator](one.length, two.length))
}


dotCalculator("..... + ...............")
dotCalculator("..... * ...")
dotCalculator("..... - .")
dotCalculator(". // ..")