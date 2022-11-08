function seven(m) {
    let count = 0;
    while (("" + m).length > 2) {
        count++;
        m = Math.floor(m / 10) - (m % 10) * 2;
    }
    return [m, count];
}


seven(1021)
seven(1603)
seven(371)
seven(483)