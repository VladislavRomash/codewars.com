function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a && arr[i + 1] === b || arr[i] === b && arr[i + 1] === a) return true
    }
    return false
}


consecutive([1, 3, 5, 7], 3, 7)
consecutive([1, 3, 5, 7], 3, 1)
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)