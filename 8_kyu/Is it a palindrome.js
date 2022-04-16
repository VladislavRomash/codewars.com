function isPalindrome(x) {
    let arr = x.split('')
    return arr.join('').toLowerCase() === arr.reverse().join('').toLowerCase()
}

isPalindrome("aba")
isPalindrome("hello")
isPalindrome("AbBa")
isPalindrome("Madam")
