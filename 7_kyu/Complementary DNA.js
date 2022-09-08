function DNAStrand(dna) {
    let obj = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G',
    }
    return dna.replace(/./g, r => obj[r])
}

DNAStrand("AAAA")
DNAStrand("ATTGC")
DNAStrand("GTAT")


/*
function DNAStrand(dna) {
    let str = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            str += 'T'
        } else if (dna[i] === 'T') {
            str += 'A'
        } else if (dna[i] === 'C') {
            str += 'G'
        } else if (dna[i] === 'G') {
            str += 'C'
        }
    }
    return str
}*/
