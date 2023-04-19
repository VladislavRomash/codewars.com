function one(arr, fun) {
    return arr.filter(f => fun(f)).length === 1
}


one([1, 2, 3, 4, 5], function (item) {
    return item < 2
})
one([1, 2, 3, 4, 5], function (item) {
    return item % 2
})
one([1, 2, 3, 4, 5], function (item) {
    return item > 5
})