function remove(string) {
    string = string.replace(/!/g, "")
    return `${string}!`;
}

remove("Hi!")
remove("Hi!!!")
remove("!Hi")