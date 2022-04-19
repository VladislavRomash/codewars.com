function combat(health, damage) {
    return health >= damage ? health - damage : 0
}

combat(100, 5)
combat(92, 8)
combat(20, 30)