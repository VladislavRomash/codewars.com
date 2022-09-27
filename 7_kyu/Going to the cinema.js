function movie(card, ticket, perc) {
    let i = 0
    let a = 0
    let b = card
    let cheap = ticket
    while (true) {
        a += ticket
        b += cheap
        cheap *= perc
        if (Math.ceil(b) < a) return i
        i++
    }
}


movie(500, 15, 0.9)
movie(100, 10, 0.95)