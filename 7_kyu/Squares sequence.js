function squares(x, n) {
    let arr = [x]
    for (let i = 1; i < n; i++) {
        let temp = Math.pow(x, 2)
        arr.push(temp)
        x = temp
    }
    return n <= 0 ? [] : arr
}


squares(2, 5)
squares(3, 3)