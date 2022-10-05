function vowelIndices(word) {
    let onlyA = word.toLowerCase().replace(/[eiouy]/gi, 'a')
    let arr = []
    for (let i = 0; i < onlyA.length; i++) {
        if (onlyA[i] === 'a')
            arr.push(i + 1)
    }
    return arr
}


vowelIndices("mmm")
vowelIndices("apple")
vowelIndices("super")
vowelIndices("orange")
