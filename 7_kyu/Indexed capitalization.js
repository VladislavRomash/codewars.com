function capitalize(s, arr) {
    const sToArr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (sToArr[arr[i]]) {
            sToArr[arr[i]] = sToArr[arr[i]].toUpperCase()
        }
    }
    return sToArr.join('')
}

/*function capitalize(s,arr){
    return s.split('').map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
}*/

capitalize("abcdef", [1, 2, 5])
capitalize("abcdef", [1, 2, 5, 100])
capitalize("codewars", [1, 3, 5, 50])