function cutCube(volume, n) {
    return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1)
}


cutCube(27, 27)
cutCube(512, 8)
cutCube(50000, 50)