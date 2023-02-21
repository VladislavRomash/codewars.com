String.prototype.vowel = function () {
    switch (this.toLowerCase()) {
        case 'a':
            return true
        case 'e':
            return true
        case 'i':
            return true
        case 'o':
            return true
        case 'u':
            return true
    }
    return false
}

String.prototype.vowel = function () {
    return /^[aeiou]$/i.test(this)
}

''.vowel()
'a'.vowel()
'E'.vowel()
'ou'.vowel()