function periodIsLate(last, today, cycleLength) {
    const timeDiff = Math.abs(last.getTime() - today.getTime())
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) > cycleLength;
}

periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)
periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)