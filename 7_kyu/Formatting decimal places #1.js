function twoDecimalPlaces(number) {
    const firstPart = String(number).split('.')[0]
    const secondPart = String(number).split('.')[1].slice(0, 2)
    return Number([firstPart, secondPart].join('.'))
}

function twoDecimalPlaces(number) {
    return +number.toFixed(4).slice(0, -2)
}


twoDecimalPlaces(10.1289767789)
twoDecimalPlaces(-7488.83485834983)
twoDecimalPlaces(4.653725356)