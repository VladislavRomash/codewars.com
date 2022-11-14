function strong(n) {
    return [...n.toString()].map(m => {
        let num = 1
        for (let i = m; i > 0; i--) {
            num *= i
        }
        return num
    }).reduce((acc, el) => acc + el) === n ? 'STRONG!!!!' : 'Not Strong !!'
}

strong(1)
strong(2)
strong(7)
strong(145)
strong(185)