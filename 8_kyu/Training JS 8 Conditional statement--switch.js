function howManydays(month) {
    let days = 0;
    switch (month) {
        case 1:
            return days = 31
        case 2:
            return days = 28
        case 3:
            return days = 31
        case 4:
            return days = 30
        case 5:
            return days = 31
        case 6:
            return days = 30
        case 7:
            return days = 31
        case 8:
            return days = 31
        case 9:
            return days = 30
        case 10:
            return days = 31
        case 11:
            return days = 30
        case 12:
            return days = 31
        default:
            return alert('error')
    }
}

howManydays(1)
howManydays(3)
howManydays(12)