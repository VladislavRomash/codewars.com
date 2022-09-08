function findShort(s) {
    return s.split(' ').map(m => m.length).sort((a, b) => a - b)[0]
}

findShort("bitcoin take over the world maybe who knows perhaps")
findShort("turns out random test cases are easier than writing out basic ones")
findShort("Let's travel abroad shall we")