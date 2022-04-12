String.prototype.toAlternatingCase = function () {
    return this.split('').map(m => m === m.toUpperCase() ? m.toLowerCase() : m.toUpperCase()).join('')
}