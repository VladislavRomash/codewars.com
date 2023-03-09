function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(f => f.length > n)
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4)