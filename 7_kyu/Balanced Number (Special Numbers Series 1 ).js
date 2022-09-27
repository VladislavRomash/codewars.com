function balancedNum(number) {
    const arr = number.toString().split('')
    if (arr.length % 2 === 0) {
        const start = arr.slice(0, (arr.length / 2) - 1).reduce((a, b) => Number(a) + Number(b), 0)
        const end = arr.slice((arr.length / 2) + 1).reduce((a, b) => Number(a) + Number(b), 0)
        return start === end ? 'Balanced' : 'Not Balanced'
    }
    if (arr.length % 2 !== 0) {
        const st = arr.slice(0, arr.length / 2).reduce((a, b) => Number(a) + Number(b), 0)
        const end1 = arr.slice(Math.ceil(arr.length / 2)).reduce((a, b) => Number(a) + Number(b), 0)
        return st === end1 ? 'Balanced' : 'Not Balanced'
    }
}


balancedNum(7)
balancedNum(13)
balancedNum(424)
balancedNum(1024)
balancedNum(1230987)
balancedNum(56239814)