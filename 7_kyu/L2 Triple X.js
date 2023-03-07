function tripleX(str) {
    return /^[^x]*xxx/.test(str)
}

const tripleX = str => {
    let firstX = str.indexOf('x')
    return firstX > -1 && firstX === str.indexOf('xxx')
}

tripleX("abraxxxas")
tripleX("xoxotrololololololoxxx")
tripleX("soft kitty, warm kitty, xxxxx")
tripleX("softx kitty, warm kitty, xxxxx")