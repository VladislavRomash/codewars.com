function nextItem(xs, item) {
    let arr = [];
    for (key of xs) {
        if (arr.length == 1) return key;
        if (key == item) arr.push(key);
    }
}

nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5)
nextItem(['a', 'b', 'c'], 'c')
nextItem("testing", "t")