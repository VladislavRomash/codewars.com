function numObj(s) {
    let newArr = []
    let newObj = {}
    for (let i = 0; i < s.length; i++) {
        newArr.push(
            newObj = {[s[i]]: String.fromCharCode(s[i])}
        )
    }
    return newArr
}

numObj([118, 117, 120])
numObj([101, 121, 110, 113, 113, 103])