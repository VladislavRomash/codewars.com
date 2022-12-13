function switcher(x) {
    const alphabet = [' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse()
    return x.map(m => alphabet[Number(m - 1)]).join('')
}


switcher(['24', '12', '23', '22', '4', '26', '9', '8'])
switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4'])
switcher(['4', '24'])