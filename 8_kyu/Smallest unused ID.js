function nextId(ids) {
    let x = 0;
    while (ids.includes(x)) x++;
    return x;
}

nextId([0, 1, 2, 3, 5])
nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])