function spoonerize(words) {
    const arr = words.split(' ')
    const firstLetter = arr.map(m => m[0])
    const otherLetters = arr.map(m => m.slice(1))
    return [firstLetter[1].concat(otherLetters[0]), firstLetter[0].concat(otherLetters[1])].join(' ')
}


spoonerize("nit picking")
spoonerize("wedding bells")
spoonerize("jelly beans")