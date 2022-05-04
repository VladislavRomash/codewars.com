function isPalindrome(line) {
    const str = line.toString()
    const middle = Math.floor(str.length / 2)
    for (let i = 0; i < middle; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

isPalindrome("anna")
isPalindrome("walter")
isPalindrome(12321)