function arrayLeaders(numbers) {
    return numbers.filter((f, i, arr) => f > arr.slice(i + 1).reduce((acc, el) => acc + el, 0))
}


arrayLeaders([1, 2, 3, 4, 0])
arrayLeaders([-1, -29, -26, -2])
