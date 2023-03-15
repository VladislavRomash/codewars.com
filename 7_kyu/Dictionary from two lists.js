function createDict(keys, values) {
    const obj = keys.reduce((acc, el, index) => {
        acc[el] = values[index]
        return acc
    }, {})

    for (const key in obj) {
        if (obj[key] === undefined) {
            obj[key] = null
        }
    }
    return obj
}

function createDict(keys, values) {
    let obj = {}
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = i < values.length ? values[i] : null
    }
    return obj
}


createDict(['a', 'b', 'c'], [1, 2, 3])
createDict(['a', 'b', 'c'], [1, 2, 3, 4])
createDict(['a', 'b', 'c', 'd'], [1, 2, 3])