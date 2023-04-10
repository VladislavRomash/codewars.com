function countLettersAndDigits(input) {
    return input.match(/[0-9a-z]/gi) === null ? 0 : input.match(/[0-9a-z]/gi).length
}

countLettersAndDigits("hel2!lo")
countLettersAndDigits("n!!_ice!!123")
countLettersAndDigits("1")
countLettersAndDigits("?")