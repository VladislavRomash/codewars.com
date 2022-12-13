function catMouse(x) {
    return x.slice(1, -1).length > 3 ? 'Escaped!' : 'Caught!'
}


catMouse('C....m')
catMouse('C..m')
catMouse('C.....m')