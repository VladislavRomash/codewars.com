function vaporcode(string) {
    return string.toUpperCase().replace(/[' ']/g, '').split('').join('  ')
}


vaporcode("Lets go to the movies")
vaporcode("Why isnt my code working")