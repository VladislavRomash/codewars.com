function reverseWords(str) {
    return str.split(' ').map(m => m.split('').reverse().join('')).join(' ')
}


reverseWords('The quick brown fox jumps over the lazy dog.')
reverseWords('apple')