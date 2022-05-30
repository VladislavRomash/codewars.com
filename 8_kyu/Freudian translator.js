function toFreud(string) {
    const arr = string.split(' ')
    const arrLength = arr.length
    return string !== '' ? 'sex '.repeat(arrLength).trim() : ''
}


/*function toFreud(string) {
    const arr = string.split(' ')
    return string !== '' ? arr.map(m => 'sex').join(' ') : ''
}*/

toFreud("This is a test")
toFreud("You're becoming a true freudian expert")