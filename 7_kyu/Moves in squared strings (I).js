function vertMirror(string) {
    return string.split(/[\n]/).map(m => m.split('').reverse().join('')).join('\n')
}

function horMirror(string) {
    return string.split(/[\n]/).reverse().join('\n')
}

function oper(fct, s) {
    return fct(s)
}

vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu") // "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
horMirror("lVHt\nJVhv\nCSbg\nyeCt") // "yeCt\nCSbg\nJVhv\nlVHt"
oper(vertMirror, "abcd\nefgh\nijkl\nmnop")