function animals(heads, legs) {
    const cows = (legs - (2 * heads)) / 2
    const chickens = heads - cows
    if (heads === 0 && legs === 0) return [0, 0]
    if (legs % 2 !== 0 || chickens < 0 || cows < 0) return 'No solutions'
    else return [chickens, cows]
}

animals(72, 200)
animals(116, 282)
animals(0, 0)