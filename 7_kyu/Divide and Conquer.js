function divCon(x) {
    const num = x.filter(f => f === +f).reduce((acc, el) => acc + el, 0)
    const str = x.filter(f => f === String(f)).reduce((acc, el) => +acc + +el, 0)
    return num - str
}


divCon([9, 3, '7', '3'])
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])