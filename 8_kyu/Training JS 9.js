function padIt(str, n) {
    let i = 0
    while (i < n) {
        if (i % 2 === 0) {
            str = `*${str}`
        } else {
            str = `${str}*`
        }
        i++
    }
    return str
}

padIt("a", 1)
padIt("a", 3)
padIt("a", 5)