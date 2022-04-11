function enough(cap, on, wait) {
    let enoughSpace = on + wait
    return (enoughSpace) <= cap ? 0 : (cap - enoughSpace) * -1
}