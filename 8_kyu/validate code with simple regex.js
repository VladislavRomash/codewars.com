function validateCode(code) {
    return code.toString().startsWith('1') || code.toString().startsWith('2') || code.toString().startsWith('3')
}

validateCode(123)
validateCode(8)