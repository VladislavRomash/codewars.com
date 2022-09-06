function accum(s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        str += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-'
    }
    return str.slice(0, -1)
}

accum("ZpglnRxqenU")
accum("NyffsGeyylB")