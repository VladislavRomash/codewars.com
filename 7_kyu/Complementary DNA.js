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