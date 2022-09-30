function removeDuplicateWords(s) {
    const arr = s.split(' ')
    return [...new Set(arr)].join(' ')
}


removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')