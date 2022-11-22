function sevenAte9(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '9' && arr[i - 1] === '7' && arr[i + 1] === '7') {
            arr.splice(i, 1)
        }
    }
    return arr.join('')
}


sevenAte9('79712312')
sevenAte9('79797')
sevenAte9('165561786121789797')
