function explode(s) {
    return s.toString().split('').map(m => m.repeat(+m)).join('')
}

explode("312")
explode("102269")