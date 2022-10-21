function addLetters(...letters) {
    const en = 'abcdefghijklmnopqrstuvwxyz';
    let sum = 25
    for (const letter of letters) {
        sum += en.indexOf(letter) + 1
    }
    return en[sum % 26]
}

