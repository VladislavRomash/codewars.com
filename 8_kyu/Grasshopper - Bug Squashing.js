let health = 100
let position = 0
let coins = 0

function main() {
    return [rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(f => f())
}
