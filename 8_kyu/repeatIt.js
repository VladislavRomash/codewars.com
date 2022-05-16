let repeatIt = function (str, n) {
    return str === str.toString() ? str.repeat(n) : 'Not a string'
}

repeatIt("*", 3)
repeatIt("Hello", 11)