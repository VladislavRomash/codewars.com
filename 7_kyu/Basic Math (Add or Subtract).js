function calculate(str) {
    return String(eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')))
}

function calculate(str) {
    return `${str.replace(/plus/g, ` `).replace(/minus/g, ` -`).split(` `).reduce((pre, val) => pre + +val, 0)}`
}

calculate('1minus2minus3minus4')
calculate('1plus2plus3minus4')
calculate('1plus22plus35minus40')