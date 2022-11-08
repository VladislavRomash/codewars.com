function findDeletedNumber(arr, mixArr) {
    const sortArr = [...arr].sort((a, b) => a - b)
    const sortMixArr = [...mixArr].sort((a, b) => a - b)
    let num = 0
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] !== sortMixArr[i]) {
            num += arr[i]
            break
        }
    }
    return num
}


/*function findDeletedNumber(arr, mixArr) {
    return arr.find((element) => {
        return !mixArr.includes(element)
    }) || 0;
}*/


findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])
findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])