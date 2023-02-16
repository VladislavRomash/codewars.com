function covfefe(str) {
    return str.includes('coverage') ? str.replace(/(coverage)/g, 'covfefe') : `${str} covfefe`
}

covfefe("coverage")
covfefe("coverage coverage")
covfefe("nothing")
covfefe("double space ")
covfefe("covfefe")
covfefe("erag")