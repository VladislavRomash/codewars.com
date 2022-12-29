function stringMerge(string1, string2, letter) {
    const first = string1.slice(0, string1.indexOf(letter))
    const second = string2.slice(string2.indexOf(letter))
    return `${first}${second}`
}

stringMerge("hello", "world", "l")
stringMerge("person", "here", "e")
stringMerge("apowiejfoiajsf", "iwahfeijouh", "j")
stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x")
