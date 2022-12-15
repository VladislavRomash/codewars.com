function meeting(x) {
    return x.includes('O') ? x.indexOf('O') : 'None available!'
}


meeting(['X', 'O', 'X'])
meeting(['O', 'X', 'X', 'X', 'X'])
meeting(['X', 'X', 'X', 'X', 'X'])