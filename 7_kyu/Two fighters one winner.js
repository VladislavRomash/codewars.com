function declareWinner(fighter1, fighter2, firstAttacker) {
    const fight1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const fight2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    return fight1 < fight2 ? fighter2.name : fight2 < fight1 ? fighter1.name : firstAttacker
}

