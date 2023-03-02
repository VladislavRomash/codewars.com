var makeBackronym = function (string) {
    return string.toUpperCase().split('').map(m => dict[m]).join(' ')
};