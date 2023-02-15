function reverseBits(n) {
    return parseInt(n.toString(2).split('').reverse().join(''), 2)
}


reverseBits(417)
reverseBits(267)
reverseBits(0)