function sumArray(array) {
    return !array || array.length === 0 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((a, b) => a + b,0);
}