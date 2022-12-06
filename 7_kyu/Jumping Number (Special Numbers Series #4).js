function jumpingNumber(n) {
    const nToStr = n.toString().split('')
    for (let i = 0; i < nToStr.length - 1; i++) {
        if (Math.abs(nToStr[i] - nToStr[i + 1]) !== 1) {
            return 'Not!!'
        }
    }
    return 'Jumping!!'
}

/*function jumpingNumber(n) {
    return n.toString().split('').every((el, index, arr) => !index || Math.abs(el - arr[index - 1]) === 1) ? 'Jumping!!' : 'Not!!'
}*/


jumpingNumber(1)
jumpingNumber(23)
jumpingNumber(32)
jumpingNumber(79)


