function noOdds(values) {
    return values.filter(f => f % 2 === 0)
}


noOdds([0, 1])
noOdds([0, 1, 2, 3])