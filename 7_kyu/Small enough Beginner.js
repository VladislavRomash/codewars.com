function smallEnough(a, limit) {
    return a.every(e => e <= limit)
}


smallEnough([66, 101], 200)
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)
smallEnough([101, 45, 75, 105, 99, 107], 107)