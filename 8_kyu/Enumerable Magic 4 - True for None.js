function none(arr, fun) {
    return arr.map(m => fun(m)).every(e => !e)
}

none([1, 2, 3, 4, 5], function (item) {
    return item > 5
})
none([1, 2, 3, 4, 5], function (item) {
    return item > 4
})