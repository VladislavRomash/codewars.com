function last(x) {
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}


last('man i need a taxi up to ubud')
last('what time are we climbing up the volcano')