function sameCase(a, b) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (a === arr_en.find(f => f === a) && b === arr_en.find(f => f === b)) return 1
    if (a === arr_EN.find(f => f === a) && b === arr_EN.find(f => f === b)) return 1
    if (a === arr_EN.find(f => f === a) && b === arr_en.find(f => f === b)) return 0
    if (a === arr_en.find(f => f === a) && b === arr_EN.find(f => f === b)) return 0
    if (a !== arr_en.find(f => f === a) || a !== arr_EN.find(f => f === a) || b !== arr_en.find(f => f === b) || b !== arr_EN.find(f => f === b)) return -1
}

sameCase('C', 'B')
sameCase('b', 'a')
sameCase('A', 's')
sameCase('H', ':')