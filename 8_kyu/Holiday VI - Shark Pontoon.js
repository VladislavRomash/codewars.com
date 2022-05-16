function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    const sharkTime = dolphin ? sharkDistance / (sharkSpeed / 2) : sharkDistance / sharkSpeed
    const youTime = pontoonDistance / youSpeed
    if (sharkTime > youTime) return 'Alive!'
    else return 'Shark Bait!'
}

shark(12, 50, 4, 8, true)
shark(24, 0, 4, 8, true)