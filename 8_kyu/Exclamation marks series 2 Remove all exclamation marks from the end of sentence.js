function remove(string) {
    while (string.slice(-1) === '!') {
        string = string.slice(0, -1)
    }
    return string
}

remove("Hi!")
remove("Hi!!!")
remove("!Hi")
remove("!Hi!")
remove("Hi! Hi!")
remove("Hi")