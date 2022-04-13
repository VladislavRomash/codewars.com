function strCount(str, letter) {
    let separate = str.split('').filter(f => f === letter)
    return separate.length
}