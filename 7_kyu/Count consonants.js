function consonantCount(str) {
    return str.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('').filter(f => f !== 'a' && f !== 'e' && f !== 'i' && f !== 'o' && f !== 'u').length
}

consonantCount('language text')
consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')
