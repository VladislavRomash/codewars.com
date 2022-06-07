function splitAndMerge(string, separator) {
    return string.split(' ').map(m => m.split('').join(separator)).join(' ')
}

splitAndMerge("My name is John", " ")
splitAndMerge("My name is John", "-")
splitAndMerge("Hello World!", ".")