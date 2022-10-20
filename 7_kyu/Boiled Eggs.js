function cookingTime(eggs) {
    let min = 5
    while (eggs > 8) {
        eggs = eggs - 8
        min += 5
    }
    return eggs === 0 ? 0 : min
}


cookingTime(0)
cookingTime(5)
cookingTime(10)
cookingTime(20)