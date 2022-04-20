function noBoringZeros(n) {
    return Number(`${n}`.replace(/0+$/, ''))
}

noBoringZeros(1450)
noBoringZeros(960000)
noBoringZeros(1050)
noBoringZeros(-1050)