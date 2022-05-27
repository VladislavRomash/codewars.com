function contamination(text, char) {
    const length = text.length
    return char.repeat(length)
}

contamination("abc", "z")
contamination("", "z")
contamination("abc", "")
contamination("_3ebzgh4", "&")