function shortenToDate(longDate) {
    return longDate.slice(0, longDate.indexOf(','))
}

shortenToDate("Friday May 2, 9am")
shortenToDate("Tuesday January 29, 10pm")