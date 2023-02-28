function save(sizes, hd) {
    let files = 0
    let count = 0
    for (let i = 0; i < sizes.length; i++) {
        if (files < hd) {
            files += sizes[i]
            count++
        }
    }
    if (files > hd) return count - 1
    return count
}


save([4, 4, 4, 3, 3], 12)
save([4, 8, 15, 16, 23, 42], 108)
save([13], 13)