function getSize(width, height, depth) {
    const area = 2 * (height * width) + 2 * (height * depth) + 2 * (width * depth)
    const volume = width * height * depth
    return [area, volume]
}

getSize(4, 2, 6)
getSize(10, 10, 10)
getSize(4, 2, 6)