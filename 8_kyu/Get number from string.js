function getNumberFromString(s) {
    return +(s.match(/\d/g).join(''))
}

getNumberFromString("1")
getNumberFromString("this is number: 7")
getNumberFromString("hell5o wor6ld")