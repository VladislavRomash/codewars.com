function yearDays(year) {
    return !((year % 4) || (!(year % 100) && (year % 400))) ? `${year} has 366 days` : `${year} has 365 days`
}

yearDays(2016)
yearDays(1857)