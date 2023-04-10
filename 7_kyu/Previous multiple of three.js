const prevMultOfThree = n => {
    const arr = String(n).split('')

    while (n % 3 !== 0) {
        arr.pop()
        n = Number(arr.join(''))
    }

    return n === 0 ? null : n
}

const prevMultOfThree = n => {
    if (n === 0) return null;
    if (n % 3 === 0) return n;
    return prevMultOfThree(Number(String(n).slice(0, -1)))
}

prevMultOfThree(1)
prevMultOfThree(3)
prevMultOfThree(25)
prevMultOfThree(36)
prevMultOfThree(1244)
prevMultOfThree(952406)