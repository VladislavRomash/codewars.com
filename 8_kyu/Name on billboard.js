function billboard(name, price = 30) {
    return name.split('').reduce(r => r + price, 0)
}

billboard("Jeong-Ho Aristotelis")
billboard("Hadufuns John", 20)