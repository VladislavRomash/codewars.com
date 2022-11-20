function calc(x) {
    const arrCharCodeAt = x.split('').map(m => m.charCodeAt())
    const total1 = arrCharCodeAt.join('').split('').reduce((acc, el) => +acc + +el)
    const total2 = arrCharCodeAt.join('').replace(/7/gi, '1').split('').reduce((acc, el) => +acc + +el)
    return total1 - total2
}

calc('abcdef')
calc('ifkhchlhfd')
calc('aaaaaddddr')
calc('ABC')