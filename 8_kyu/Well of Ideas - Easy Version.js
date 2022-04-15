function well(x) {
    let filter = x.filter(f => f === 'good')
    if (filter <= ['good', 'good'] && filter > []) {
        return 'Publish!'
    } else if (filter > ['good', 'good']) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}

well(['bad', 'bad', 'bad'])
well(['good', 'bad', 'bad', 'bad', 'bad'])
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])