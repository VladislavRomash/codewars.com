function divisibleByThree(str) {
    return str.split('').reduce((acc, el) => Number(acc) + Number(el), 0) % 3 === 0
}

divisibleByThree('123')
divisibleByThree('19254')
divisibleByThree('88')
divisibleByThree('1')