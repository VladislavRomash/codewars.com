function cookie(x) {
    if (x === x.toString()) return `Who ate the last cookie? It was Zach!`
    if (x === +x) return `Who ate the last cookie? It was Monica!`
    else return `Who ate the last cookie? It was the dog!`
}

cookie("Ryan")
cookie(2.3)
cookie(true)