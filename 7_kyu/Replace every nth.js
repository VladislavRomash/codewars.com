// function replaceNth(text, n, oldValue, newValue, count = 0) {
//     return text.split('').map(m => m === oldValue ? (++count === n ? ((count = 0) ? _ : newValue) : m) : m).join('')
// }

function replaceNth(text, n, oldValue, newValue) {
    const arr = text.split('')
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === oldValue && count === n) {
            arr[i] = newValue
            count = 1
        }
        if (arr[i] === oldValue && count !== n) {
            count++
        }
    }
    return arr.join('')
}

replaceNth("Vader said: No, I am your father!", 2, 'a', 'o') // "Vader soid: No, I am your fother!"
replaceNth("Vader said: No, I am your father!", 4, 'a', 'o')
replaceNth("Vader said: No, I am your father!", 6, 'a', 'o')
replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i')