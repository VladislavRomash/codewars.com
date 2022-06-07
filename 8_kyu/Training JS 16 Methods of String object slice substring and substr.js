function cutIt(arr) {
    const arrayLength = arr.map(m => m.length).sort((a, b) => a - b)
    const minLength = arrayLength[0]
    return arr.map(m => m.slice(0, minLength))
}

cutIt(["ab", "cde", "fgh"])
cutIt(["abc", "defgh", "ijklmn"])
cutIt(["codewars", "javascript", "java"])