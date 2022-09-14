function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd'
}

oddOrEven([0])
oddOrEven([1])
oddOrEven([0, 1, 3])