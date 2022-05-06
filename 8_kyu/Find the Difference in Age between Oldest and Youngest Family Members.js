function differenceInAges(ages) {
    let young = ages.sort((a, b) => a > b ? 1 : -1)[0]
    let old = ages.sort((a, b) => a > b ? 1 : -1)[ages.length - 1]
    return [young, old, old - young]
}

differenceInAges([82, 15, 6, 38, 35])
differenceInAges([57, 99, 14, 32])