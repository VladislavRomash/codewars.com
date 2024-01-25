function duplicates(arr) {
    return [...new Set(arr.filter((f, i) => i !== arr.indexOf(f)))];
}

duplicates([1, 2, 3, 4, 5])
duplicates([1, 2, 3, 3, 2, 1])
duplicates(['1', 2, 3, 3, '2', 1])