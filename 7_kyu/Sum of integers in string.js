function sumOfIntegersInString(s) {
    return s.replace(/[^0-9]/g, ' ').split(' ').filter(f => f !== '').reduce((acc, el) => Number(acc) + Number(el), 0)
}

sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog')


