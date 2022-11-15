function removeRotten(bagOfFruits) {
    return bagOfFruits === null || bagOfFruits === undefined ? [] : bagOfFruits.map(m => m.startsWith('rotten') ? m.replace(/rotten/gi, '').toLowerCase() : m)
}


removeRotten(["apple", "rottenBanana", "apple"])
removeRotten(["apple", "banana", "kiwi", "melon", "orange"])
removeRotten([])
removeRotten(null)