function sum() {
    return [...arguments].reduce((acc, el) => acc + el, 0)
}


sum(1)
sum(1, 2)
sum(5, 7, 9)
sum(12, 1, 1, 1, 1)