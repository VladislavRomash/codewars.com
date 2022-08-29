Array.prototype.filter = function (func) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            result.push(this[i])
        }
    }
    return result
}
