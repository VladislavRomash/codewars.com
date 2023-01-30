function lostSheep(friday, saturday, total) {
    return total - [...friday, ...saturday].reduce((acc, el) => acc + el, 0)
}

lostSheep([1, 2, 3], [4, 5], 40)
lostSheep([], [], 10)