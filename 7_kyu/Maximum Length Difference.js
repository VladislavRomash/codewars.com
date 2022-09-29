function mxdiflg(a1, a2) {
    const lengthArrA1 = a1.map(m => m.length)
    const lengthArrA2 = a2.map(m => m.length)
    return a1.length === 0 || a2.length === 0 ? -1 : Math.max(Math.max(...lengthArrA1) - Math.min(...lengthArrA2), Math.max(...lengthArrA2) - Math.min(...lengthArrA1))
}


mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])


