function correctPolishLetters(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'ą') {
            string = string.replace(/ą/ig, 'a')
        } else if (string[i] === 'ć') {
            string = string.replace(/ć/ig, 'c')
        } else if (string[i] === 'ę') {
            string = string.replace(/ę/ig, 'e')
        } else if (string[i] === 'ł') {
            string = string.replace(/ł/ig, 'l')
        } else if (string[i] === 'ń') {
            string = string.replace(/ń/ig, 'n')
        } else if (string[i] === 'ó') {
            string = string.replace(/ó/ig, 'o')
        } else if (string[i] === 'ś') {
            string = string.replace(/ś/ig, 's')
        } else if (string[i] === 'ź') {
            string = string.replace(/ź/ig, 'z')
        } else if (string[i] === 'ż') {
            string = string.replace(/ż/ig, 'z')
        }
    }
    return string
}

/*function correctPolishLetters(string) {
    const polishLetters = {'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'};
    return string.replace(/[ąćęłńóśźż]/ig, r => polishLetters[r])
}*/

correctPolishLetters("Jędrzej Błądziński")
correctPolishLetters("Lech Wałęsa")