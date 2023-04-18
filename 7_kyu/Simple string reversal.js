function solve(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') result += str[i]
        if (str[result.length] === ' ') result += ' '
    }
    return result
}

function solve(str) {
    let arr = str.split('').filter(x => x !== ' ')
    return str.replace(/\S/g, r => arr.pop())
}

solve("codewars")
solve("your code")
solve("your code rocks")
solve("i love codewars")