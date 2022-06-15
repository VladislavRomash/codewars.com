function roundIt(n) {
    const pointIndex = n.toString().indexOf('.')
    const left = n.toString().slice(0, pointIndex)
    const right = n.toString().slice(pointIndex + 1)
    return left.length < right.length ? Math.ceil(n) : left.length > right.length ? Math.floor(n) : Math.round(n)
}


roundIt(3.45)
roundIt(34.5)
roundIt(34.56)