function vowel2index(str) {
    return str.split('').map((m, i) => m.toLowerCase() === 'a'
    || m.toLowerCase() === 'e'
    || m.toLowerCase() === 'i'
    || m.toLowerCase() === 'o'
    || m.toLowerCase() === 'u' ? i + 1 : m).join('')
}


vowel2index('this is my string')
vowel2index('Codewars is the best site in the world')
vowel2index('Tomorrow is going to be raining')