function maskify(cc) {
    const length = cc.length > 4
    return length ? cc.replace(/[0123456789abcdefghijklmnopqrstuvwxyz]/gi, '#').slice(0, -4) + cc.slice(-4) : cc
}

/*function maskify(cc) {
    const length = cc.length > 4
    return length ? cc.replace(/./gi, '#').slice(0, -4) + cc.slice(-4) : cc
}*/


maskify('4556364607935616')
maskify('1')
maskify('11111')
maskify('Skippy')