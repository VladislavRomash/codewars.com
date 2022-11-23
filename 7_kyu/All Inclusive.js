function containAllRots(strng, arr) {
    for (let i = 0; i < strng.length; i++) {
        if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1) {
            return false
        }
    }
    return true
}


containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
containAllRots("Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"])
containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])
