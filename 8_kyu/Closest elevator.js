function elevator(left, right, call) {
    if (left === right) return 'right'
    let leftDist = Math.abs(call - left)
    let rightDist = Math.abs(call - right)
    return leftDist < rightDist ? 'left' : 'right'
}


elevator(0, 1, 0)
elevator(0, 1, 1)
elevator(0, 1, 2)
elevator(0, 0, 0)