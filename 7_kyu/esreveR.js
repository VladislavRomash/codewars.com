reverse = function (array) {
    let arr = []
    for (let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i])
    }
    return arr
}

reverse([1, 2, 3])
reverse([1, null, 14, "two"])
reverse([458, 286, 894, 735, 947, 759, 946])
