function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i = i + integer) {
        arr.push(i);
    }
    return arr;
}


findMultiples(5, 25)
findMultiples(1, 2)
findMultiples(5, 7)
findMultiples(11, 54)