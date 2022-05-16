function mango(quantity, price) {
    let freeMango = Math.floor(quantity / 3)
    return (quantity - freeMango) * price
}

mango(3, 3)
mango(9, 5)