function evalObject(value) {
    let result = 0;
    switch (value.operation) {
        case'+':
            result = value.a + value.b;
            break;
        case'-':
            result = value.a - value.b;
            break;
        case'/':
            result = value.a / value.b;
            break;
        case'*':
            result = value.a * value.b;
            break;
        case'%':
            result = value.a % value.b;
            break;
        case'^':
            result = Math.pow(value.a, value.b);
            break;
        default:
            return value
    }
    return result;
}

evalObject({a: 1, b: 1, operation: '+'})
evalObject({a: 1, b: 1, operation: '-'})