function capitalize(s) {
    const s1 = s.split('').map((m, i) => i % 2 === 0 ? m.toUpperCase() : m.toLowerCase()).join('')
    const s2 = s.split('').map((m, i) => i % 2 === 0 ? m.toLowerCase() : m.toUpperCase()).join('')
    return [s1, s2]
}


capitalize("abcdef")
capitalize("codewars")
capitalize("abracadabra")
capitalize("codewarriors")