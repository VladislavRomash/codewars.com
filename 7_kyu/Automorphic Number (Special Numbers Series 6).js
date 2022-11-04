function automorphic(n) {
    return Math.pow(n, 2).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!'
}


automorphic(1)
automorphic(3)
automorphic(6)
automorphic(625)
automorphic(225)