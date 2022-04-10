function feast(beast, dish) {
    let letterBeast = beast.split('')
    let letterDish = dish.split('')
    return letterBeast[0] === letterDish[0] && letterBeast[letterBeast.length - 1] === letterDish[letterDish.length - 1]
}
