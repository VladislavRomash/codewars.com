function hydrate(s) {
    const count = s.replace(/[^1-9]/g, '').split('').reduce((a, b) => Number(a) + Number(b), 0)
    return count === 1 ? `${count} glass of water` : `${count} glasses of water`
}

hydrate("1 beer")
hydrate("2 glasses of wine and 1 shot")
hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")