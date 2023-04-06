String.prototype.isLetter = function () {
    return this.length === 1 && (this.charCodeAt(0) >= 97 && this.charCodeAt(0) <= 122) || (this.charCodeAt(0) >= 65 && this.charCodeAt(0) <= 90)
}

String.prototype.isLetter = function () {
    return /^[a-z]$/i.test(this);
};

"".isLetter()
"a".isLetter()
"X".isLetter()
"7".isLetter()
"ab".isLetter()