function isLucky(n) {
    return String(n).split('').reduce((acc, el) => Number(acc) + Number(el), 0) % 9 === 0 || n === 0
}

isLucky(1892376)
isLucky(189237)