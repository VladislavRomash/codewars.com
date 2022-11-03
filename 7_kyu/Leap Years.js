function isLeapYear(year) {
    return year % 100 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 > 0
}


isLeapYear(1234)
isLeapYear(1984)