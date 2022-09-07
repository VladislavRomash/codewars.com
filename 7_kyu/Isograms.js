function isIsogram(str) {
    let first = ''
    for (let i = 0; i < str.length; i++) {
        if (str.toLowerCase().indexOf(str[i]) === str.toLowerCase().lastIndexOf(str[i])) {
            first += 'true '
        } else {
            first += 'false '
        }
    }
    return str !== '' ? first.split(' ').includes('false') !== true : true
}


/*function isIsogram(str) {
    let i, j;
    str = str.toLowerCase();
    for (i = 0; i < str.length; i++)
        for (j = i + 1; j < str.length; j++)
            if (str[i] === str[j])
                return false;
    return true;
}*/


isIsogram("Dermatoglyphics")
isIsogram("isogram")
isIsogram("aba")
isIsogram("moOse")
isIsogram("")


