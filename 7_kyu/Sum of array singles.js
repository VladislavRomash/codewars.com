function repeats(arr) {
    const sortArr = arr.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < sortArr.length; i += 2) {
        if (sortArr[i] !== sortArr[i + 1]) {
            sum += sortArr[i]
            i--
        }
    }
    return sum
}

repeats([4, 5, 7, 5, 4, 8])
repeats([9, 10, 19, 13, 19, 13])


const repeatsWithFilter = (arr) => {
    return arr.filter(f => arr.indexOf(f) === arr.lastIndexOf(f)).reduce((acc, el) => acc + el)
}


repeatsWithFilter([16, 0, 11, 4, 8, 16, 0, 11])
repeatsWithFilter([5, 17, 18, 11, 13, 18, 11, 13])