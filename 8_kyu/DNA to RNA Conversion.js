function DNAtoRNA(dna) {
    let rna = dna;
    while (rna.includes("T")) {
      rna = rna.replace("T", "U");
    }
      return rna;
  }