function tripleTrouble(one, two, three) {
    let arr = []
    for (let i = 0; i < one.length; i++) {
        arr.push(one[i] + two[i] + three[i])
    }
    return arr.join('')
}

tripleTrouble("aaa", "bbb", "ccc")
tripleTrouble("aaaaaa", "bbbbbb", "cccccc")
tripleTrouble("Sea", "urn", "pms")