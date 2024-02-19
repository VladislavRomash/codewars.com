function isFlush(cards) {
    return cards.every(e => e[e.length - 1] === cards[0][cards[0].length - 1])
}

isFlush(["AS", "3S", "9S", "KS", "4S"])
isFlush(["AD", "4S", "7H", "KC", "5S"])
isFlush(["10D", "4D", "QD", "KD", "5D"])