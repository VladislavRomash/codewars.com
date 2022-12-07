function solution(value) {
    const zero = '0'.repeat(5 - value.toString().length)
    return `Value is ${zero}${value}`
}


solution(5)
solution(1204)
solution(109)