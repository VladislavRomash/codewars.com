function bump(x) {
    return x.replace(/[_]/g, '').length <= 15 ? 'Woohoo!' : 'Car Dead'
}


bump("n")
bump("__nn_nnnn__n_n___n____nn__nnn")
bump("_nnnnnnn_n__n______nn__nn_nnn")