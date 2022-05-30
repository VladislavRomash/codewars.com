function logicalCalc(array, op) {
    if (op === 'AND') return array.reduce((a, b) => a && b)
    if (op === 'OR') return array.reduce((a, b) => a || b)
    if (op === 'XOR') return array.reduce((a, b) => a !== b)
}


logicalCalc([true, true, true, false], "AND")
logicalCalc([true, true, true, false], "OR")
logicalCalc([true, true, true, false], "XOR")