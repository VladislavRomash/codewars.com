function whatNumberIsIt(n) {
    if (n === Infinity) return 'Input number is Number.POSITIVE_INFINITY'
    if (n === -Infinity) return 'Input number is Number.NEGATIVE_INFINITY'
    if (isNaN(n)) return 'Input number is Number.NaN'
    if (n === 1.7976931348623157e+308) return 'Input number is Number.MAX_VALUE'
    if (n === 5e-324) return 'Input number is Number.MIN_VALUE'
    else return `Input number is ${n}`
}

whatNumberIsIt(1.7976931348623157e+308)
whatNumberIsIt(NaN)
whatNumberIsIt(1 / 0)
whatNumberIsIt(-Number.MAX_VALUE * 2)
whatNumberIsIt(100)