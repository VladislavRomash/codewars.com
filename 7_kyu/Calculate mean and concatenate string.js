function mean(lst) {
    const sum = lst.map(m => Number(m.replace(/[a-z]/gi, ''))).reduce((a, b) => a + b) / 10
    const str = lst.map(m => m.replace(/[^a-z]/gi, '')).join('')
    return [sum, str]
}

mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"])