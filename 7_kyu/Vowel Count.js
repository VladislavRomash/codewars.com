function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

getCount("abracadabra")
getCount('my pyx')