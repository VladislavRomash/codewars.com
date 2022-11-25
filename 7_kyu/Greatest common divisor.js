function mygcd(x, y) {
    return y === 0 ? x : mygcd(y, x % y)
}


/*function mygcd(x, y) {
    for (let i = Math.max(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i
        }
    }
}*/

mygcd(30, 12)
mygcd(8, 9)
mygcd(1, 1)
mygcd(1, 3)


