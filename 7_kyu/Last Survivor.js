function lastSurvivor(letters, coords) {
    const arr = letters.split('')
    for (let i = 0; i < coords.length; i++) {
        arr.splice(coords[i], 1)
    }
    return arr.join('')
}


lastSurvivor('abc', [1, 1]) // a
lastSurvivor('kbc', [0, 1]) // b
lastSurvivor('zbk', [2, 1]) // z
lastSurvivor('c', []) // c