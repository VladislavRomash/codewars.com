function scale(strng, k, n) {
    return strng.split('\n').map(m => m.split('').map(el => el.repeat(k)).join('')).map(m => (m + ' ').repeat(n).trim().replace(/ /g, '\n')).join('\n')
}

scale('abcd\nefgh\nijkl\nmnop', 2, 3)