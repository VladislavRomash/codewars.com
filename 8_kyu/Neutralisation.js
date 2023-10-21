function neutralise(s1, s2) {
    return s1.split('').map((m, i) => m === s2[i] && m === '+' ? '+' : m === s2[i] && m === '-' ? '-' : 0).join('')
}

neutralise("--++--", "++--++")
neutralise("-+-+-+", "-+-+-+")
neutralise("-++-", "-+-+")