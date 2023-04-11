function findScreenHeight(width, ratio) {
    let one = Number(ratio.split(':')[0])
    let two = Number(ratio.split(':')[1])
    return `${width}x${width / one * two}`
}

findScreenHeight(1024, "4:3")
findScreenHeight(1280, "16:9")
findScreenHeight(3840, "32:9")