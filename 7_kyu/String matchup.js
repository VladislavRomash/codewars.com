function solve(a, b) {
    let arr = []
    for (let i = 0; i < b.length; i++) {
        arr.push(a.filter(f => f === b[i]).length)
    }
    return arr
}

function solve(a, b) {

    const [first, second, third] = b

    const obj = {
        first: () => {
            return a.filter(f => f === first).length
        },
        second: () => {
            return a.filter(f => f === second).length
        },
        third: () => {
            return a.filter(f => f === third).length
        },
    }

    return [obj.first(), obj.second(), obj.third()]
}

function solve(a, b) {
    return b.map(m => a.filter(f => f === m).length)
}

solve(['abc', 'abc', 'xyz', 'abcd', 'cde'], ['abc', 'cde', 'uap'])
solve(['abc', 'xyz', 'abc', 'xyz', 'cde'], ['abc', 'cde', 'xyz'])