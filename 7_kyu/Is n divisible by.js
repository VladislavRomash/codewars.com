function isDivisible() {
    const firstEl = arguments[0]
    return ![...arguments].map(m => firstEl % m === 0).includes(false)
}

// function isDivisible(firstN, ...otherN) {
//     return otherN.every(n => firstN % n === 0);
// }

isDivisible(3, 3, 4)
isDivisible(12, 3, 4)

