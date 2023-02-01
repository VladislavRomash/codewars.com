function swap(string) {
    return string.split('').map(m => m === 'a' || m === 'e' || m === 'i' || m === 'o' || m === 'u' ? m.toUpperCase() : m).join('')
}

function swap(string) {
    return string.replace(/[aeiou]/g, r => r.toUpperCase())
}

swap("HelloWorld!")
swap("Sunday!")
swap("Codewars!")
swap("Monday!")