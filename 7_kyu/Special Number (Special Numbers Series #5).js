function specialNumber(n) {
    return String(n).split('').filter(f => Number(f) <= 5).length === String(n).length ? 'Special!!' : 'NOT!!'
}


specialNumber(2)
specialNumber(6)
specialNumber(11)
specialNumber(2783)


