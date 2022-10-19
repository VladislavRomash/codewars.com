function sortGiftCode(code) {
    return code.toLowerCase().split('').sort().join('')
}


sortGiftCode('abcdef')
sortGiftCode('pqksuvy')
sortGiftCode('zyxwvutsrqponmlkjihgfedcba')