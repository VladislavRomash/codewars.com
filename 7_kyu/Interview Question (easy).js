function getStrings(city) {
    const notBlankStr = city.replace(/ +/g, '')
    const arr = notBlankStr.toLowerCase().split('')
    const notRepeatArr = [...new Set(arr)]
    let newArr = []
    for (let i = 0; i < notRepeatArr.length; i++) {
        newArr.push(`${notRepeatArr[i]}:${'*'.repeat(arr.filter(f => f === notRepeatArr[i]).length)}`)
    }
    return newArr.join(',')
}


getStrings("Chicago")
getStrings("Bangkok")
getStrings("Las Vegas")