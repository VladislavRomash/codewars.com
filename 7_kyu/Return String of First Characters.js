function makeString(s) {
    return s.split(' ').map((m, i) => m[0]).join('')
}


makeString("sees eyes xray yoat")
makeString("brown eyes are nice")