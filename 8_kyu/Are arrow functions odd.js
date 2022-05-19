function odds(values) {
    return values.filter(f => f % 2 !== 0);
}

odds([])
odds([2, 4, 6])
odds([1, 2, 3, 4, 5, 6])