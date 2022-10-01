function wordsToMarks(string) {
    return [...string].reduce((a, b) => a += b.charCodeAt() - 96, 0)
}


wordsToMarks("attitude")
wordsToMarks("friends")
wordsToMarks("family")
wordsToMarks("selfness")
wordsToMarks("knowledge")