function saleHotdogs(n) {
    return n >= 5 && n < 10 ? n * 95 : n >= 10 ? n * 90 : n * 100
}

saleHotdogs(1)
saleHotdogs(4)
saleHotdogs(5)
saleHotdogs(9)