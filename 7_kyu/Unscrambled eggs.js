function unscrambleEggs(word) {
    return word.split(/egg/).join('')
}

function unscrambleEggs(word) {
    return word.replace(/egg/ig, '')
}

unscrambleEggs("ceggodegge heggeregge")
unscrambleEggs("FeggUNegg KeggATeggA")