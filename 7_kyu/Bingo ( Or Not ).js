function bingo(a) {
    const alphabet = ["0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const arrOfLetters = a.map((m, i) => alphabet[a[i]])
    return [...new Set(arrOfLetters.filter(f => f === 'B' || f === 'I' || f === 'N' || f === 'G' || f === 'O'))].length === 5 ? 'WIN' : 'LOSE'
}

const bingo = (arr) => [2, 7, 9, 14, 15].every(e => arr.includes(e)) ? 'WIN' : 'LOSE'


bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])