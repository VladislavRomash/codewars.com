function add(n) {
    return function (num) {
        return n + num
    }
}


add(1)(3)