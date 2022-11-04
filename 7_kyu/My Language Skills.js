function myLanguages(results) {
    let arr = []
    for (const key in results) {
        if (results[key] >= 60) {
            arr.push(key)
        }
    }
    return arr.sort((a, b) => results[b] - results[a])
}


myLanguages({"Java": 10, "Ruby": 80, "Python": 65})
myLanguages({"Hindi": 60, "Greek": 71, "Dutch": 93})
myLanguages({"C++": 50, "ASM": 10, "Haskell": 20})