var number = function (array) {
    return array.map((m, i) => `${i + 1}: ${m}`)
}


number([])
number(["a", "b", "c"])