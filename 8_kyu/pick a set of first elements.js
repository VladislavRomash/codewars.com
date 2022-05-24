const arr = ['a', 'b', 'c', 'd', 'e'];

function first(arr, n = 1) {
    return arr.slice(0, n)
}

first(arr, 1)
first(arr)