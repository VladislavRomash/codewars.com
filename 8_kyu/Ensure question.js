function ensureQuestion(s) {
    return s.charAt(s.length - 1) !== '?' ? `${s}?` : s
}


ensureQuestion("")
ensureQuestion("Yes")
ensureQuestion("No?")