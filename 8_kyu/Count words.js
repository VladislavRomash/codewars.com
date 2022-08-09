function countWords(str) {
    return str.split(/\s/).filter(f => f).length
}

countWords("With! Symbol@ #Around! (Every) %Word$")
countWords(" Arthur ")
countWords("﻿Hello﻿World ")
countWords("  Hello     Bart  ")


