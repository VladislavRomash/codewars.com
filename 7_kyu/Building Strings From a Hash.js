function solution(pairs) {
    return Object.keys(pairs).map(m => `${m} = ${pairs[m]}`).join(',')
}

function solution(pairs) {
    let str = ''
    for (const key in pairs) {
        str += `${key} = ${pairs[key]},`
    }
    return str.slice(0, str.length - 1)
}

solution({a: 1, b: '2'})


