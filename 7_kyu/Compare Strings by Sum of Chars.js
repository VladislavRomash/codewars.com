function compare(s1, s2) {

    if (s1 === null) {
        s1 = ''
    }
    if (s2 === null) {
        s2 = ''
    }

    let s1Modified = s1.toUpperCase()
    let s2Modified = s2.toUpperCase()

    const sum1 = s1Modified.split('').map(m => m.charCodeAt()).reduce((acc, el) => acc + el, 0)
    const sum2 = s2Modified.split('').map(m => m.charCodeAt()).reduce((acc, el) => acc + el, 0)

    if (s1Modified === s1Modified.replace(/[^A-Z]/gi, '') && s2.toUpperCase() === s2.toUpperCase().replace(/[^A-Z]/gi, '')) {
        return sum1 === sum2
    }

    return true
}


compare("AD", "BC")
compare("gf", "FG")
compare("zz1", "")
compare(null, null)
compare(null, '')

compare("AD", "DD")
compare("Ad", "DD")
compare("kl", "lz")
compare(null, "bz")