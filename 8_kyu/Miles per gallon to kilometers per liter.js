function converter(mpg) {
    return +((mpg * 1.609344) / 4.54609188).toFixed(2)
}

converter(10)
converter(20)
converter(30)