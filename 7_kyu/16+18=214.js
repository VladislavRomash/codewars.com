function add(num1, num2) {
    const arr1 = String(num1).split('').reverse()
    const arr2 = String(num2).split('').reverse()
    const maxValue = Math.max(arr1.length, arr2.length)
    let result = []
    for (let i = maxValue - 1; i >= 0; i--) {
        result.push(Number(arr1[i] || 0) + Number(arr2[i] || 0))
    }
    return Number(result.join(''))
}


add(2, 11)
add(0, 1)
add(16, 18)
add(26, 39)
add(122, 81)