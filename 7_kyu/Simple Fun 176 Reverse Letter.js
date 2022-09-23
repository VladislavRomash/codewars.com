function reverseLetter(str) {
    return str.split('').reverse().join('').replace(/[^a-z]/gi, '')
}


reverseLetter("krishan")
reverseLetter("ultr53o?n")
reverseLetter("ab23c")
reverseLetter("krish21an")