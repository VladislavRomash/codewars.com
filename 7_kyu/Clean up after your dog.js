function crap(x, bags, cap) {
    const arr = x.flat()
    const dog = arr.includes('D')
    const crap = arr.filter(f => f === '@').length
    return dog ? 'Dog!!' : crap <= cap * bags ? "Clean" : "Cr@p"
}


crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2)
crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1)
crap([['_', '_'], ['_', '@'], ['D', '_']], 2, 2)
crap([["@", "_", "_", "_", "_", "@", "_", "_"], ["_", "_", "@", "@", "_", "_", "@", "@"], ["_", "@", "_", "_", "_", "_", "_", "@"]], 4, 2)