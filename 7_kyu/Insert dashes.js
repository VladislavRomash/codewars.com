function insertDash(num) {
    const str = String(num)
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) % 2 !== 0 && Number(str[i + 1]) % 2 !== 0) {
            result.push(`${str[i]}-`)
        } else result.push(str[i])
    }
    let resultStr = result.join('')
    return resultStr[resultStr.length - 1] !== '-' ? resultStr : resultStr.slice(0, resultStr.length - 1)
}

function insertDash(num) {
    return String(num).replace(/([13579])(?=[13579])/g, '$1-');
}

insertDash(454793)
insertDash(123456)
insertDash(1003567)