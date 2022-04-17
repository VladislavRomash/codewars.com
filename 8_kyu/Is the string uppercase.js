String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this.toString();
}

'C'.isUpperCase()
'c'.isUpperCase()
'HELLO I AM DONALD'.isUpperCase()
'hello I AM DONALD'.isUpperCase()
