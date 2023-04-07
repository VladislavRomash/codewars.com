function nextHappyYear(year) {
    while (new Set(String(++year).split('')).size < 4) ;
    return year
}


nextHappyYear(1001)
nextHappyYear(1123)