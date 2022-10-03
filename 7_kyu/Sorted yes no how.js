function isSortedAndHow(array) {
    const ascending = [...array].sort((a, b) => a - b).join('')
    const descending = [...array].sort((a, b) => b - a).join('')
    if (array.join('') === ascending) return `yes, ascending`
    if (array.join('') === descending) return `yes, descending`
    else return `no`
}


isSortedAndHow([1, 2])
isSortedAndHow([15, 7, 3, -8])
isSortedAndHow([4, 2, 30])