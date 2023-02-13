var flatten = function (array) {
    return array.flat(1)
}


flatten([])
flatten([1, 2, 3])
flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])
flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])