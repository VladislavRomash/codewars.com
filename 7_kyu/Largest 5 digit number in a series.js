function solution(digits) {
    let res = 0
    for (let i = 0; i < digits.length; i++) {
        let num = digits.substr(i, 5)
        if (+num > res) {
            res = +num
        }
    }
    return res
}

solution('1234567898765')
solution("731674765")
