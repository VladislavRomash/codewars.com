function twoHighest(arr) {
    return [...new Set(arr.sort((a, b) => b - a))].slice(0, 2)
}

twoHighest([])
twoHighest([15])
twoHighest([15, 20, 20, 17])