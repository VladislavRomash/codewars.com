function hasUniqueChars(str) {
    return new Set(str).size === str.length
}


hasUniqueChars("  nAa")
hasUniqueChars("abcdef")
hasUniqueChars("aA")
hasUniqueChars("++-")