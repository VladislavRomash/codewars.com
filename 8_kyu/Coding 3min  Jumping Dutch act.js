function sc(floor) {
    const str = 'Aa~ '
    if (floor <= 1) return ''
    else if (floor <= 6) return `${str.repeat(floor - 1).trim()} Pa! Aa!`
    else return `${str.repeat(floor - 1).trim()} Pa!`
}


sc(2)
sc(6)
sc(10)