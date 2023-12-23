const sumNested = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumNested(arr[i])
        } else {
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumNested([1, [2, [3, [4]]]]))