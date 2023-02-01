function longestWord(stringOfWords) {
    const arr = stringOfWords.split(' ').sort((a, b) => a.length - b.length)
    return arr[arr.length - 1]
}


longestWord('a b c d e fgh')
longestWord('one two three')
longestWord('red blue grey')