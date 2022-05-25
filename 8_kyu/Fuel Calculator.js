function fuelPrice(litres, pricePerLitre) {
    const total = litres * pricePerLitre
    let discount = 0
    for (let i = 2; i <= litres; i += 2) {
        discount += 5
        if (litres > 10) {
            discount = 25
        }
    }
    return +((total - ((discount * litres) / 100)).toFixed(2))
}

fuelPrice(5, 1.23)
fuelPrice(8, 2.5)
fuelPrice(5, 5.6)

+ ((total - ((discount * litres) / 100)).toFixed(2))