function sortByLength(array) {
    return array.sort((a, b) => a.length < b.length ? -1 : 1)
}

sortByLength(["Beg", "Life", "I", "To"])
sortByLength(["", "Moderately", "Brains", "Pizza"])