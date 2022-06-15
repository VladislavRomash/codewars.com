function any(arr, fun) {
    return arr.some(fun)
}


any([1, 2, 3, 4], function (v, i) {
    return v > 3
})
any([1, 2, 3, 4], function (v, i) {
    return v > 4
})