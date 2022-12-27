function evensAndOdds(num) {
    return num % 2 === 0 ? num.toString(2) : num.toString(16)
}

evensAndOdds(2)
evensAndOdds(13)
evensAndOdds(47)
evensAndOdds(0)