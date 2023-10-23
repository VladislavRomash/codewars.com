function maxRot(n) {
    let string = String(n)
    let arr = [string]
    for (let i = 0; i < string.length; i++) {
        string = string.slice(0, i) + string.slice(i + 1) + string[i]
        arr.push(string.split(' ').join())
    }
    return Math.max.apply(null, arr)
}


maxRot(38458215)
maxRot(195881031)