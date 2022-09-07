function filter_list(l) {
    return l.filter(f => typeof f === 'number')
}


filter_list([1, 2, 'a', 'b'])
filter_list([1, 'a', 'b', 0, 15])
filter_list([1, 2, 'aasf', '1', '123', 123])