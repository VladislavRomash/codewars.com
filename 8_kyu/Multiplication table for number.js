function multiTable(number) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(m => `${m} * ${number} = ${m * number}`).join('\n')
}

multiTable(5)
multiTable(1)