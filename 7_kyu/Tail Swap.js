function tailSwap(arr) {
    const first = arr.map(m => m.split(':'))[0][0]
    const second = arr.map(m => m.split(':'))[0][1]
    const third = arr.map(m => m.split(':'))[1][0]
    const fourth = arr.map(m => m.split(':'))[1][1]
    return [`${first}:${fourth}`, `${third}:${second}`]
}

tailSwap(['abc:123', 'cde:456'])
tailSwap(['a:12345', '777:xyz'])