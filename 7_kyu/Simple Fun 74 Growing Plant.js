function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let day = 0
    let height = 0
    while (desiredHeight >= height) {
        height += upSpeed
        day++
        if (desiredHeight > height) {
            height -= downSpeed
        } else return day
    }
}


growingPlant(100, 10, 910)
growingPlant(10, 9, 4)