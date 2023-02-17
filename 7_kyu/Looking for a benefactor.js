function newAvg(arr, newavg) {
    const num = newavg * (arr.length + 1) - arr.reduce((acc, el) => acc + el, 0)
    if (num <= 0) throw 'Expected New Average is too low'
    return Math.ceil(num)
}


newAvg([14, 30, 5, 7, 9, 11, 16], 90)
newAvg([14, 30, 5, 7, 9, 11, 15], 92)
newAvg([14, 30, 5, 7, 9, 11, 15], 2)