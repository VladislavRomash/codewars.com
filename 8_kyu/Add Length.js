function addLength(str) {
    return str.split(' ').map(m => `${m} ${m.length}`)
}


addLength('apple ban')
addLength('you will win')