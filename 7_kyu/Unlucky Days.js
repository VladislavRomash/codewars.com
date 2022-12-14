function unluckyDays(year) {
    let fridays = 0
    for (let i = 0; i < 12; i++) {
        let date = new Date(year, i, 13)
        if (date.getDay() === 5) {
            fridays++
        }
    }
    return fridays
}


unluckyDays(1586)
unluckyDays(1001)
unluckyDays(2819)
unluckyDays(2310)