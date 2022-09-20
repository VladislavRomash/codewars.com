function gimme(triplet) {
    const copy = [...triplet].sort((a, b) => a - b)[1]
    return triplet.indexOf(copy)
}

gimme([2, 3, 1])
gimme([5, 10, 14])
