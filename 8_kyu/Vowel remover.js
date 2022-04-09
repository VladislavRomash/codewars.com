function shortcut(string) {
    var lower = ['a', 'e', 'i', 'o', 'u'];
    var arr = string.split('');
    for (var i = arr.length - 1; i >= 0; i--) {
        var letter = arr[i];
        if (lower.indexOf(letter) > -1) {
            arr.splice(i, 1);
        }
    }
    return arr.join('');
}