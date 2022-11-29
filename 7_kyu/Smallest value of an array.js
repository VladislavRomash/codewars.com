function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}

min([1, 2, 3, 4, 5], 'value')
min([1, 2, 3, 4, 5], 'index')